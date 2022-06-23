import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BsFillCaretDownFill } from 'react-icons/bs'
import Form from 'react-bootstrap/Form'

const ConfirmPay = () => {
  const [credit, setCredit] = useState('')
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-75 ms-8" style={{ marginRight: '80px' }}>
              <img
                style={{ width: '500px' }}
                className="mb-5"
                src={require('../../../image/shoppingCart/icongroup05.png')}
                alt=""
              />
            </div>
            {/* List */}
            <div
              className="bg-secondary cursor-pointer w-75 ms-6 d-flex align-items-baseline justify-content-center"
              style={{ cursor: 'pointer' }}
            >
              <h6 className="pb-1 pt-2" style={{ cursor: 'pointer' }}>
                總計2件商品
              </h6>
              <div className="ms-2">
                <BsFillCaretDownFill style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div className="bg-secondary p-4 ">
              <div className="mb-4 pb-3 border-bottom w-100">
                <th>
                  <input type="checkbox" />
                </th>
                <th>全選</th>
              </div>
              <tr className="d-flex justify-content-between align-items-center border-bottom mb-4 pb-4">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    style={{ width: '90px' }}
                    src={require('../../../image/shoppingCart/dSquare.png')}
                    alt=""
                  />
                </td>
                <td>
                  <h6>鼎泰豐(復興店)</h6>
                  <h6>2022/06/17 中午12:00</h6>
                </td>
                <td>人數 : 1</td>
                <td>NT$1280</td>
              </tr>
              {/* repeat */}
              <tr className="d-flex justify-content-between align-items-center border-bottom mb-4 pb-4">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    style={{ width: '90px' }}
                    src={require('../../../image/shoppingCart/dSquare.png')}
                    alt=""
                  />
                </td>
                <td>
                  <h6>鼎泰豐(復興店)</h6>
                  <h6>2022/06/17 中午12:00</h6>
                </td>
                <td>人數 : 1</td>
                <td>NT$1280</td>
              </tr>
            </div>
            {/* sale */}
            <div className="p-4" style={{ backgroundColor: '#FFE7A9' }}>
              <div className="d-flex justify-content-between align-items-center border-bottom border-dark my-4 pb-4">
                <h6>商品金額：</h6>
                <h6>NT$2280</h6>
              </div>

              <div className="d-flex mb-2">
                <img
                  style={({ width: '20px' }, { height: '20px' })}
                  src={require('../../../image/shoppingCart/sale.png')}
                  alt=""
                />
                <h6 className="ms-1">折價卷</h6>
              </div>

              <div className="mb-3">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>使用折價卷</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <h6>NT$-200</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center border-top border-dark pt-4 mt-2">
                <h6>總計：</h6>
                <h6>NT$2080</h6>
              </div>
            </div>
            {/* information */}
            <div className="bg-secondary mt-5">
              <h5 className="p-3">帳單資訊：</h5>
              <Form>
                <Form.Group className="mb-3 d-flex mx-3" controlId="name">
                  <h6 className="w-25 ms-4">姓名</h6>
                  <Form.Control
                    className="w-75 me-6"
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex mx-3" controlId="phone">
                  <h6 className="w-25 ms-4">聯絡電話</h6>
                  <Form.Control
                    className="w-75 me-6"
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex mx-3" controlId="email">
                  <h6 className="w-25 ms-4">電子郵件</h6>
                  <Form.Control
                    className="w-75 me-6"
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex mx-3" controlId="addr">
                  <h6 className="w-25 ms-4">地址</h6>
                  <Form.Select
                    style={{ marginLeft: '22px' }}
                    aria-label="Default select example"
                    className="w-50"
                  >
                    <option>縣/市</option>
                    <option value="1">台北市</option>
                    <option value="2">新北市</option>
                    <option value="3">桃園市</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-50"
                  >
                    <option>鄉鎮市</option>
                    <option value="1">台北市</option>
                    <option value="2">新北市</option>
                    <option value="3">桃園市</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex me-5 justify-content-center"
                  controlId="address"
                >
                  <Form.Select
                    aria-label="Default select example"
                    className="w-50 mb-4"
                    style={{ marginLeft: '22px' }}
                  >
                    <option>街道地址</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>

            {/* functionPay */}
            <div className="bg-secondary p-4">
              <div>
                <Form.Check
                  label="ATM轉帳/銀行臨櫃匯款"
                  name="group1"
                  type="radio"
                  id={`radio-1`}
                />
                <div className="ms-6 mt-3">
                  <p>
                    將您的款項直接匯入我們的帳號，點選您的訂單編號會有付款說明。
                  </p>
                  <p>匯款完成後請至『匯款回報』填寫表單，才會完成訂單呦！</p>
                </div>
              </div>
              <div className="pt-4">
                <Form.Check
                  label="信用卡支付"
                  name="group1"
                  type="radio"
                  id={`radio-2`}
                />
                {/* credit-card */}
                <div className="d-flex justify-content-end me-5">
                  <div class="credit-card">
                    <div class="card__front card__part">
                      <img
                        class="card__front-square card__square"
                        src={require('../../../image/shoppingCart/card/ic.png')}
                      />
                      <img
                        class="card__front-logo card__logo"
                        src={require('../../../image/shoppingCart/card/master.png')}
                      />
                      <p class="card_numer">1234 5678 7890 6258</p>
                      <div class="card__space-75">
                        <span class="card__label">Card holder</span>
                        <p class="card__info">Unii </p>
                      </div>
                      <div class="card__space-25">
                        <span class="card__label">Expires</span>
                        <p class="card__info">10/25</p>
                      </div>
                    </div>

                    <div class="card__back card__part">
                      <div class="card__black-line"></div>
                      <div class="card__back-content">
                        <div class="card__secret">
                          <p class="card__secret--last">450</p>
                        </div>

                        <img
                          class="card__back-logo card__logo"
                          src={require('../../../image/shoppingCart/card/master.png')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-5">
                <h6>卡片號碼：</h6>
                <div>
                  <input
                    className="credit-number mx-3"
                    type="text"
                    maxLength="4"
                  />
                  -
                  <input
                    className="credit-number mx-2"
                    type="text"
                    maxLength="4"
                  />
                  -
                  <input
                    className="credit-number mx-2"
                    type="text"
                    maxLength="4"
                  />
                  -
                  <input
                    className="credit-number mx-2"
                    type="text"
                    maxLength="4"
                  />
                </div>
              </div>
              <div className="d-flex mt-5">
                <h6>到期日期：</h6>
                <div>
                  <input className="credit-date mx-3" type="text" />月
                  <input className="credit-date mx-3" type="text" />年
                </div>
              </div>
              <div className="d-flex mt-5">
                <h6>安全碼：</h6>
                <div className="m-13">
                  <input className="credit-date mx-4" type="text" />
                  末三碼
                </div>
              </div>
            </div>
            {/* button */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmPay
