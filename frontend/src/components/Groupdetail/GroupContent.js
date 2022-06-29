import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import { imported as useSearchParams } from 'react-router-dom'

function GroupContent() {
  // const [searchParams, setSearchParams] = useSearchParams()
  // searchParams.get(`${searchParams}`)
  // useEffect(() => {
  //   let getDetail = async () => {
  //     let response = await axios.get(`${API_URL}/shoplist/${shopId}`)
  //     setData(response.data)
  //   }
  //   getDetail()
  // }, [])
  return (
    <>
      <div className="mx-6">
        <div className="container mt-5 content-info ps-4 mb-5">
          <div>
            <h4 className="text-info">已達成開團目標</h4>
            <h5 className="fw-normal">2022/05/12 10人開團成功</h5>
            <h5 className="fw-normal">2022/05/22 20人開團成功</h5>
          </div>
        </div>
        {/* 開團內容 */}
        <div className="continer ">
          <div className="row ">
            <div className="col-5 bg-secondary ">
              <div className="mt-4">
                <div className="Gtitle d-flex align-items-center ">
                  <img
                    src={require('../../image/groupdetail/icon7.png')}
                    alt=""
                  />
                  <h5 className="ms-2 mt-2">目前人數</h5>
                  <h3 className="ms-4 mt-2">23人</h3>
                </div>
                <div className="mt-4">
                  <div className="Gtitle d-flex align-items-center ">
                    <img
                      src={require('../../image/groupdetail/icon5.png')}
                      alt=""
                    />
                    <h5 className="ms-2 mt-2">用餐日期</h5>
                    <h3 className="ms-4 mt-2">2022/06/14</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="Gtitle d-flex align-items-center ">
                    <img
                      src={require('../../image/groupdetail/icon6.png')}
                      alt=""
                    />
                    <h5 className="ms-2 mt-2">用餐時間</h5>
                    <h3 className="ms-4">12:00 pm</h3>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="Gtitle d-flex align-items-center ">
                    <img
                      src={require('../../image/groupdetail/icon4.png')}
                      alt=""
                    />
                    <h5 className="ms-2 mt-2">參團價格</h5>
                    <h3 className="ms-4">$1000</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 dish-set py-4 ps-4">
              <h5>菜色(每人)</h5>
              <div className="d-flex mt-4">
                <div>
                  <p>排骨蛋炒飯</p>
                  <p>小籠包(10顆)</p>
                  <p>蝦肉煎餃(6顆)</p>
                  <p>元盅雞湯</p>
                </div>
                <div className="ms-5">
                  <p>涼拌雲耳</p>
                  <p>巧克力小籠包(５顆)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupContent
