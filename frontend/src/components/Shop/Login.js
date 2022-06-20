import React from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'
import shoploginvideo from '../../image/shop/shoploginvideo.mp4'

function Login(props) {
  const { isShopLogin, setIsShopLogin } = props
  return (
    <>
      <div className="container-fluid d-flex">
        <div className=" col-md-12 col-lg-7  d-flex justify-content-start align-items-center">
          <div className="text-center position-absolute content">
            <h2 className="mb-4">加入Unii店家</h2>
            <button
              className="btn btn-primary mb-3"
              onClick={() => {
                setIsShopLogin(false)
              }}
            >
              快速註冊
            </button>
            <h5>與我們一同用美味的餐點，讓大家因「吃」相遇</h5>
          </div>
          <video className="img-fluid" autoPlay muted loop>
            <source src={shoploginvideo} type="video/mp4" />
          </video>
          {/* <div className="video-viewpoint position-relative"></div> */}
        </div>
        <Col lg></Col>
        <div className="col-md-12 col-lg-5">
          <div className="form-size mt-7 ms-6">
            <h2 className="text-center mb-5">店家登入</h2>
            <form>
              {/* Email帳號 */}
              <div className="mb-4">
                <label className="form-label" htmlFor="">
                  <h5>帳號</h5>
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  required
                />
              </div>

              {/* 密碼 */}
              <div className="mb-4">
                <label className="form-label" htmlFor="">
                  <h5>密碼</h5>
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="d-flex justify-content-between mb-3">
                <a href="/">忘記密碼</a>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="">
                    記住我
                  </label>
                </div>
              </div>

              {/* login button */}
              <div className="d-grid gap-2 mx-auto">
                <button className="btn btn-danger" type="button">
                  登入
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
