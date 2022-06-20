import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Register = (props) => {
  const { isLoginPage, setIsLoginPage } = props
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
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
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationNickname">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="暱稱"
                      className="mb-3"
                    >
                      <Form.Control required type="text" placeholder="暱稱" />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationBirthday">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="生日"
                      className="mb-3"
                    >
                      <Form.Control required type="date" placeholder="生日" />
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
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationRePassword">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="請再次輸入密碼"
                      className="mb-3"
                      hasValidation
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
                      <Form.Control required type="number" placeholder="生日" />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group as={Col} md="8" controlId="validationEmail">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="請輸入電子郵件"
                      className="mb-3"
                      hasValidation
                    >
                      <Form.Control
                        required
                        type="email"
                        placeholder="請輸入電子郵件"
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
              {/* form表單內容 */}
              {/* <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUserName"
                    placeholder="userName"
                  />
                  <label for="floatingUserName">會員姓名</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">身分證字號(帳號)</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">密碼</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingRepeatPassword"
                    placeholder="RepeatPassword"
                  />
                  <label for="floatingRepeatPassword">再輸入一次密碼</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="floatingEmail"
                  />
                  <label for="floatingEmail">輸入電子信箱</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingBirthday"
                    placeholder="floatingBirthday"
                  />
                  <label for="floatingBirthday">出生日期</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingTelephone"
                    placeholder="telephone"
                  />
                  <label for="floatingTelephone">連絡電話</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingNickname"
                    placeholder="nickname"
                  />
                  <label for="floatingNickname">暱稱</label>
                </div>
                <div className="form-check mb-3">
                  <label
                    className="form-check-label"
                    for="agreeServiceContract"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="agreeServiceContract"
                    />
                    同意 <a href="">服務條款</a>
                  </label>
                </div>
                <div className="d-grid mb-3">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold fs-5 "
                    type="submit"
                  >
                    註冊
                  </button>
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
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
