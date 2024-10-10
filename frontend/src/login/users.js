// users.js
const bcrypt = require('bcryptjs');

const users = [
    {
        id: 1,
        email: 'user@example.com',
        password: bcrypt.hashSync('password123', 8), // Hash the password for storage
    }
];

module.exports = users;
