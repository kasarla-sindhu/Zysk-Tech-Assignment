import React from 'react'
import './Features.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComments ,faBolt} from '@fortawesome/free-solid-svg-icons'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'



const Features = () => {
  return (
    <div className='features-con'>
        <p className='feature'>Features</p>
        <h1>Analytics that feels like it's from the future</h1>
        <p className='des'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className='feature-items-con'>
            <div className='feature-item'>
                <FontAwesomeIcon icon={faComments} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='feature-item'>
                <FontAwesomeIcon icon={faBolt} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='feature-item'>
                <FontAwesomeIcon icon={faBolt} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='feature-item'>
                <FontAwesomeIcon icon={faBolt} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='feature-item'>
                <FontAwesomeIcon icon={faBolt} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='feature-item'>
            <FontAwesomeIcon icon={faStarOfLife} />
                <h2>Share team inboxes</h2>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
        </div>

    </div>
  )
}

export default Features