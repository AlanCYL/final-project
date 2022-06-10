import React from 'react'
import Login from '../components/Login/Login'
// import Register from '../components/Login/Register'
import share from '../image/login/share.mp4'
import '../styles/_memberLogin.scss'
const MemberLogin = () => {
  return (
    <>
      <div className="video-box">
        <div class="container h-100 top-50 start-50 translate-middle">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-50 mx-4 text-nowrap">
              <h2 className="text-info">還不是會員嗎?</h2>
              <button className="btn btn-primary">
                快來註冊吧 <i class="fa-solid fa-paper-plane text-info"></i>
              </button>
            </div>
            <div class="w-50 mx-4">
              <Login />
            </div>
          </div>
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
