const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();  // Initialize express

// Use CORS middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2001',
    database: 'bank',
    port: 3306,
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database');
});

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send({ message: 'No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Failed to authenticate token:', err);
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        next();
    });
};

// Sign-in route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check in Customer table first
    const customerQuery = "SELECT * FROM customer WHERE email = ?";
    db.query(customerQuery, [email], (err, customerResults) => {
        if (err) return res.status(500).send({ message: 'Server error' });

        if (customerResults.length > 0) {
            const customer = customerResults[0];
            const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).send({
                message: 'Login successful',
                user: { id: customer.id, email: customer.email, role: 'customer' },
                token
            });
        } else {
            // Check in Employee table if no customer was found
            const employeeQuery = "SELECT * FROM employees WHERE email = ?";
            db.query(employeeQuery, [email], (err, employeeResults) => {
                if (err) return res.status(500).send({ message: 'Server error' });

                if (employeeResults.length > 0) {
                    const employee = employeeResults[0];
                    const token = jwt.sign({ id: employee.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    return res.status(200).send({
                        message: 'Login successful',
                        user: { id: employee.id, email: employee.email, role: 'employee' },
                        token
                    });
                } else {
                    return res.status(404).send({ message: 'User not found.' });
                }
            });
        }
    });
});

// Dashboard route (protected)
app.get('/dashboard', verifyToken, (req, res) => {
    res.status(200).send({ message: "Welcome to your dashboard!" });
});

// Start the server and listen on port 8081
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
