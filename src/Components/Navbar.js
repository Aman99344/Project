import React from 'react'
import "../Components/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <img src="https://onemindservices.com/wp-content/uploads/2021/03/oms-png-2.png" alt="" />
        </div>
        <div className='nav-item'>
            <a className='home' href="/">Home</a>
            <a href="/">Service</a>
            <a href="/">Datacenter</a>
            <a href="/">Catlog</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
            <button>My Account</button>
        </div>
    </div>
  )
}

export default Navbar