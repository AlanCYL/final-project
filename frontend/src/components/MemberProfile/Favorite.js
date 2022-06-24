import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { FaHeart } from 'react-icons/fa'
import { useEffect } from 'react'

const Favorite = () => {
  useEffect(()=>{
    
  })

  return (
    <>
      <Container className="mb-3">
        <Row xs={1} md={2} lg={3} className="g-5">
          {/* 店家卡片 */}
          {[1, 1, 1].map((v, i) => {
            return (
              <Col className="d-flex justify-content-center">
                <div className="text-center">
                  <div className="position-relative">
                    <div className="rounded-circle bg-white text-danger h5 position-absolute top-0 start-100 translate-middle heart">
                      <FaHeart className="heart_pic" />
                    </div>

                    <img
                      className="w-100"
                      src={require('../../image/shopList/Kangyaolife-1.jpg')}
                      alt=""
                    />
                  </div>
                  <div className="shopLink">
                    <Link to="/shopListDetail" className="d-block">
                      <h5 className="my-2">陶板屋</h5>
                      <Badge bg="primary d-inline">中式</Badge>{' '}
                      <Badge bg="primary d-inline">自助餐</Badge>{' '}
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
