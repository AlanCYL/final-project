import React from 'react'
import Header from '../../Header/Header'

const PayList = () => {
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
            <div className="bg-secondary p-4 ">
              <div className="mb-4 pb-3 border-bottom w-100">
                <th>
                  <input type="checkbox" />
                </th>
                <th>全選</th>
              </div>
              <tr className="d-flex justify-content-between align-items-center border-bottom mb-4 pb-4">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    style={{ width: '90px' }}
                    src={require('../../../image/shoppingCart/dSquare.png')}
                    alt=""
                  />
                </td>
                <td>
                  <h6>鼎泰豐(復興店)</h6>
                  <h6>2022/06/17 中午12:00</h6>
                </td>
                <td>人數 : 1</td>
                <td>NT$1280</td>
              </tr>
              {/* repeat */}
              <tr className="d-flex justify-content-between align-items-center border-bottom mb-4 pb-4">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    style={{ width: '90px' }}
                    src={require('../../../image/shoppingCart/dSquare.png')}
                    alt=""
                  />
                </td>
                <td>
                  <h6>鼎泰豐(復興店)</h6>
                  <h6>2022/06/17 中午12:00</h6>
                </td>
                <td>人數 : 1</td>
                <td>NT$1280</td>
              </tr>
            </div>
            {/* sale */}
            <div className="p-4" style={{ backgroundColor: '#FFE7A9' }}>
              <div className="d-flex justify-content-between align-items-center border-bottom border-dark my-4 pb-4">
                <h6>商品金額：</h6>
                <h6>NT$2280</h6>
              </div>

              <div className="d-flex mb-2">
                <img
                  style={({ width: '20px' }, { height: '20px' })}
                  src={require('../../../image/shoppingCart/sale.png')}
                  alt=""
                />
                <h6 className="ms-1">折價卷</h6>
              </div>

              <div className="mb-3">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>使用折價卷</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <h6>NT$-200</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center border-top border-dark pt-4 mt-2">
                <h6>總計：</h6>
                <h6>NT$2080</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayList
