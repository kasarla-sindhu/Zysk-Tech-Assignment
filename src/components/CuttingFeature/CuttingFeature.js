import React from 'react'
import './CuttingFeature.css'
import UIDesign from '../../images/UIDesign.jpg'

const CuttingFeature = () => {
  return (
    <div className='cef-con'>
        <p className='featureis'>Feature</p>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <img src={UIDesign} alt='uidesign' />
    </div>
  )
}

export default CuttingFeature