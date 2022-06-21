import React from 'react'
import { useState } from 'react'
import { Container, Row, Button, Form, Col, InputGroup } from 'react-bootstrap'
import shoploginvideo from '../../image/shop/shoploginvideo.mp4'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function Login(props) {
  const { isShopLogin, setIsShopLogin } = props
  const [shopMember, setshopMember] = useState({
    account: '',
    password: '',
  })
  const [validated, setValidated] = useState(false)

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  function handleChange(e) {
    const newshopMember = {
      ...shopMember,
      [e.target.name]: e.target.value,
    }
    setshopMember(newshopMember)
  }

  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log(shopMember.name, shopMember.account)
  //   try {
  //     let response = await axios.post(`${API_URL}/shop/register`, shopMember)
  //     console.log(response.data)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  return (
    <>
      <div className="container-fluid d-flex">
        <div className=" col-md-12 col-lg-7  d-flex justify-content-start align-items-center">
          <div className="text-center position-absolute content">
            <h2 className="mb-4">加入Unii店家</h2>
            <button
              className="btn btn-primary mb-3"
              onClick={() => {
                setIsShopLogin(false)
              }}
            >
              快速註冊
            </button>
            <h5>與我們一同用美味的餐點，讓大家因「吃」相遇</h5>
          </div>
          <video className="img-fluid" autoPlay muted loop>
            <source src={shoploginvideo} type="video/mp4" />
          </video>
          {/* <div className="video-viewpoint position-relative"></div> */}
        </div>
        <Col lg></Col>
        <div className="col-md-12 col-lg-5">
          <div className="form-size mt-7 ms-6">
            <h2 className="text-center mb-5">店家登入</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>帳號</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="請填寫帳號"
                  name="account"
                  defaultValue={shopMember.account}
                  onChange={(e) =>
                    setshopMember({
                      ...shopMember,
                      account: e.target.value,
                    })
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫此欄位
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="請填寫密碼"
                  name="password"
                  defaultValue={shopMember.password}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  請填寫此欄位
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex justify-content-between mb-3">
                <a href="/">忘記密碼</a>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">記住我</label>
                </div>
              </div>
              <div className="d-grid gap-2 mx-auto">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-danger"
                >
                  登入
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
