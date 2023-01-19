import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className='container'>
      <div className="account">
        <p className='mail'>MAIL:contact@ourcharity.com 
          <span className='phone'> PHONE: +24 3772 120 091 / +56452 4567</span></p>
        <button className='btn-acc'>Donate Now</button>
      </div>
      <div className='header_nav'>
        <div className="logo">The<span className='charity'>Charity</span></div>
        <div className="links">
          <a href="#" className='charity menu_link'>Home</a>
          <a href="#" className='menu_link'>About us</a>
          <a href="#" className='menu_link'>Causes</a>
          <a href="#" className='menu_link'>Gallery</a>
          <a href="#" className='menu_link'>News</a>
          <a href="#" className='menu_link'>Contact</a>
        </div>
      </div>
      <div className="content">
        <h1>Don<span className='charity'>a</span>te</h1>
        <h3>4 a better world</h3>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odio esse hic. <br />
         Inventore ad incidunt consequuntur ratione, quae corrupti voluptates.</p>
        <button className='btn-1'>Donate Now</button>
        <button className='btn-2'>Read More</button>
      </div>
    </div>
  )
}

export default Header;