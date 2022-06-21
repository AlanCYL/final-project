import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import axios from 'axios'
import { API_URL } from '../../utils/config'

const Register = (props) => {
  const { isLoginPage, setIsLoginPage } = props
  const [validated, setValidated] = useState(false)
  const [member, setMember] = useState({
    name: '',
    identity_card: '',
    password: '',
    nick_name: '',
    phone: '',
    bir: '',
    mail: '',
  })
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }
    try {
      let response = await axios.post(`${API_URL}/member/register`, member)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <div className="d-flex text-center align-items-center">
        <div className="w-75 mx-auto">
          <div className="card border-0 shadow rounded-3 mb-5">
            <div className="card-body py-3 px-4 px-sm-5">
              <h4 className="card-title text-center  my-2">會員註冊</h4>
              {/* form表單內容 */}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationName">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="會員姓名"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="會員姓名"
                        name="name"
                        value={member.name}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationId">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="身分證字號"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="身分證字號"
                        name="identity_card"
                        value={member.identity_card}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationNickname">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="暱稱"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="暱稱"
                        name="nick_name"
                        value={member.nick_name}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationBirthday">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="生日"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="date"
                        placeholder="生日"
                        name="bir"
                        value={member.bir}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationPassword">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="會員密碼"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="password"
                        placeholder="會員密碼"
                        name="password"
                        value={member.password}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationRePassword">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="請再次輸入密碼"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="password"
                        placeholder="請再次輸入密碼"
                      />
                      <Form.Control.Feedback type="invalid">
                        密碼不一致
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-around">
                  <Form.Group as={Col} md="4" controlId="validationTel">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="連絡電話"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="number"
                        placeholder="請輸入連絡電話"
                        name="phone"
                        value={member.phone}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group as={Col} md="8" controlId="validationEmail">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="請輸入電子郵件"
                      className="mb-3"
                    >
                      <Form.Control
                        required
                        type="email"
                        placeholder="請輸入電子郵件"
                        name="mail"
                        value={member.mail}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        電子郵件格式不正確
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="同意相關服務條款"
                    feedback="請閱讀並勾選同意服務條款"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button className="mb-2" type="submit">
                  註冊
                </Button>
              </Form>
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault()
                  setIsLoginPage(true)
                }}
              >
                已經有帳號了嗎?按我登入
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
