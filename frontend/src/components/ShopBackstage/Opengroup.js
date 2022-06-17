import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Opengroup = () => {
  const goPath = useHistory()
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>店家名稱</Form.Label>
          <div
            class="border border-dark"
            style={{ height: '40px', paddingLeft: '10px', paddingTop: '5px' }}
          >
            鼎泰豐
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>開團開始時間</Form.Label>
          <Form.Control type="date" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>截止時間</Form.Label>
          <Form.Control type="date" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>用餐時間</Form.Label>
          <div className="d-flex">
            <Form.Control type="date" placeholder="Password" />
            <Form.Control type="time" placeholder="Password" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>成團人數</Form.Label>
          <Form.Control type="number" placeholder="請輸入最少成團人數" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>價格</Form.Label>
          <Form.Control type="text" placeholder="請輸入價格" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>選擇菜色：</Form.Label>
          {/* map動態產生 */}
          <InputGroup className="mb-3 bg-secondary">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <h6 className="mt-2 ms-3">小籠包</h6>
          </InputGroup>
          <InputGroup className="mb-3 bg-secondary">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <h6 className="mt-2 ms-3">小籠包</h6>
          </InputGroup>
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

export default Opengroup
