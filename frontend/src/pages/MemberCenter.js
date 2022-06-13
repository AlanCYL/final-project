import React from 'react'
import Profile from '../components/MemberProfile/Profile'
const MemberCenter = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 text-center text-nowrap">
            <ul>
              <li className="my-3">
                <a href="" className="text-primary h5">
                  基本資料設定
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-info h5">
                  我的訂單
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-info h5">
                  我的優惠券
                </a>
              </li>
              <li className="my-3">
                <a href="" className="text-info h5">
                  收藏店家
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8 text-center">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenter
