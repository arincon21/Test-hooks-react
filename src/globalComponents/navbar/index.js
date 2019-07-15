import React from 'react'
import logo from '../../images/logo.svg'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    Test hooks react - pokédex
                </span>
            </nav>
        </>
	)
}

export default Navbar
