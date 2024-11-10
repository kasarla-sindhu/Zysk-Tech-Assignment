import React from 'react'
import './Sisyphus.css'
import featherImg from '../../images/featherdev.jpg'
import profileIcon from '../../images/profile-image-avatar.jpg'

const Sisyphus = () => {
  return (
    <div className='sis-con'>
        <div className='sis-title-con'>
            <img src={featherImg} alt="feather" />
            <p>Sisyphus</p>
        </div>
        <h1>We've been using Untitled to kick start every new project and can't imagine working without it.</h1>
        <div className='profile-details'>
            <img src={profileIcon} />
            <h4>Candice Wu</h4>
            <p>Product Manager, Sisyphus</p>
        </div>
    </div>
  )
}

export default Sisyphus