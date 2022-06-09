import React from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import share from '../image/login/share.mp4'
import '../styles/_memberlogin.scss'
const MemberLogin = () => {
  return (
    <>
      <div className="video-box position-absolute">
        <div className="over-lay"></div>
        <video
          className="video"
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={share} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Login />
            {/* <Register /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLogin
