import React from 'react'
import Profile from '../components/MemberProfile/Profile'
import UpdateProfile from '../components/MemberProfile/UpdateProfile'
const MemberCenter = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center ">
            <ul className="list-group list-group-flush text-center w-50">
              <li className="my-3">
                <a href="" className="list-group-item active sidebar h5">
                  基本資料設定
                </a>
              </li>
              <li className="my-3">
                <a href="" className="list-group-item border-0  sidebar h5 ">
                  我的訂單
                </a>
              </li>
              <li className="my-3">
                <a href="" className="list-group-item sidebar  border-0 h5 ">
                  我的優惠券
                </a>
              </li>
              <li className="my-3">
                <a href="" className="list-group-item sidebar  border-0 h5">
                  收藏店家
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8">
            {/* <Profile /> */}
            <UpdateProfile />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenter
