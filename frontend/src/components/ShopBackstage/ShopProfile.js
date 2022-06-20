import React from 'react'
import { Container, Row, Button, Form, Col } from 'react-bootstrap'

function ShopProfile() {
  return (
    <>
      <Container>
        <Row className="justicy-content-center ms-4 ">
          <h3 className="mb-5">店家基本資料修改</h3>
          <Form>
            <Row>
              <Col className="mt-4 ms-auto col-4 ">
                <div className="img-box ms-auto mt-3">
                  <img
                    src={require('../../image/shopList/DinTaiFung-1.jpg')}
                    alt=""
                  />
                </div>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>負責人姓名</Form.Label>
                  <Form.Control type="text" value={'xxx'} disabled />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>店家名稱</Form.Label>
                  <Form.Control type="text" value={'鼎泰豐'} disabled />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>店家類別</Form.Label>
                  <Form.Control type="text" value={'中式'} disabled />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>店家電話</Form.Label>
              <Form.Control type="tel" value={'02-8772-0528'} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>店家電子信箱</Form.Label>
              <Form.Control
                type="text"
                value={'dintaifung@test.com'}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" value={1234566} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>再次確認密碼</Form.Label>
              <Form.Control type="password" value={1234566} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>店家說明</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={
                  '鼎泰豐是臺灣一家以麵食產銷為主的連鎖餐廳，以小籠包聞名。1958年開設於臺北市信義路，最初爲流行而於1970年代起兼賣小籠包，從此發跡。'
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>店家地址</Form.Label>
              <Form.Control type="text" value={'台北市忠孝東路三段300號B2'} />
            </Form.Group>

            <Button variant="primary" type="submit">
              送出
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default ShopProfile
