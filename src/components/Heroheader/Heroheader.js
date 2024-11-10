import React from 'react'
import './Heroheader.css'
import heroheaderImg from '../../images/heroheader-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar'
import Companies from '../Companies/Companies'
import Features from '../Features/Features'
import Sisyphus from '../Sisyphus/Sisyphus'
import CuttingFeature from '../CuttingFeature/CuttingFeature'


const Heroheader = () => {
  return (
    <div className='heroheader-con'>
        <Navbar/>
        <div className='heroheader-text-con'>
            <div className='dashboard-con'>
                <p className='new-feature'>New feature</p>
                <p className='check-text'>Check out the team dashboard</p>
                <FontAwesomeIcon icon={faArrowRight} className='rightarrow' />
            </div>
            <h1 className='hero-main-heading'>Beautiful analytics to grow smarter</h1>
            <p className='hero-des'>Powerful,self-serve product and growth analytics to help you convert,engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className='demo-btns'>
                <p className='demo'>Demo</p>
                <p className='signup'>Signup</p>
            </div>
            <div className='heroheader-image'>
                <img src={heroheaderImg} alt='dashboard-img' />
            </div>
        </div>
        <Companies/>
        <Features/>
        <Sisyphus/>
        <CuttingFeature/>
    </div>
  )
}

export default Heroheader