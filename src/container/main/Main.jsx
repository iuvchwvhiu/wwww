import React from 'react';
import './main.css'

const Main = () => {
  return (
    <div className="main_container">
      <div className="block">
        <div className="music one">
          <h4 className='h4'>Become a Volunteer</h4>
          <p className='p1'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
             Mauris <br /> tempus vestib ulum mauris quis <br /> aliquam.</p>
        </div>
        <div className="music two">
          <h4 className='h4'>Dance & Music</h4>
          <p className='p1'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
             Mauris <br /> tempus vestib ulum mauris quis <br /> aliquam.</p>
        </div>
        <div className="music three">
          <h4 className='h4'>Online Conference</h4>
          <p className='p1'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
             Mauris <br /> tempus vestib ulum mauris quis <br /> aliquam.</p>
        </div>
      </div>
      <div className="Wellcome">
        <div className='blackout'>
          <div className="text">
            <h2 className='h2'>Wellcome to our Charity</h2>
            <p className='p-mauris'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus <br /> 
            vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer <br />
              accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu <br />
               libero consequat tempus. Quisque molestie convallis tempus. Ut semper <br />
               purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.</p>
            <button className='read btn-1'>Read More</button>
          </div>
          <div className="photo">
            <div className="img"></div>
          </div>
        </div>
      </div>
      <div className="childrens">
        <div className="events">
          <h2 className='event-h2'>Upcoming Events</h2>
          <div className="bring 1"></div>
          <div className="bring 2"></div>
          <div className="bring 3"></div>
        </div>
        <div className="cause">
          <h2 className='caus-h2'>Featured Cause</h2>
          <div className='kids'></div>
        </div>
      </div>
    </div>
  )
}

export default Main;