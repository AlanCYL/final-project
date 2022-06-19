import React from 'react'
import Header from '../../Header/Header'
import Side from '../Side'

const ConfirmReserveList = () => {
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex ">
          <Side />
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../../../image/shoppingCart/icongroup02.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="list w-100">
              <div class="show active" id="nav-home">
                <table class="table">
                  <thead class="">
                    <tr>
                      <th>開團店家</th>
                      <th>參團時間</th>
                      <th>價格</th>
                      <th>人數</th>
                      <th>小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr-hover">
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../../../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                    </tr>

                    <tr className="tr-hover">
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../../../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                    </tr>

                    <tr className="tr-hover">
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../../../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* button */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmReserveList
