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
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

const AllBookingCard = () => {
  const { member } = useLogin()
  const [booking, setBooking] = useState([])
  let history = useHistory()
  //查看訂單使用Model顯示訂單資訊
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [detail, setDetail] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        let response = await axios.get(`${API_URL}/booking/allBooking`, {
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

  //去結帳（導頁）
  function goToPage(id) {
    history.push({
      pathname: '/ShoppingCart',
      state: { groupId: `${id}`, step: 4 },
    })
  }
  //查看訂單的資訊
  async function WatchList(v) {
    const userId = member.id
    const watchId = v.id
    let response = await axios.get(
      `${API_URL}/booking/watchList?userId=${userId}&watchId=${watchId}`
    )
    setDetail(response.data.result[0])
  }
  //顯示是否成團/吃飯時間
  function getEatTimeString() {
    if (detail.eating_time === 1) {
      return '午餐12:00'
    } else if (detail.eating_time === 2) {
      return '下午茶15:00'
    } else {
      return '晚餐18:00'
    }
  }
  function isEstablish() {
    if (detail.established === 0) {
      return '未成團'
    } else {
      return '已成團'
    }
  }
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
                    src={IMAGE_URL + `${v.img}`}
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
                            <>
                              <Button
                                variant="outline-warning"
                                onClick={() => {
                                  handleShow()
                                  WatchList(v)
                                }}
                              >
                                查看訂單
                              </Button>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>訂位詳情資訊</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <h5 className="text-danger">
                                    恭喜您，已訂位成功
                                  </h5>
                                  <table className="border border-secondary w-75 mx-auto mt-3">
                                    <tr>
                                      <th className="ps-4">訂單編號：</th>
                                      <td className="py-3">{detail.id}</td>
                                    </tr>
                                    <tr>
                                      <th className="ps-4">用餐日期：</th>
                                      <td className="py-3">
                                        {detail.eating_date}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-4">用餐時間：</th>
                                      <td className="py-3">
                                        {getEatTimeString()}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-4">目前人數：</th>
                                      <td className="py-3">
                                        {detail.now_num}人
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-4">達成人數：</th>
                                      <td className="py-3">
                                        {detail.goal_num}人
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="ps-4">是否成團：</th>
                                      <td className="py-3 text-primary">
                                        {isEstablish()}
                                      </td>
                                    </tr>
                                  </table>
                                </Modal.Body>
                              </Modal>
                            </>
                          ),
                          1: (
                            <Button
                              variant="outline-warning"
                              onClick={() => {
                                goToPage(v.id)
                                window.scrollTo(0, 0)
                              }}
                            >
                              去付款
                            </Button>
                          ),
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

export default AllBookingCard
