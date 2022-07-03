import React from 'react'
import Card from '../../../components/Card/Card'
import { useState, useEffect } from 'react'
import { API_URL, IMAGE_URL } from '../../../utils/config'

const FinishPay = () => {
  const payGroup = localStorage.getItem('payGroup')
  const userID = localStorage.getItem('userID')
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(
      `${API_URL}/shoppingcart/finishlist?payGroup=${payGroup}&userID=${userID}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.result[0])
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }, [])
  function getEatTimeString() {
    if (data.eating_time === 1) {
      return '午餐12:00'
    } else if (data.eating_time === 2) {
      return '下午茶15:00'
    } else {
      return '晚餐18:00'
    }
  }
  return (
    <>
      <div className=" container my-6 ">
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
              <div className="mb-6">
                <div className="mt-7">
                  <img
                    style={{ width: '80px' }}
                    src={require('../../../image/shoppingCart/nike.png')}
                    alt=""
                  />
                </div>
                <h4 className="mt-5">結帳完成</h4>
              </div>
              <div className="w-100">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">參團店家</th>
                      <th scope="col">參團資訊</th>
                      <th scope="col">金額資訊</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex flex-column">
                        <img
                          style={{ width: '100px', height: '100px' }}
                          className="logo py-4 img-fluid"
                          src={`${IMAGE_URL}${data.img}`}
                          alt=""
                        />
                        <div style={{ marginLeft: '14px' }}> {data.name}</div>
                      </td>

                      <td className=" pt-4">
                        <div className=" pt-2">
                          用餐日期：{data.eating_date}
                        </div>
                        <div className=" pt-2">
                          用餐時間：{getEatTimeString()}
                        </div>
                      </td>
                      <td className=" pt-4">
                        <div className=" pt-2">商品金額：{data.price}</div>
                        <div className=" pt-2">總付款金額：{data.total}</div>
                        <div className=" pt-2">付款方式：信用卡支付</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
