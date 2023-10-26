import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>chat app</span>
      <div className="user">
      <img src="https://images.pexels.com/photos/17528291/pexels-photo-17528291/free-photo-of-blurred-silhouette-of-woman-walking-along-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <span></span>
      <button>log out</button>
      </div>
    </div>
  );
};

export default Navbar;
