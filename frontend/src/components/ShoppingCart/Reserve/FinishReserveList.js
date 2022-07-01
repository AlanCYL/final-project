import React from 'react'
import Header from '../../Header/Header'
import Card from '../../Card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { API_URL } from '../../../utils/config'

const FinishReserveList = (props) => {
  const [data, setData] = useState([])
  const [para, setPara] = useState({
    groups: props.groups,
    userID: `${props.userID}`,
  })

  async function getApi() {
    const res = await axios.post(`${API_URL}/shoppingCart/finishre`, para)

    setData(res.data.result)
  }
  useEffect((props) => {
    if (!para) return
    getApi()
  }, [])
  function getEatTimeString(item) {
    if (item.eating_time === 1) {
      return '午餐12:00'
    } else if (item.eating_time === 2) {
      return '下午茶15:00'
    } else {
      return '晚餐18:00'
    }
  }

  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5 me-5"
                src={require('../../../image/shoppingCart/icongroup03.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="bg-secondary d-flex flex-column align-items-center">
              <div className="mt-6 mb-5">
                <img
                  style={{ width: '100px' }}
                  src={require('../../../image/shoppingCart/finish.png')}
                  alt=""
                />
              </div>
              <h3 className="pb-3 mb-5  w-75 text-center">已完成訂位</h3>

              <table class="table w-75">
                <thead class="">
                  <tr>
                    <th>訂單編號：</th>
                  </tr>
                </thead>
                <tbody>
                  {/* map */}
                  {data.map((item, i) => (
                    <tr className="tr-hover">
                      <td className="py-5">{item.id}</td>
                      <td className="py-5">{item.name}</td>
                      <td className="py-5">
                        <div>({item.eating_date})</div>
                        <div>({getEatTimeString(item)})</div>
                      </td>
                      <td className="py-5">價格：${item.price}</td>
                      <td className="py-5 text-danger">(已成團)</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
        <div className="d-flex mt-4 justify-content-center">
          <div className="me-4 ">
            <Card />
          </div>
          <div className="me-4 ">
            <Card />
          </div>
          <div className="me-4 ">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishReserveList
