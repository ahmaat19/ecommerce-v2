import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-secondary mt-5'>
      <div className='container py-5'>
        <div className='row g-3'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <h1 className='fs-3 fw-bold'>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              magnam sit inventore unde quisquam id officiis. <br /> <br />
              Temporibus labore ratione perferendis, optio veritatis nisi minus
              natus mollitia eius consequatur. Ipsa, ab.
            </p>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <h1 className='fs-3 fw-bold'>Quick Links</h1>

            <p>
              <Link to='/'>Home</Link>
            </p>
            <p>
              <Link to='/cart'>Cart</Link>
            </p>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <h1 className='fs-3 fw-bold'>Contact Us</h1>

            <p>
              <FaLocationArrow /> <Link to='/'>Head Office</Link> <br />
              <span className='pl-3'> 123, Main Street, Your City</span>
            </p>
            <p>
              <FaPhoneAlt /> <Link to='/'>Phone Number</Link> <br />
              <span className='pl-3'> +123 456 7890</span> <br />
              <span className='pl-3'> +123 456 7890</span> <br />
            </p>
            <p>
              <FaEnvelope /> <Link to='/'>Email</Link> <br />
              <span className='pl-3'> free@infoexample.com</span> <br />
              <span className='pl-3'> free@infoexample.com</span> <br />
            </p>
          </div>
        </div>
      </div>
      <div className='bg-primary text-center p-5'>
        <footer>
          <div className='model-footer'>
            Copyright © 2021 All rights reserved | Design & Built by Ahmed
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
