import React from 'react'

export const Card = ({ Heading, Description }) => {
  return (
    <div>
        <div>
            <h1>{Heading}</h1>
        </div>
        <div>
            <p>
                {Description}
            </p>
        </div>
    </div>
  )
}
export default Card;
