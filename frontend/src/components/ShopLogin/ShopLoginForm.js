import React from 'react'
function ShopLoginForm() {
  return (
    <>
      <h2 className="text-center mb-5">店家登入</h2>
      <form>
        {/* Email帳號 */}
        <div className="mb-4">
          <label className="form-label" for="">
            <h5>帳號</h5>
          </label>
          <input type="email" className="form-control form-control-lg" />
        </div>

        {/* 密碼 */}
        <div className="mb-4">
          <label className="form-label" for="">
            <h5>密碼</h5>
          </label>
          <input type="password" className="form-control form-control-lg" />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <a href="/">忘記密碼</a>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label" for="">
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
    </>
  )
}

export default ShopLoginForm
