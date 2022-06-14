import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import share from '../image/login/share.mp4'
const MemberLogin = () => {
  return (
    <>
      <div className="video-box">
        <div className="container top-50 start-50 translate-middle">
          {/* 註冊 */}
          <Register />
          {/* 登入 */}
          {/* <Login /> */}
        </div>
        <div className="over-lay" />
        <video
          className="video"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          playsInline
        >
          <source src={share} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default MemberLogin
