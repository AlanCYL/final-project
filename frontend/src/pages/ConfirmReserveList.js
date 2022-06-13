import React from 'react'
import Header from '../components/Header/Header'

const ConfirmReserveList = () => {
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
                src={require('../image/shoppingCart/icongroup05.png')}
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
                          src={require('../image/shoppingCart/d.png')}
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
                          src={require('../image/shoppingCart/d.png')}
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
                          src={require('../image/shoppingCart/d.png')}
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
              <div className="d-flex justify-content-between">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 ms-6 mt-4"
                >
                  返回購物車
                </a>
                <a
                  type="button"
                  className="bg-primary text-white px-4 py-2 me-5 mt-4"
                >
                  確定訂位
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmReserveList
