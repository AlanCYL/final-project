import React from 'react'
import { useState } from 'react'
import { Container, Row, Button, Form, Col, InputGroup } from 'react-bootstrap'
import registerbanner from '../../image/shop/registerbanner.png'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import { AiFillEye } from 'react-icons/ai'

function Register(props) {
  const { isShopLogin, setIsShopLogin } = props
  const [shopMember, setshopMember] = useState({
    name: '',
    phone: '',
    account: '',
    password: '',
    description: '',
    type_id: [],
    img: '',
    address: '',
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

  //餐廳用checked
  function handleCheck(e) {
    if (shopMember.type_id.includes(e.target.value)) {
      setshopMember({
        ...shopMember,
        type_id: shopMember.type_id.filter((v, i) => {
          return v !== e.target.value
        }),
      })
    } else {
      setshopMember({
        ...shopMember,
        type_id: [...shopMember.type_id, e.target.value],
      })
    }
  }
  //餐廳類別
  const type = [
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

  //圖片用
  function handlePhoto(e) {
    setshopMember({ ...shopMember, img: e.target.files[0] })
  }
  //看密碼
  const [passwordShown, setPasswordShown] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(`店家名稱:${shopMember.name}`, `店家類別:${shopMember.type_id}`)
    try {
      let formData = new FormData()
      formData.append('name', shopMember.name)
      formData.append('phone', shopMember.phone)
      formData.append('account', shopMember.account)
      formData.append('password', shopMember.password)
      formData.append('description', shopMember.description)
      formData.append('address', shopMember.address)
      for (var i = 0; i < shopMember.type_id.length; i++) {
        formData.append('type_id', shopMember.type_id[i])
      }
      formData.append('img', shopMember.img)
      let response = axios.post(`${API_URL}/shop/register`, formData)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  // const handleInvalid = (e) => {
  //   //擋住泡泡訊息出現
  //   e.preventDefault()
  //   console.log(e.target.validationMessage) //錯誤訊息會在這裡
  //   const newShopError = {
  //     ...shopErrors,
  //     [e.target.name]: e.target.validationMessage,
  //   }
  //   setShopErrors(newShopError)
  // }
  // const handleFormChange = (e) => {
  //   const newShopError = { ...shopErrors, [e.target.name]: '' }
  // }
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
          // onInvalid={handleInvalid}
          // onChange={handleFormChange}
        >
          <Row>
            <Col className="me-auto" md={6}>
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
                {shopErrors.account && shopErrors.account}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  密碼<span>*</span>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    className=""
                    placeholder="請填寫6位以上英文或數字"
                    defaultValue={shopMember.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    <label className="eye-input ms-auto">
                      <input
                        type="radio"
                        name=""
                        onClick={() => {
                          setPasswordShown(!passwordShown)
                        }}
                      />
                      <AiFillEye
                        className="eye"
                        color={!passwordShown ? '#A7A5A5' : '#FFB901'}
                      />
                    </label>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  店家地址<span>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="請填寫店家地址"
                  className="mb-4"
                  defaultValue={shopMember.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col className="ms-auto" md={5}>
              <Form.Label>店家說明</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="請填寫100字內店家介紹"
                style={{ height: '133px' }}
                className="mb-4"
                defaultValue={shopMember.description}
                name="description"
                onChange={handleChange}
                maxLength={100}
              />
              <Form.Group className="mb-3">
                <Form.Label>
                  店家類別<span>*</span>
                </Form.Label>
                <div className="px-5 py-3">
                  {type.map((v, i) => {
                    return (
                      <div key={i} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={i}
                          name="type_id[]"
                          onChange={handleCheck}
                        />
                        <label className="form-check-label" htmlFor="">
                          {v}
                        </label>
                      </div>
                    )
                  })}
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
                  onChange={handlePhoto}
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

      <div className="container mt-2 mb-5">
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
