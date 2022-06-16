import React from 'react'

function ShopListDetail() {
  return (
    <>
      <div className="container ms-7 mt-5 mb-6 ">
        {/* 店家資訊 */}
        <div className="shopdetail container d-flex justify-content-center">
          <div className="first-section ">
            <div className="row">
              <div className="col-3">
                <img
                  src={require('../image/home/logo/Dintaifung.jpg')}
                  alt=""
                />
              </div>
              <div className="col-9">
                <h4 className="mt-4">鼎泰豐</h4>
                <h5 className="mt-4">台北市忠孝東路三段３００號Ｂ２</h5>
                <h5 className="fw-normal">02-8772-0528</h5>
              </div>
              <h5 className="mt-4 fw-normal">
                鼎泰豐是臺灣一家以麵食產銷為主的連鎖餐廳，以小籠包聞名。1958年開設於臺北市信義路，最初爲流行而於1970年代起兼賣小籠包，從此發跡。
              </h5>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default ShopListDetail
