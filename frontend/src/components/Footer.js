import React from 'react'
import { FaEnvelope, FaLocationArrow, FaMap, FaPhoneAlt } from 'react-icons/fa'

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
              <a href=''>Home</a>
            </p>
            <p>
              <a href=''>Login</a>
            </p>
            <p>
              <a href=''>Cart</a>
            </p>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <h1 className='fs-3 fw-bold'>Contact Us</h1>

            <p>
              <FaLocationArrow /> <a href=''>Head Office</a> <br />
              <span className='pl-3'> 123, Main Street, Your City</span>
            </p>
            <p>
              <FaPhoneAlt /> <a href=''>Phone Number</a> <br />
              <span className='pl-3'> +123 456 7890</span> <br />
              <span className='pl-3'> +123 456 7890</span> <br />
            </p>
            <p>
              <FaEnvelope /> <a href=''>Email</a> <br />
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
