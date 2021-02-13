import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header-color '>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-5 '>
              <img
                src='https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-7  my-auto pb-5'>
              <h3 className='fw-light'>Shop is fun</h3>
              <h1 className='fw-bold  display-5'>BROWSE OUR PREMIUM PRODUCT</h1>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <button className='btn btn-info rounded-pill mt-3'>
                Browse Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
