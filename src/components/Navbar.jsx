import React from 'react'
import Button from './button/Button'

const Navbar = () => {
  return (
    <div data-animation="over-right" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <div className="container w-container">
          <a href="#" className="brand w-nav-brand"><img src="images/logo-prixa.svg" loading="lazy" width="200" alt=""/></a>
          <header role="navigation" className="nav-menu w-nav-menu">
            <a href="#" className="menu-item w-nav-link link">About</a>
            <a href="#" className="menu-item w-nav-link link">Our Work</a>
            <a href="#" className="menu-item w-nav-link link">Testemonial</a>
          </header>
          <div className="w-nav-button">
            <Button />
            <div className="icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div> 
  )
}

export default Navbar
