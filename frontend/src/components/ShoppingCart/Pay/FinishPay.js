import React from 'react'
import Header from '../../Header/Header'
import Card from '../../../components/Card/Card'

const FinishPay = () => {
  return (
    <>
      <div className=" container my-6 ">
        <Header />
        <div className="d-flex justify-content-center mb-8">
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
            <div className="bg-secondary p-4 d-flex flex-column align-items-center h-50">
              <div className="mt-4">
                <img
                  style={{ width: '80px' }}
                  src={require('../../../image/shoppingCart/nike.png')}
                  alt=""
                />
              </div>
              <h4 className="mt-5">結帳完成</h4>
            </div>
            {/* reconmand */}
            <div className="d-flex mt-6 justify-content-center">
              <div
                style={{ width: '30px', height: '20px' }}
                className="bg-primary"
              ></div>
              <h5 className="mx-2" style={{ marginTop: '-2px' }}>
                推薦開團
              </h5>
              <div
                style={{ width: '30px', height: '20px' }}
                className="bg-primary"
              ></div>
            </div>
            <div className="d-flex mt-4 ">
              <div className="me-4 mb-8">
                <Card />
              </div>
              <div className="me-4 mb-8">
                <Card />
              </div>
              <div className="me-4 mb-8">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishPay
