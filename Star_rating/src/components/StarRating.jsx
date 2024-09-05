import React from 'react'
import { useState } from 'react'

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
    }

    return (
        <div style={{
        display: 'inline-block',
        padding: '3rem',
        borderRadius: '18px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'blue',
        textAlign: 'center',
        }}>
          {Array(5).fill().map((_, index) => (
            <span
              onClick={() => handleClick(index)}
              style={{
                fontSize: '2rem',
                color: index < rating ? 'gold' : 'gray',
                 
              }}
            >
              ★
            </span>
          ))}
        </div>
      );
    }

export default StarRating