import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const OpenDish = () => {
  const goPath = useHistory()
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>上架菜色店家：</Form.Label>
          <div
            class="border border-dark"
            style={{ height: '40px', paddingLeft: '10px', paddingTop: '5px' }}
          >
            鼎泰豐
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>菜色名稱</Form.Label>
          <Form.Control type="text" placeholder="請輸入菜色名稱" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>菜色價格</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>菜色描述</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="d-flex justify-content-end ">
          <Button
            variant="primary"
            className="w-25 mt-4"
            style={{ height: '40px' }}
            onClick={() => goPath.push('/ShoppingCart')}
          >
            <h5>送出</h5>
          </Button>
        </div>
      </Form>
    </>
  )
}

export default OpenDish
