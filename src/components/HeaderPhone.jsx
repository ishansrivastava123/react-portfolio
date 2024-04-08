import React from 'react'
import NavContent from './NavContent'

const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneAppear" : ""}`}>
        <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default HeaderPhone