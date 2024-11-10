import React from 'react'
import boltshift from '../../images/boltshift-icon.png'
import lightbox from '../../images/lightbox.jpg'
import featherdev from '../../images/featherdev.jpg'
import spherule from '../../images/spherule.jpg'
import globalbank from '../../images/globalbank.jpg'
import nietzsche from '../../images/nietzsche.jpg'
import './Companies.css'

const Companies = () => {
  return (
    <div className='companies-con'>
        <p>Join 4,000+ companies already growing</p>
        <div className='companies-list'>
            <div className='company-item'>
                <img src={boltshift} alt='boltshift'/>
                <h3>Boltshift</h3>
            </div>
            <div className='company-item'>
                <img src={lightbox} alt='boltshift'/>
                <h3>Lightbox</h3>
            </div>
            <div className='company-item'>
                <img src={featherdev} alt='boltshift'/>
                <h3>FeatherDev</h3>
            </div>
            <div className='company-item'>
                <img src={spherule} alt='boltshift'/>
                <h3>Spherule</h3>
            </div>
            <div className='company-item'>
                <img src={globalbank} alt='boltshift'/>
                <h3>GlobalBank</h3>
            </div>
            <div className='company-item'>
                <img src={nietzsche} alt='boltshift'/>
                <h3>Nietzsche</h3>
            </div>
        </div>
    </div>
  )
}

export default Companies