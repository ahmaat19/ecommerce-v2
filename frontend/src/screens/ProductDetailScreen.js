import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const ProductDetailScreen = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img
            src='https://preview.colorlib.com/theme/aroma/img/product/product1.png'
            className='img-fluid w-100'
            alt=''
          />
        </div>
        <div className='col-6 my-auto'>
          <h1 className='fs-3'>Faded SkyBlu Denim Jeans</h1>
          <h2 className='fs-4 custom-text-color'>$140.00</h2>
          <p>
            <span> Category: Electronics </span> <br />
            <span> Status: In Stock </span> <br />
          </p>
          <hr />
          <p>
            Mill Oil is an innovative oil filled radiator with the most modern
            technology. If you are looking for something that can make your
            interior look awesome, and at the same time give you the pleasant
            warm feeling during the winter.
          </p>
          <hr />
          <p className='text-center'>
            <span> Quantity: 4</span>{' '}
            <button className='btn btn-info bg-primary rounded-pill btn-m'>
              {' '}
              <FaCartPlus /> Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailScreen
