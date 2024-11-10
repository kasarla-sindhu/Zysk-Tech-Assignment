import React from 'react'
import './Navbar.css'
import profileImg from '../../../src/images/profile-image-avatar.jpg'
import NavIcon from '../../images/nav-icon.jpg'

const Navbar = () => {
  return (
    <nav className='nav-con'>
        <ul className='list-con'>
            <li className='logo-con'>
                <img src={NavIcon}/>
                <h3>Untitled UI</h3>
            </li>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Products</li>
            <li className='nav-item'>Resources</li>
            <li className='nav-item'>Pricing</li>
        </ul>
        <img src={profileImg} alt="profileImage" />
    </nav>
  )
}

export default Navbar