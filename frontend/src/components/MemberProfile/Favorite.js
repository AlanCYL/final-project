import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { FaHeart } from 'react-icons/fa'
import { useEffect } from 'react'
import { useLogin } from '../../context/LoginStatus'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../../utils/config'
import { useFavorite } from '../../context/FavoriteList'

const Favorite = () => {
  const { member } = useLogin()
  const [myFavorite, setMyFavorite] = useState([])
  const { setCountFavorite } = useFavorite()
  const [cancel, setCancel] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        let response = await axios.get(`${API_URL}/favorite/list`, {
          params: {
            userId: member.id,
          },
        })
        setMyFavorite(response.data.favorite)
        setCountFavorite(response.data.count)
      } catch (e) {
        console.log(e.response.data.error)
      }
    })()
  }, [member.id, cancel])

  const deleteFavorite = async (id) => {
    try {
      let response = await axios.get(`${API_URL}/favorite/delete`, {
        params: {
          shopId: id,
          userId: member.id,
        },
      })
      setCancel(!cancel)
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  return (
    <>
      <Container className="mb-3">
        <Row xs={1} md={2} lg={3} className="g-5">
          {/* 店家卡片 */}
          {myFavorite.map((v, i) => {
            return (
              <Col className="d-flex justify-content-center" key={v.id}>
                <div className="text-center">
                  <div className="position-relative">
                    <div className="rounded-circle bg-white text-danger h5 position-absolute top-0 start-100 translate-middle heart">
                      <FaHeart
                        className="heart_pic"
                        onMouseUp={() => {
                          deleteFavorite(v.shop_id)
                        }}
                      />
                    </div>

                    <img
                      className="w-100 shadow-sm"
                      src={IMAGE_URL + `/shopImg/${v.shopImg}`}
                      alt={v.shopImg}
                    />
                  </div>
                  <div className="shopLink">
                    <Link to="/shopListDetail" className="d-block">
                      <h5 className="my-2">{v.shopName}</h5>
                      {v.typeName.split(',').map((v, i) => {
                        return (
                          <Badge className="mx-1" bg="primary d-inline" key={i}>
                            {v}
                          </Badge>
                        )
                      })}
                    </Link>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Favorite
