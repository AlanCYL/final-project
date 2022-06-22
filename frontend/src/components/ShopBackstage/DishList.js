import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import { BsFillTrashFill } from 'react-icons/bs'

const DishList = (props) => {
  const { shop } = props
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/shopbackstage/dishlist?shopID=1`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result[0])
        setData(res.result)
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }, [])
  // async function Delete(i, id) {
  //   console.log(data[i].id)
  //   let response = await axios.get(
  //     `${API_URL}/shopbackstage/dishlist?dishID=${data[i].id}`
  //   )
  //   console.log(response.data)
  // }
  return (
    <>
      <div className="d-flex flex-wrap">
        {/* map */}
        {data.map((item, i) => (
          <Card style={{ width: '14rem' }} className="mx-2 my-4 ">
            <Card.Img
              variant="top"
              src={require('../../image/shopBackstage/dish/bow.png')}
            />

            <Card.Body>
              <div className="d-flex align-items-baseline justify-content-between">
                <Card.Title>{data[i].name}</Card.Title>
                <p>價格：${data[i].price}</p>
              </div>

              <Card.Text style={{ height: '32px' }}>
                {data[i].description}
              </Card.Text>
              <BsFillTrashFill
                className="icon-hover icon-ms"
                // onClick={Delete}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default DishList
