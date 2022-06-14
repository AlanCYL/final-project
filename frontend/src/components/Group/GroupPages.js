import fliterpic from '../../image/groups/fliterpic.png'
import Card from '../Card/Card'

function GroupPages() {
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
      {/* 篩選 */}
      <div className="container-fluid bg-secondary group-fliter">
        <div className="row">
          <div className="col-6 d-none d-md-block ">
            <div className=" pic ps-3 ms-3 ">
              <img className="img-fluid mt-5 ms-2" src={fliterpic} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="ms-2 mt-6 ">
              <div className="bg-primary filter-input">
                <form>
                  <div className="d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bg-white bg mt-4 px-2">
                      <div className="px-1 py-3">
                        {cate.map((v, i) => {
                          return (
                            <div
                              key={i}
                              className="form-check form-check-inline"
                            >
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
                    </div>
                    <div className="bg-white bg mt-4">
                      <div className="px-5 py-3 d-flex ">
                        <div className="input-control">
                          <label>開團時間</label>
                          <input type="date" class="form-control" />
                        </div>
                        <div className="input-control ms-6 ">
                          <label>用餐時間</label>
                          <select className="form-control">
                            <option selected value="">
                              午餐
                            </option>
                            <option value="">下午茶</option>
                            <option selected value="">
                              晚餐
                            </option>
                          </select>
                        </div>
                        <div className="input-control ms-6 ">
                          <label>開團狀況</label>
                          <select className="form-control">
                            <option selected value="">
                              確定開團
                            </option>
                            <option value="">開團中</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="search">
                      <button type="button" className="btn btn-info mt-4 w-100">
                        搜尋
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 商品頁 */}
      <div className="mt-9 ">
        <div className="container d-flex mt-6">
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
        </div>
        <div className="container d-flex mt-6">
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
          <div className="ms-5">
            <Card />
          </div>
        </div>
      </div>
      {/* 頁數 */}
      <div className="mt-6 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#/">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default GroupPages
