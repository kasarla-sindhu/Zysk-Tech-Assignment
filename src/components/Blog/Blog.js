import React from 'react'
import './Blog.css'
import BlogImg1 from '../../images/blogImg1.jpg'
import BlogImg2 from '../../images/blogImg2.jpg'
import BlogImg3 from '../../images/blogImg3.jpg'
import profileImg from '../../images/profile-image-avatar.jpg'

const Blog = () => {
  return (
    <div className='blog-con'>
        <div className='ourblog-con'>
            <div className='l-con'>
                <p className='d'>Our Blog</p>
                <h1>Latest Blog Posts</h1>
                <p>Tool and strategies modern teams need to help their companies grow.</p>
            </div>
            <div className='r-con'>
                <button>View all posts</button>
            </div>
        </div>
        <div className='s-con'>
            <div className='s-item'>
                <img src={BlogImg1} alt='Image'/>
                <p className='d'>Design</p>
                <h1>UX Review Presentation</h1>
                <p className='des'>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
                30-minute onboarding call to get you up and running as soon as possible.</p>
                <div className='s-details'>
                    <img src={profileImg} alt='img' />
                    <div className='name-details'>
                        <h4>Olivia Rhye</h4>
                        <p>20 Jan 2024</p>
                    </div>
                </div>   
            </div>
            <div className='s-item'>
                <img src={BlogImg2} alt='Image' />
                <p className='d'>Design</p>
                <h1>UX Review Presentation</h1>
                <p className='des'>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
                30-minute onboarding call to get you up and running as soon as possible.</p>
                <div className='s-details'>
                    <img src={profileImg} alt='img'/>
                    <div className='name-details'>
                        <h4>Olivia Rhye</h4>
                        <p>20 Jan 2024</p>
                    </div>
                </div>       
            </div>
            <div className='s-item'>
                <img src={BlogImg3} alt='Image' />
                <p className='d'>Design</p>
                <h1>UX Review Presentation</h1>
                <p className='des'>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
                30-minute onboarding call to get you up and running as soon as possible.</p>
                <div className='s-details'>
                    <img src={profileImg} alt='img' />
                    <div className='name-details'>
                        <h4>Olivia Rhye</h4>
                        <p>20 Jan 2024</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Blog