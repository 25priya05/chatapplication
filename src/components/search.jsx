import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text"  placeholder='Find a user'/>
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/17528291/pexels-photo-17528291/free-photo-of-blurred-silhouette-of-woman-walking-along-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="userchatinfo">
        <span>jany</span>
      </div>
      </div>
    </div>
  )
}

export default Search
