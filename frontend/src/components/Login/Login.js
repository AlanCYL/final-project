import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const Login = (props) => {
  const { isLoginPage, setIsLoginPage } = props
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="d-flex text-center align-items-center">
        <div className="w-50 mx-4 text-nowrap">
          <h2 className="text-info">還不是會員嗎?</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsLoginPage(false)
            }}
          >
            快來註冊吧 <i className="fa-solid fa-paper-plane text-info"></i>
          </button>
          {/* <h5 className='mt-3 text-white member_slogon'>與我們一同用美味的餐點，讓大家因「吃」相遇</h5> */}
        </div>
        <div className="w-50 mx-4">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <img src={require('../../image/navbar/logo.png')} alt="" />
              <h3 className="card-title text-center mb-3">登入會員</h3>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">身分證字號(帳號)</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">密碼</label>
                </div>
                <div className="form-check mb-3">
                  <label
                    className="form-check-label me-5"
                    htmlFor="rememberPasswordCheck"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    記住我
                  </label>
                  {/* Modal */}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault()
                      handleShow()
                    }}
                  >
                    忘記密碼?
                  </a>
                </div>
                <div className="d-grid">
                  <Link
                    to="/memberCenter"
                    className="btn btn-primary btn-login text-uppercase fw-bold fs-5"
                  >
                    登入
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdropClassName="bg-white rounded"
        contentClassName="shadow-lg border-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>忘記密碼</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5>
                  請輸入您註冊時所填寫的電子信箱，我們會立即發送密碼重新設定信到您的E-mail信箱。
                </h5>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="text-white"
              variant="primary"
              onClick={handleClose}
            >
              送出
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Login
