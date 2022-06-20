import React from 'react'
import { useState } from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'
import registerbanner from '../../image/shop/registerbanner.png'
import axios from 'axios'
import { API_URL } from '../../utils/config'


function Register(props) {
  const { isShopLogin, setIsShopLogin } = props
  const [shopMember, setshopMember] = useState({
    account: '',
    password: '',
  })
  //錯誤用
  const [shopErrors, setShopErrors] = useState({
    account: '',
    password: '',
  })
  function handleChange(e) {
    const newshopMember = {
      ...shopMember,
      [e.target.name]: e.target.value,
    }
    setshopMember(newshopMember)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(shopMember.name, shopMember.account)
    try {
      let response = await axios.post(`${API_URL}/shop/register`, shopMember)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  const handleInvalid = (e) => {
    //擋住泡泡訊息出現
    e.preventDefault()
    console.log(e.target.validationMessage) //錯誤訊息會在這裡
    const newShopError = {
      ...shopErrors,
      [e.target.name]: e.target.validationMessage,
    }
    setShopErrors(newShopError)
  }
  const handleFormChange = (e) => {
    const newShopError = { ...shopErrors, [e.target.name]: '' }
  }
  return (
    <>
      <div className="container-fulid banner">
        <img className='img-fluid"' src={registerbanner} alt="" />
      </div>
      <h3 className="mt-5 text-center">
        歡迎您!<span>Unii</span>期待眾多優秀的餐廳加入
      </h3>
      <Container className="mt-5 mb-5">
        <Form
          onSubmit={handleSubmit}
          onInvalid={handleInvalid}
          onChange={handleFormChange}
        >
          <Row>
            <Col className="me-auto" md={6}>
              {/* <Form.Group className="mb-3">
                <Form.Label>
                  負責人姓名<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name=""
                  className="mb-4"
                  placeholder="請填寫店家負責人姓名"
                  onChange={handleChange}
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label>
                  店家名稱<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  className="mb-4"
                  placeholder="這會成為您的前台顯示的名稱"
                  defaultValue={shopMember.name}
                  onChange={handleChange}
                  required
                />
                {shopErrors.account && shopErrors.account}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  店家電話<span>*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  className="mb-4"
                  placeholder="請填寫店家電話"
                  defaultValue={shopMember.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  店家電子信箱<span>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="account"
                  className="mb-4"
                  placeholder="信箱為登入帳號，並會寄送申請結果至此Email，請確認正確填寫。"
                  defaultValue={shopMember.account}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  密碼<span>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  className="mb-4"
                  placeholder="請填寫6位以上英文或數字"
                  defaultValue={shopMember.password}
                  onChange={handleChange}
                  minLength={6}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  確認密碼<span>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="請再次填寫確認密碼"
                  className="mb-4"
                  defaultValue={shopMember.confirmPassword}
                  onChange={handleChange}
                  minLength={6}
                  required
                />
              </Form.Group>
            </Col>
            <Col className="ms-auto" md={5}>
              <Form.Label>
                店家說明<span>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="請填寫100字內店家介紹"
                style={{ height: '133px' }}
                className="mb-4"
                defaultValue={shopMember.description}
                onChange={handleChange}
                maxLength={100}
                required
              />
              <Form.Group className="mb-3">
                <Form.Label>
                  店家類別<span>*</span>
                </Form.Label>
                <div className="px-5 py-3">
                  {['checkbox'].map((type) => (
                    <div key={`${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="中式"
                        name="type_id"
                        vaiue="1"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="台式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="港式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="日式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="韓式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="泰式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="美式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="法式"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="燒烤"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="火鍋"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="甜點"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="吃到飽"
                        name="type_id"
                        type={type}
                      />
                      <Form.Check
                        inline
                        label="咖啡廳"
                        name="type_id"
                        type={type}
                      />
                    </div>
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  店家封面縮圖<span>*</span>
                </Form.Label>
                <Form.Control
                  type="file"
                  name="img"
                  placeholder="請再次填寫確認密碼"
                  className="mb-4"
                  defaultValue={shopMember.img}
                />
              </Form.Group>
            </Col>
            <div className="d-flex justify-content-end mt-5">
              <div>
                <input type="checkbox" className="me-2" />
                <label>同意新會員註冊條款</label>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary ms-4"
                >
                  註冊
                </Button>
              </div>
            </div>
          </Row>
        </Form>
      </Container>

      <div className="container mt-5 mb-5">
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
    </>
  )
}
export default Register
