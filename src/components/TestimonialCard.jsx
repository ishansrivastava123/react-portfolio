import React from 'react'

const TestimonialCard = ({ name, feedback}) => {
  return (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
  )
}

export default TestimonialCard