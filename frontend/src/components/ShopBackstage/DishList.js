import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../../utils/config'
import { BsFillTrashFill } from 'react-icons/bs'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import Swal from 'sweetalert2'

const DishList = (props) => {
  const [data, setData] = useState([])
  const { cart, setCart } = useShoppingCartContext()
  useEffect(() => {
    getDishList()
  }, [cart])
  //刪除菜色
  async function Delete(item) {
    const dishID = item.id
    await axios.get(`${API_URL}/shopbackstage/dishdelete?dishID=${dishID}`)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-info me-5',
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: '確定刪除此菜色嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '刪除成功!',
            '您已成功刪除此菜色。',
            'success'
          )
          getDishList()
        }
      })
  }
  function getDishList() {
    const shopID = localStorage.getItem('shopID')
    fetch(`${API_URL}/shopbackstage/dishlist?shopID=${shopID}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.result[0])
        setData(res.result)
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }

  return (
    <>
      <div className="d-flex flex-wrap">
        {/* map */}
        {data.map((item, i) => (
          <Card style={{ width: '14rem' }} className="mx-2 my-4 ">
            <Card.Img variant="top" src={`${IMAGE_URL}${data[i].photo}`} />

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
                onClick={() => {
                  Delete(item)
                }}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default DishList
