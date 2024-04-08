import React from 'react';
import img from "../assets/ProfilePic.jpg"
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img} alt="Founder" />
            <h2>Ishan Srivastava</h2>
            <p>Don't settle for average</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/ishansrivastava123/" target={'blank'}><AiFillInstagram /></a>
                <a href="https://www.facebook.com/ishansrivastava123" target={'blank'}><AiFillFacebook /></a>
                <a href="https://github.com/ishansrivastava123/" target={'blank'}><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/srivastava-ishan/" target={'blank'}><AiFillLinkedin /></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer