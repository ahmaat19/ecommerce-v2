import React from 'react'
import Header from '../components/Header'
import ProductCardScreen from './ProductCardScreen'
import ShoppingCategoryScreen from './ShoppingCategoryScreen'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
            <ShoppingCategoryScreen />
          </div>
          <div className='col-lg-9 col-md-9 col-sm-12 col-12'>
            <div className='form-group '>
              <input
                type='text'
                className='form-control rounded-pill shadow-sm '
                placeholder='Search product '
              />
            </div>
            <ProductCardScreen />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
