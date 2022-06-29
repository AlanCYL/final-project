import React from 'react'
import { Link } from 'react-router-dom'
import GroupdetailPage from '../components/Groupdetail/GroupdetailPage'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../utils/config'
import { useParams } from 'react-router-dom'

function GroupDetail() {
  const [data, setData] = useState([])
  const { groupId } = useParams()
  useEffect(() => {
    let getDetail = async () => {
      let response = await axios.get(`${API_URL}/group/${groupId}`)
      setData(response.data)
    }
    getDetail()
  }, [])
  console.log('資料', data.name)
  return (
    <>
      {data.map((v, i) => {
        return (
          <div className="groupdetail container mt-7 mb-7">
            <div className="row">
              <div className="col-8 ">
                <div className="img-box ms-auto">
                  <img src={`${IMAGE_URL}${v.banner}`} alt="" />
                </div>
                <div className="ms-7 mt-5">
                  <div className="row">
                    <div className="col-3">
                      <div className="detailcover ">
                        <img
                          className="img-fulid w-80"
                          src={`${IMAGE_URL}${v.img}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-9 mb-5">
                      <h4 className="mt-4">{v.name}</h4>
                      <h5 className="mt-4 fw-normal">{v.address}</h5>
                      <h5 className="fw-normal">{v.phone}</h5>
                    </div>
                    <hr />
                    <h5 className="mt-4 fw-normal">{v.description}</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="container ps-2">
                  <h3 className="px-3 mb-5 text-info borderTitle">開團目標</h3>
                  <div className="mt-4 mb-1">
                    <div className="Gtitle d-flex align-items-center ">
                      <img
                        src={require('../image/groupdetail/icon7.png')}
                        alt=""
                      />
                      <h5 className="ms-2 mt-2">目前人數</h5>
                      <h2 className="ms-4">{v.goal_num}人</h2>
                    </div>
                  </div>
                  <div className="mt-4 mb-1">
                    <div className="Gtitle d-flex align-items-center ">
                      <img
                        src={require('../image/groupdetail/icon5.png')}
                        alt=""
                      />
                      <h5 className="ms-2 mt-2">開團倒數</h5>
                      <h2 className="ms-4">11天</h2>
                    </div>
                  </div>
                  <div className="mt-4 mb-1">
                    <div className="Gtitle d-flex align-items-center ">
                      <img
                        src={require('../image/groupdetail/icon4.png')}
                        alt=""
                      />
                      <h5 className="ms-2 mt-2">參團價格</h5>
                      <h2 className="ms-4">{v.price}</h2>
                    </div>
                  </div>
                  <div className="ms-auto mt-5">
                    <Link to="/ShoppingCart">
                      <button type="button" className="add-group btn btn-info">
                        我要參團
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 頁面切換 */}
              <div className="px-8 mt-5 container ">
                <GroupdetailPage />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default GroupDetail
