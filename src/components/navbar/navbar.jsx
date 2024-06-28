import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src= {logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchicon} alt='' className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt='' className='icons'/>
        <div className="navbar-profile">
          <img src={profile_icon} alt='' className='profile'/>
          <img src={caret_icon} alt='' className='profile'/>
          <div className="dropdown">
            <Link to="/Login" className='link'>Sign Out</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
