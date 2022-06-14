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
                <a href="" className="sidebarActive p-1 btn h6">
                  基本資料設定
                </a>
              </li>
              <li className="my-3">
                <a href="" className="sidebar h6 p-1 btn">
                  我的訂單
                </a>
              </li>
              <li className="my-3">
                <a href="" className="sidebar h6 p-1 btn">
                  我的優惠券
                </a>
              </li>
              <li className="my-3">
                <a href="" className="sidebar h6 p-1 btn">
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
