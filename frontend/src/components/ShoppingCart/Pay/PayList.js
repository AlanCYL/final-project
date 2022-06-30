import Header from '../../Header/Header'
import { useState, useEffect } from 'react'
import { API_URL, IMAGE_URL } from '../../../utils/config'
import axios from 'axios'

function PayList(props) {
  console.log('我要', props)
  const goGroup = props.gotoId

  //暫時抓會員要付款的團單編號
  localStorage.setItem('payGroup', goGroup)
  const payGroup = localStorage.getItem('payGroup')
  const userID = localStorage.getItem('userID')
  const [data, setData] = useState({})
  //存放這個使用者有哪些優惠卷
  const [coupon, setCoupon] = useState([])
  // 選擇想使用的coupon
  const [getCou, setGetCou] = useState({})

  useEffect(() => {
    fetch(
      `${API_URL}/shoppingcart/paylist?payGroup=${payGroup}&userID=${userID}`,
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

  // coupon
  async function getCoupon() {
    const res = await axios.get(`${API_URL}/shoppingCart/cou?userID=${userID}`)
    //console.log(res.data.result)

    setCoupon(res.data.result)
  }

  function getEatTimeString() {
    if (data.eating_time === 1) {
      return '午餐12:00'
    } else if (data.eating_time === 2) {
      return '下午茶15:00'
    } else {
      return '晚餐18:00'
    }
  }

  function isEstablish() {
    if (data.established === 0) {
      return '未成團'
    } else {
      return '已成團'
    }
  }
  useEffect(() => {
    props.couponSelect(getCou)
  }, [getCou])
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-6" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../../../image/shoppingCart/icongroup04.png')}
                alt=""
              />
            </div>
            {/* List */}

            <div className="bg-secondary p-4 ">
              <div className="mb-4 pb-3 w-100"></div>
              <tr className="d-flex justify-content-between align-items-center mb-4 pb-4">
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <img
                    style={{ width: '90px' }}
                    src={`${IMAGE_URL}${data.img}`}
                    alt=""
                  />
                </td>
                <td>
                  <h6>{data.name}</h6>
                  <h6>
                    <div>{data.eating_date}</div>
                    <div>{getEatTimeString()}</div>
                  </h6>
                </td>
                <td>{isEstablish()}</td>
                <td>NT${data.price}</td>
              </tr>
            </div>
            {/* sale */}

            <div className="p-4" style={{ backgroundColor: '#FFE7A9' }}>
              <div className="d-flex justify-content-between align-items-center border-bottom border-dark my-4 pb-4">
                <h6>商品金額：{data.price}</h6>
                <h6>NT${data.price}</h6>
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
                  defaultValue={getCou}
                  onClick={() => {
                    getCoupon()
                  }}
                  onChange={(e) => {
                    setGetCou(e.target.value)
                  }}
                >
                  <option disabled selected>
                    請選擇折價卷
                  </option>
                  {/* map */}
                  {coupon.map((item, i) => (
                    <option value={item.id}>{item.reason}</option>
                  ))}
                </select>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <h6>NT$-{}</h6>
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
