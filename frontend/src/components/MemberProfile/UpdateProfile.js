import React from 'react'

const UpdateProfile = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-3 text-center">
            <div className="rounded-circle overflow-hidden border border-3 rounded-2 avatar mx-auto mb-3">
              <img
                alt="10x10"
                src={require('../../image/memberProfile/female_pic2.png')}
                className="position-absolute top-50 start-50 translate-middle"
              />
            </div>
            <div className="mb-4 text-nowrap">
              <p>LV.4 鑽石會員</p>
            </div>
          </div>
          <div className="col-7">
            <form>
              {/* 姓名 */}
              <label htmlFor="" className="form-label mb-1">
                會員姓名
              </label>

              <input
                type="text"
                value="王大明"
                className="form-control mb-3"
                disabled
              />

              {/* 身分證字號 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                身分證字號
              </label>
              <input
                type="text"
                value="A123456789"
                className="form-control mb-3"
                disabled
              />

              {/* 暱稱 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                暱稱
              </label>
              <input
                type="tel"
                placeholder="小明"
                className="form-control mb-3"
              />

              {/* 連絡電話 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                連絡電話
              </label>

              <input
                type="tel"
                placeholder="0912345678"
                className="form-control mb-2"
              />
              {/*  */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                
              </label>

              <input
                type="password"
                placeholder="請填寫8位以上至少一個英文或數字"
                className="form-control mb-3"
              />
              {/* 確認密碼 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                確認密碼 <span>*</span>
              </label>

              <input
                type="password"
                placeholder="請再次填寫確認密碼"
                className="form-control mb-3"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
