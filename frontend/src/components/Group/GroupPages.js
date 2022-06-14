import fliterpic from '../../image/groups/fliterpic.png'

function GroupPages() {
  return (
    <>
      <div className="container-fluid bg-secondary group-fliter align-items-center">
        <div className="row ">
          <div className="col-6 pic ps-8 ms-4 d-none d-md-block ">
            <img className="img-fluid mt-6 ms-4" src={fliterpic} alt="" />
          </div>
          <div className="col-6 mt-5 ms-7">
            <div className="bg-primary filter-input">
              <div className="bg-white bg">
                {/* 餐廳類別 checked */}
                <div className="px-5 py-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="">
                      中式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="">
                      台式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      港式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      日式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      韓式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      泰式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      美式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      法式
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      燒烤
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      火鍋
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      甜點
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      吃到飽
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="">
                      咖啡廳
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default GroupPages
