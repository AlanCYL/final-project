import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

const AvailCoupon = () => {
  const [coupon, setCoupon] = useState(false)
  return (
    <>
      <div class="container">
        <div class="row justify-content-between gy-3">
          {/* 卡片 */}
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
                <Button variant="danger" className="py-1">
                  <h5 className="text-nowrap text-white">領取</h5>
                </Button>
              </div>
            </div>
          </div>
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
                  className="py-1"
                  disabled={coupon ? true : false}
                  onClick={() => {
                    setCoupon(true)
                  }}
                >
                  <h5 className="text-nowrap text-white">領取</h5>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvailCoupon
