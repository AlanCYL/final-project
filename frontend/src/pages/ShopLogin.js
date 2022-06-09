import React from 'react'
import shoploginvideo from '../image/login/shoploginvideo.mp4'
import NavbarShop from '../components/Navbar/NavbarShop'
// import Nav from '../components/Navbar/NavbarDesktop'
import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'
function ShopLogin() {
  return (
    <>
      {/* <Nav /> */}
      <NavbarShop />

      <div className="container-fluid d-flex">
        <div className=" col-md-12 col-lg-7  d-flex justify-content-center align-items-center">
          <div className="text-center position-absolute content">
            <h2 className="mb-4">加入Unii店家</h2>
            <button className="btn btn-primary mb-3">快速註冊</button>
            <h5>與我們一同用美味的餐點，讓大家因「吃」相遇</h5>
          </div>
          <div>
            <video className="img-fluid position-relative" autoPlay muted loop>
              <source src={shoploginvideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-md-12 col-lg-5 ms-5">
          <div className="form-size mt-7">
            <h2 className="text-center">店家登入</h2>
            <Login />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShopLogin
