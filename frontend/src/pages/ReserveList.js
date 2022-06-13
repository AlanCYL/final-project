import Header from '../components/Header/Header'
import Side from '../components/ShoppingCart/Side'

const ReserveList = () => {
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex">
          <Side />
          <div>
            <div className="w-75 ms-8 ">
              <img
                className="w-100 pb-5"
                src={require('../image/shoppingCart/icongroup04.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div className="list w-100">
              <div class="show active" id="nav-home">
                <table class="table">
                  <thead class="">
                    <tr>
                      <th>
                        全選
                        <input type="checkbox" />
                      </th>
                      <th>開團店家</th>
                      <th>參團時間</th>
                      <th>價格</th>
                      <th>人數</th>
                      <th>小計</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr-hover">
                      <td className="py-5">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                      <td className="py-5">
                        <img
                          className="delete"
                          src={require('../image/shoppingCart/delete.png')}
                          alt=""
                        />
                      </td>
                    </tr>

                    <tr className="tr-hover">
                      <td className="py-5">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                      <td className="py-5">
                        <img
                          className="delete"
                          src={require('../image/shoppingCart/delete.png')}
                          alt=""
                        />
                      </td>
                    </tr>

                    <tr className="tr-hover">
                      <td className="py-5">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img
                          className="logo py-4"
                          src={require('../image/shoppingCart/d.png')}
                          alt=""
                        />
                      </td>
                      <td className="py-5">2022/06/17 中午12:00</td>
                      <td className="py-5">$1280</td>
                      <td className="py-5">1</td>
                      <td className="py-5">NT$1280</td>
                      <td className="py-5">
                        <img
                          className="delete"
                          src={require('../image/shoppingCart/delete.png')}
                          alt=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* button */}
              {/* <div className="d-flex justify-content-between">
          <a type="button" className="bg-info text-white px-4 py-2 ms-6 mt-4">
            想看更多
          </a>
          <a
            type="button"
            className="bg-primary text-white px-4 py-2 me-5 mt-4"
          >
            前往訂位
          </a>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveList
