import React from 'react'
import shoploginvideo from '../../../image/shop/shoploginvideo.mp4'
import ShopLoginForm from './LoginForm'

function Login() {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className=" col-md-12 col-lg-7  d-flex justify-content-start align-items-center">
          <div className="text-center position-absolute content">
            <h2 className="mb-4">加入Unii店家</h2>
            <button className="btn btn-primary mb-3">快速註冊</button>
            <h5>與我們一同用美味的餐點，讓大家因「吃」相遇</h5>
          </div>
          <video className="img-fluid" autoPlay muted loop>
            <source src={shoploginvideo} type="video/mp4" />
          </video>
          {/* <div className="video-viewpoint position-relative"></div> */}
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="form-size mt-7 ms-6">
            <ShopLoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
