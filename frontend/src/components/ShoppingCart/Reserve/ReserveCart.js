import { BrowserRouter as Link } from 'react-router-dom'
import EmptyReserveList from './EmptyReserveList'
import ReserveList from './ReserveList'
import ConfirmReserveList from './ConfirmReserveList'
import FinishReserveList from './FinishReserveList'
import PayList from '../Pay/PayList'
import ConfirmPay from '../Pay/ConfirmPay'
import FinishPay from '../Pay/FinishPay'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../utils/config'
import axios from 'axios'

const ReserveCart = (props) => {
  const { data } = props
  const [step, setStep] = useState(0)
  const [inputVal, setInputVal] = useState('')
  // 要抓使用者check的groupId
  const [groups, setGroups] = useState([])
  // 會員加入購物車，要抓到會員的id
  const [user, setUser] = useState(1)
  useEffect(() => {
    fetch(`${API_URL}/shoppingCart/search?userID=${user}`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        /*接到response data後要做的事情*/
        if (res.result.length === 0) {
          setStep(0)
        } else {
          setStep(1)
        }
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e)
      })
  }, [])

  // reserveList的checkbox
  function setGroupsFunc(groups) {
    const arrOfGroups = groups.map((str) => {
      return Number(str)
    })
    setGroups(arrOfGroups)
  }

  function toggleStep(val) {
    setStep(step + val)
  }

  async function SubmitList() {
    const params = {
      userID: user,
      groupID: groups,
    }
    await axios.post(`${API_URL}/shoppingCart/finishreservelist`, params)
    toggleStep(1)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div>
        {step === 0 ? (
          <>
            <EmptyReserveList />
            <div className="d-flex flex-column align-items-center  w-100">
              <a
                type="button"
                className="mb-5 bg-primary px-5 py-2 rounded ms-9 text-dark"
                onClick={() => {
                  toggleStep(2)
                  window.scrollTo(0, 0)
                }}
              >
                參團去
              </a>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 1 ? (
          <>
            <ReserveList userID={user} setGroupsFunc={setGroupsFunc} />
            <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-between w-75">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 ms-6 mb-5"
                  onClick={() => {
                    toggleStep(-1)
                    window.scrollTo(0, 0)
                  }}
                >
                  想看更多
                </a>
                <a
                  type="button"
                  className="bg-primary text-white px-4 py-2 me-8 mb-5"
                  onClick={() => {
                    toggleStep(1)
                    window.scrollTo(0, 0)
                  }}
                >
                  前往訂位
                </a>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 2 ? (
          <>
            <ConfirmReserveList groups={groups} userID={user} />
            <div className="d-flex justify-content-end mb-4">
              <div className="d-flex justify-content-around w-75">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 mt-4 me-8"
                  onClick={() => {
                    toggleStep(-1)
                    window.scrollTo(0, 0)
                  }}
                >
                  返回購物車
                </a>
                <a
                  type="button"
                  className="bg-primary text-white px-4 py-2 me-5 mt-4"
                  onClick={() => {
                    SubmitList()
                  }}
                >
                  確定訂位
                </a>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 3 ? (
          <>
            <FinishReserveList groups={groups} userID={user} />
            <div className="d-flex justify-content-center mb-5">
              <a
                href="/memberCenter"
                type="button"
                className="bg-info text-white px-4 py-2 mt-4"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                查看我的訂單
              </a>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 4 ? (
          <>
            <PayList />
            <div className="d-flex justify-content-center mb-5">
              <div className="d-flex justify-content-around w-75">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 mt-4 ms-5"
                  onClick={() => {
                    toggleStep(-1)
                    window.scrollTo(0, 0)
                  }}
                >
                  返回訂位
                </a>
                <a
                  type="button"
                  className="bg-primary text-white px-4 py-2 me-5 mt-4"
                  onClick={() => {
                    toggleStep(1)
                    window.scrollTo(0, 0)
                  }}
                >
                  確認結帳
                </a>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 5 ? (
          <>
            <ConfirmPay />
            <div className="d-flex justify-content-center mb-5">
              <div className="d-flex justify-content-around w-75">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 mt-4 ms-5"
                  onClick={() => {
                    toggleStep(-1)
                    window.scrollTo(0, 0)
                  }}
                >
                  重選結帳項目
                </a>
                <a
                  type="button"
                  className="bg-primary text-white px-4 py-2 me-5 mt-4"
                  onClick={() => {
                    toggleStep(1)
                    window.scrollTo(0, 0)
                  }}
                >
                  前往結帳
                </a>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        {step === 6 ? (
          <>
            <FinishPay />
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ReserveCart
