import React from 'react'

const Login = (props) => {
  const { isLoginPage, setIsLoginPage } = props
  return (
    <>
      <div className="d-flex text-center align-items-center">
        <div className="w-50 mx-4 text-nowrap">
          <h2 className="text-info">還不是會員嗎?</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsLoginPage(false)
            }}
          >
            快來註冊吧 <i className="fa-solid fa-paper-plane text-info"></i>
          </button>
          {/* <h5 className='mt-3 text-white member_slogon'>與我們一同用美味的餐點，讓大家因「吃」相遇</h5> */}
        </div>
        <div className="w-50 mx-4">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <img src={require('../../image/navbar/logo.png')} alt="" />
              <h3 className="card-title text-center mb-3">登入會員</h3>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">身分證字號(帳號)</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">密碼</label>
                </div>
                <div className="form-check mb-3">
                  <label
                    className="form-check-label me-5"
                    for="rememberPasswordCheck"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    記住我
                  </label>

                  <a href="/#">忘記密碼?</a>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold fs-5 "
                    type="submit"
                  >
                    登入
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
