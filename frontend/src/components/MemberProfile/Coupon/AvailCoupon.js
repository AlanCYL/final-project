import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const AvailCoupon = () => {
  const [coupon, setCoupon] = useState(false)
  const handleUsed = (e) => {
    e.currentTarget.disabled = true
  }
  return (
    <>
      <div class="container">
        <div class="row justify-content-between gy-3">
          {/* 卡片 */}
          {[1, 1, 1].map((v, i) => {
            return (
              <div class="col-md-5 mx-3">
                <div class="alert alert-coupon row justify-content-around pe-md-5">
                  <div className="col-auto col-md-7">
                    <h4 className="text-info">優惠券</h4>
                    <p>
                      陰天，在不開燈的房間，孤單寂寞覺得冷?
                      讓Unii來安慰你容易受傷脆弱的心
                    </p>
                  </div>
                  <div className="col-auto p-0 text-center mx-2">
                    <h3 className="text-danger">$200</h3>
                    <Button
                      variant="danger"
                      className="py-1 fs-5 text-white"
                      disabled={coupon ? true : false}
                      onClick={handleUsed}
                    >
                      領取
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AvailCoupon
