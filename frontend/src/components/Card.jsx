import React from 'react';
import './Card.scss';

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Card;
