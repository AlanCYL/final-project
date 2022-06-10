import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import share from '../image/login/share.mp4'
import '../styles/_memberLogin.scss'
const MemberLogin = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 m-auto">
            {/* <Login /> */}
            {/* <Register /> */}
          </div>
        </div>
      </div>
      <div className="video-box">
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
