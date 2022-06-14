import React from 'react'

const Register = () => {
  return (
    <>
      <div className="d-flex text-center align-items-center">
        <div className="w-75 mx-auto">
          <div className="card border-0 shadow rounded-3 mb-5">
            <div className="card-body py-3 px-4 px-sm-5">
              <h4 className="card-title text-center  my-2">會員註冊</h4>
              {/* form表單內容 */}
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUserName"
                    placeholder="userName"
                  />
                  <label for="floatingUserName">會員姓名</label>
                </div>
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
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingRepeatPassword"
                    placeholder="RepeatPassword"
                  />
                  <label for="floatingRepeatPassword">再輸入一次密碼</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="floatingEmail"
                  />
                  <label for="floatingEmail">輸入電子信箱</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingBirthday"
                    placeholder="floatingBirthday"
                  />
                  <label for="floatingBirthday">出生年月日</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingTelephone"
                    placeholder="telephone"
                  />
                  <label for="floatingTelephone">連絡電話</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingNickname"
                    placeholder="nickname"
                  />
                  <label for="floatingNickname">暱稱</label>
                </div>
                <div className="form-check mb-3">
                  <label
                    className="form-check-label"
                    for="agreeServiceContract"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="agreeServiceContract"
                    />
                    同意 <a href="">服務條款</a>
                  </label>
                </div>
                <div className="d-grid mb-3">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold fs-5 "
                    type="submit"
                  >
                    登入
                  </button>
                  <a href="">已經有帳號了嗎?按我登入</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
