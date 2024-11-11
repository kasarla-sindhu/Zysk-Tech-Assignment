import React from 'react'
import './FAQ.css'
import stillHaveFaqs from '../../images/still-have-faqs.jpg'

const FAQ = () => {
  return (
    <div className='faq'>
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing.</p>
        <div className='faqs-con'>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
          <div className='faq-con'>
            <div className='q-con'>
              <h1> Is there a free trial available ?</h1>
              <button> + </button>
            </div>
            <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <hr/>
        </div>
        <div className='still-con'>
          <img src={stillHaveFaqs} alt="Still Have Questions"/>
          <h1>Still have questions?</h1>
          <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button>Get in touch</button>
        </div>
    </div>
  )
}

export default FAQ