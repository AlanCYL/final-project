// import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import axios from 'axios'
import { API_URL } from '../../utils/config'

const OpenDish = (props) => {
  // const goPath = useHistory()
  const [upDish, setUpDish] = useState({
    dishName: '',
    dishPrice: '',
    dishDes: '',
    photo: '',
  })

  function handlePhoto(e) {
    setUpDish({ ...upDish, photo: e.target.files[0] })
  }

  async function dishSubmit(e) {
    e.preventDefault()
    try {
      // const params = upDish
      // let response = await axios.post(
      //   `${API_URL}/shopbackstage/opendish`,
      //   upDish
      // )
      // console.log(response.data)
      let formData = new FormData()
      formData.append('name', upDish.dishName)
      formData.append('price', upDish.dishPrice)
      formData.append('description', upDish.dishDes)
      formData.append('photo', upDish.photo)
      let response = axios.post(`${API_URL}/shopbackstage/opendish`, formData)
      console.log(response.data)
      setUpDish({
        dishName: '',
        dishPrice: '',
        dishDes: '',
        photo: '',
      })
      props.groupProps('fifth')
    } catch (e) {
      console.error(e)
    }
  }
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
          <Form.Control
            type="text"
            placeholder="請輸入菜色名稱"
            value={upDish.dishName}
            onChange={(e) => setUpDish({ ...upDish, dishName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>菜色價格</Form.Label>
          <Form.Control
            type="text"
            placeholder="請輸入菜色價格"
            value={upDish.dishPrice}
            onChange={(e) =>
              setUpDish({ ...upDish, dishPrice: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>菜色描述</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              value={upDish.dishDes}
              onChange={(e) =>
                setUpDish({ ...upDish, dishDes: e.target.value })
              }
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>上傳照片</Form.Label>
          <Form.Control
            type="file"
            id="photo"
            name="photo"
            multiple
            onChange={handlePhoto}
            //
          />
        </Form.Group>

        <div className="d-flex justify-content-end ">
          <Button
            type="submit"
            variant="primary"
            className="w-25 mt-4"
            style={{ height: '40px' }}
            onClick={dishSubmit}
          >
            <h5>送出</h5>
          </Button>
        </div>
      </Form>
    </>
  )
}

export default OpenDish
