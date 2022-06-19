import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import EmptyReserveList from './EmptyReserveList'
import ReserveList from './ReserveList'
import ConfirmReserveList from './ConfirmReserveList'
import FinishReserveList from './FinishReserveList'
import PayList from '../Pay/PayList'
import ConfirmPay from '../Pay/ConfirmPay'
import FinishPay from '../Pay/FinishPay'
import React, { useEffect, useState } from 'react'

const ReserveCart = () => {
  const [step, setStep] = useState(0)
  const [inputVal, setInputVal] = useState('')
  function toggleStep(val) {
    setStep(step + val)
  }
  function submit() {
    console.log(inputVal)
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
                  toggleStep(1)
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
            <ReserveList />
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
            <ConfirmReserveList />
            <div className="d-flex justify-content-end mb-4">
              <div className="d-flex justify-content-around w-75">
                <a
                  type="button"
                  className="bg-info text-white px-4 py-2 mt-4"
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
                    toggleStep(1)
                    window.scrollTo(0, 0)
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
            <FinishReserveList />
            <div className="d-flex flex-column align-items-center  w-100">
              <Link
                to="/memberCenter"
                className="mb-5 bg-primary text-white  px-5 py-2 rounded ms-3"
                onClick={() => {
                  // toggleStep(1)
                  window.scrollTo(0, 0)
                }}
              >
                查看我的訂單
              </Link>
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
