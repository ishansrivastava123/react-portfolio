import React from 'react'

const NavContent = ({ setMenuOpen}) => {
  return (
    <>
        <h2>Ishan.</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
            <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
            <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#testimonial">Testimonial</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </div>
        <a href="mailto:ishansrivastava123@gmail.com">
            <button>Email</button>
        </a>
    </>
  )
}

export default NavContent