import registerbanner from '../../image/shop/registerbanner.png'

function Register(props) {
  const { isShopLogin, setIsShopLogin } = props
  const cate = [
    '中式',
    '台式',
    '港式',
    '日式',
    '韓式',
    '泰式',
    '美式',
    '法式',
    '燒烤',
    '火鍋',
    '甜點',
    '吃到飽',
    '咖啡廳',
  ]
  return (
    <>
      <div className="container-fulid banner">
        <img className='img-fluid"' src={registerbanner} alt="" />
      </div>
      <h3 className="mt-5 text-center">
        歡迎您!<span>Unii</span>期待眾多優秀的餐廳加入
      </h3>
      <div className="container mt-5 mb-5">
        <form>
          <div className="row justify-content-around">
            <div className="col-md-5">
              {/* 姓名 */}
              <label htmlFor="" className="form-label mb-1">
                負責人姓名 <span>*</span>
              </label>
              <input
                type="text"
                placeholder="請填寫店家負責人姓名"
                className="form-control mb-4"
              />

              {/* 店家名稱 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家名稱 <span>*</span>
              </label>
              <input
                type="text"
                placeholder="這會成為您的前台顯示的名稱"
                className="form-control mb-4"
              />

              {/* 店家電話 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家電話 <span>*</span>
              </label>
              <input
                type="tel"
                placeholder="請填寫店家電話"
                className="form-control mb-4"
              />

              {/* 店家email */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家電子信箱 <span>*</span>
              </label>

              <input
                type="email"
                placeholder="信箱為登入帳號，並會寄送申請結果至此Email，請確認正確填寫。"
                className="form-control mb-4"
              />
              {/* 密碼 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                密碼 <span>*</span>
              </label>

              <input
                type="password"
                placeholder="請填寫8位以上至少一個英文或數字"
                className="form-control mb-4"
              />
              {/* 確認密碼 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                確認密碼 <span>*</span>
              </label>

              <input
                type="password"
                placeholder="請再次填寫確認密碼"
                className="form-control mb-4"
              />
            </div>
            <div className="col-md-5">
              {/* 店家說明 */}
              <label htmlFor="" className="form-label mb-1">
                店家說明 <span>*</span>
              </label>
              <textarea
                type="text"
                placeholder="請填寫100字內店家介紹"
                className="form-control mb-4"
              />
              {/* 餐廳類別 checked */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家類別 <span>*</span>
              </label>
              <div className="px-5 py-4">
                {cate.map((v, i) => {
                  return (
                    <div key={i} className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                      <label className="form-check-label" htmlFor="">
                        {v}
                      </label>
                    </div>
                  )
                })}
              </div>
              {/* 上傳圖片 */}
              <label htmlFor="" className="form-label mb-1 mt-5">
                店家縮圖 <span>*</span>
                <span className="photoinfo">(請上傳店家logo圖)</span>
              </label>
              <input type="file" className="form-control mb-4" />
              {/* 上傳圖片 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家首頁圖 <span>*</span>
                <span className="photoinfo">(請上傳店家首頁banner)</span>
              </label>
              <input type="file" className="form-control mb-4" />
            </div>
            <div className="col-md-11">
              {/* 店家地址 */}
              <label htmlFor="" className="form-label mb-1 mt-4">
                店家地址 <span>*</span>
              </label>
              <input
                type="text"
                placeholder="請輸入店家所在地"
                className="form-control mb-4"
              />
              <div className="d-flex justify-content-end mt-5">
                <div>
                  <input type="checkbox" className="me-2" />
                  <label>同意新會員註冊條款</label>
                  <button type="button" className="btn btn-primary ms-4">
                    註冊
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row mt-5">
              <hr className="col-md-5 line me-auto" />
              <h5 className="me-4">或</h5>
              <hr className="col-md-5 line ms-auto" />
            </div>

            <h5 className="text-center mt-5">
              有註冊過的店家由此
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault()
                  setIsShopLogin(true)
                }}
              >
                立即登入
              </a>
            </h5>
          </div>
        </form>
      </div>
    </>
  )
}
export default Register
