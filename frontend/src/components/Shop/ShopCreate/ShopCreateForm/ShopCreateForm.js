function ShopCreateForm() {
  return (
    <>
      <form>
        <div className="row justify-content-around">
          <div className="col-md-6">
            {/* 姓名 */}
            <label htmlFor="" className="form-label mb-1">
              申請人姓名 <span>*</span>
            </label>
            <input type="text" className="form-control mb-4" />

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
            <input type="tel" className="form-control mb-4" />

            {/* 店家email */}
            <label htmlFor="" className="form-label mb-1 mt-4">
              聯絡信箱 <span>*</span>
            </label>

            <input
              type="email"
              placeholder="申請結果會寄送至此Email，請確認正確填寫。"
              className="form-control mb-4"
            />
          </div>
          <div className="col-md-6">
            {/* 密碼 */}
            <label htmlFor="" className="form-label mb-1">
              密碼 <span>*</span>
            </label>
            <input type="password" className="form-control mb-4" />

            {/* 確認密碼 */}
            <label htmlFor="" className="form-label mb-1 mt-4">
              確認密碼 <span>*</span>
            </label>
            <input
              type="password"
              placeholder="申請結果會寄送至此Email，請確認正確填寫。"
              className="form-control mb-4"
            />
          </div>
        </div>
      </form>
    </>
  )
}
export default ShopCreateForm
