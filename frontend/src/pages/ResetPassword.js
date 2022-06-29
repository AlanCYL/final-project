import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const ResetPassword = () => {
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
    <Container className="my-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 text-center justify-content-center">
          <Form.Label>親愛的用戶您好,</Form.Label>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>請重新輸入密碼</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>再確認一次密碼</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Button as={Col} md="auto" type="submit" className="text-nowrap">
            Submit form
          </Button>
        </Row>
      </Form>
    </Container>
  )
}

export default ResetPassword
