import React, { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import { BsFillCameraFill } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UpdateProfile = () => {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  return (
    <>
      <div ref={ref}>
        <Overlay
          show={show}
          target={target}
          placement="bottom-end"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <Container className="change_pic g-2">
                <Row className="g-2 mb-2">
                  <Col>
                    <img
                      src={require('../../image/memberProfile/1.png')}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      src={require('../../image/memberProfile/2.png')}
                      alt=""
                    />
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col>
                    <img
                      src={require('../../image/memberProfile/3.png')}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      src={require('../../image/memberProfile/4.png')}
                      alt=""
                    />
                  </Col>
                </Row>
              </Container>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-3 text-center">
            <div
              className="rounded-circle overflow-hidden border border-3 rounded-2 avatar mx-auto mb-3 position-relative avatar_pic_div_bg"
              onClick={handleClick}
            >
              <div className="avatar_pic_div position-absolute top-50 start-50 translate-middle">
                <BsFillCameraFill />
              </div>
              <img
                alt="10x10"
                src={require('../../image/memberProfile/1.png')}
                className="position-absolute top-50 start-50 translate-middle "
              />
            </div>
            <div className="mb-4 text-nowrap">
              <p>LV.4 鑽石會員</p>
            </div>
          </div>
          <div className="col-auto col-md-7">
            <form>
              {/* 姓名 */}
              <label htmlFor="" className="form-label mb-1">
                會員姓名
              </label>

              <input
                type="text"
                value="王大明"
                className="form-control mb-3"
                disabled
              />

              {/* 身分證字號 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                身分證字號
              </label>
              <input
                type="text"
                value="A123456789"
                className="form-control mb-3"
                disabled
              />

              {/* 暱稱 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                暱稱
              </label>
              <input
                type="tel"
                placeholder="小明"
                className="form-control mb-3"
              />

              {/* 連絡電話 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                連絡電話
              </label>

              <input
                type="tel"
                placeholder="0912345678"
                className="form-control mb-2"
              />
              {/* 出生年月日 */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                出生日期
              </label>

              <input
                type="date"
                value="2020-01-01"
                className="form-control mb-3"
                disabled
              />
              {/* email */}
              <label htmlFor="" className="form-label mb-1 mt-2">
                電子郵件
              </label>

              <input
                type="password"
                placeholder="test@unii.com"
                className="form-control mb-3"
              />

              {/* button group */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3 ">
                <button className="btn btn-danger me-md-2 h5" type="button">
                  取消
                </button>
                <button className="btn btn-primary h5" type="button">
                  確認
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
