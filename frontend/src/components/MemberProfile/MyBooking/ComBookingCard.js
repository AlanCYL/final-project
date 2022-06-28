import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useLogin } from '../../../context/LoginStatus'
import { API_URL, IMAGE_URL } from '../../../utils/config'
import { useEffect, useState } from 'react'
import axios from 'axios'
import dateCountdown from 'date-countdown'

const ComBookingCard = () => {
  const { member } = useLogin()
  const [booking, setBooking] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        let response = await axios.get(`${API_URL}/booking/okBooking`, {
          params: {
            userId: member.id,
          },
        })
        setBooking(response.data.booking)
      } catch (e) {
        console.log(e.response.data.error)
      }
    })()
  }, [member.id, booking])
  return (
    <>
      <Container className="my-3">
        <Row className="justify-content-between gy-5" xs="auto">
          {booking.map((v, i) => {
            return (
              <Col key={v.id}>
                <div className="little-card shadow-sm bg-white rounded main-hover">
                  <img
                    className="w-100 h-50 rounded-top border-bottom  "
                    src={IMAGE_URL + `/shopImg/${v.img}`}
                    alt={v.shopImg}
                  />
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>{v.name}</h5>
                    </div>
                    <h6 className="fw-normal">目前人數:{v.now_num}人</h6>
                    <h6 className="fw-normal mb-4">用餐時間:{v.eating_date}</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${(v.now_num / v.goal_num) * 100}%` }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="progress-text mt-1">
                        剩下
                        {dateCountdown(
                          v.daysleft[0],
                          v.daysleft[1],
                          v.daysleft[2]
                        )}
                        天
                      </p>
                      <p className="progress-text mt-1">
                        目標人數:{v.goal_num}人
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      {
                        {
                          0: (
                            <Button variant="outline-warning">查看訂單</Button>
                          ),
                          1: <Button variant="outline-warning">去付款</Button>,
                          2: (
                            <Button variant="outline-warning">查看訂單</Button>
                          ),
                        }[v.payable]
                      }
                    </div>
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

export default ComBookingCard
