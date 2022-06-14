import React from 'react'
import Header from '../../Header/Header'

const EmptyReserveList = () => {
  return (
    <>
      <div className=" container mb-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../../../image/shoppingCart/icongroup06.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="d-flex flex-column align-items-center">
              {/* <div>
                <img
                  className="me-3"
                  style={{ width: '200px' }}
                  src={require('../../../image/shoppingCart/cart1.png')}
                  alt=""
                />
              </div> */}
              <h4 className="mt-5">您的購物車中沒有商品</h4>
              <button className="mt-4 bg-primary px-5 py-2 rounded ">
                參團去
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyReserveList
