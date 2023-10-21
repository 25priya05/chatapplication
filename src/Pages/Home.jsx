import React from 'react'
import sidebar from '../components/sidebar'
import chat from  '../components/chat'


const Home = () => {
  return (
    <div className='Home'>
      <div className="container">

        <sidebar />
  
        <chat />
      </div>
    </div>
  )
}

export default Home
