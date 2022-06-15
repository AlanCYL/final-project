import React from 'react'
import Header from '../../Header/Header'

const FinishPay = () => {
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../../../image/shoppingCart/icongroup01.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="bg-secondary p-4 "></div>
            {/* sale */}

            <button
              className="px-4 py-2  mt-5 bg-primary text-light"
              style={{ marginLeft: '19rem' }}
            >
              前往結帳
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishPay
