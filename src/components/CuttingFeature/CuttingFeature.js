import React from 'react'
import './CuttingFeature.css'
import UIDesign from '../../images/UIDesign.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faComments} from '@fortawesome/free-solid-svg-icons'

const CuttingFeature = () => {
  return (
    <div className='cef-con'>
        <p className='featureis'>Feature</p>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <img src={UIDesign} alt='uidesign' />
        <div className='a-container'>
          <div className='feature-itemis'>
            <FontAwesomeIcon icon={faComments} />
            <h2>Share team inboxes</h2>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <div className='learn-con'>
              <p>Learn more </p>
              <FontAwesomeIcon icon={faArrowRight} className='rightarrow' /> 
            </div>
          </div>
          <div className='feature-itemis'>
            <FontAwesomeIcon icon={faComments} />
            <h2>Share team inboxes</h2>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <div className='learn-con'>
              <p>Learn more </p>
              <FontAwesomeIcon icon={faArrowRight} className='rightarrow' /> 
            </div>
          </div>
          <div className='feature-itemis'>
            <FontAwesomeIcon icon={faComments} />
            <h2>Share team inboxes</h2>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <div className='learn-con'>
              <p>Learn more </p>
              <FontAwesomeIcon icon={faArrowRight} className='rightarrow' /> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default CuttingFeature