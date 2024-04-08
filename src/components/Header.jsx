import React from 'react';
import NavContent from './NavContent';
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
          <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  )
}

export default Header