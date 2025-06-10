import React from 'react'

const Navbar = () => {
  return (
    <div data-animation="over-right" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <div className="container w-container">
          <a href="#" className="brand w-nav-brand"><img src="images/logo-prixa.svg" loading="lazy" width="200" alt=""/></a>
          <header role="navigation" className="nav-menu w-nav-menu">
            <a href="#" className="menu-item w-nav-link">About</a>
            <a href="#" className="menu-item w-nav-link">Our Work</a>
            <a href="#" className="menu-item w-nav-link">Testemonial</a>
            <a href="#" className="button ghost w-inline-block">
              <div className="text-block-3">View Case Studies</div><img src="images/arrow-btn.svg" loading="lazy" alt=""/>
            </a>
            <a href="#" className="button w-inline-block">
              <div className="text-block-2">Contact Us</div><img src="images/arrow-dark.svg" loading="lazy" alt=""/>
            </a>
          </header>
          <div className="w-nav-button">
            <div className="icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div> 
  )
}

export default Navbar
