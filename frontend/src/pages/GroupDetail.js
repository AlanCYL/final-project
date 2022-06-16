import React from 'react'
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function GroupDetail() {
  return (
    <>
      <div className="groupdetail container mt-7 mb-7">
        <div className="row">
          {/* 左邊 */}
          <div className="col-8 ">
            {/* 最上面 圖 */}
            <div className="img-box ms-auto">
              <img
                src={require('../image/groupdetail/DinTaiFung.jpg')}
                alt=""
              />
            </div>
            {/* 店家資訊 */}
            <div className="ms-7 mt-5">
              <div className="row">
                <div className="col-3">
                  <img
                    src={require('../image/home/logo/Dintaifung.jpg')}
                    alt=""
                  />
                </div>
                <div className="col-9 mb-5">
                  <h4 className="mt-4">鼎泰豐</h4>
                  <h5 className="mt-4">台北市忠孝東路三段３００號Ｂ２</h5>
                  <h5 className="fw-normal">02-8772-0528</h5>
                </div>
                <hr />
                <h5 className="mt-4 fw-normal">
                  鼎泰豐是臺灣一家以麵食產銷為主的連鎖餐廳，以小籠包聞名。1958年開設於臺北市信義路，最初爲流行而於1970年代起兼賣小籠包，從此發跡。
                </h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="container ps-2">
              <h3 className="px-3 mb-5 text-info">已達成開團目標</h3>
              <div className="mt-4 mb-1">
                <div className="Gtitle d-flex align-items-center ">
                  <img src={require('../image/groupdetail/icon7.png')} alt="" />
                  <h5 className="ms-2 mt-2">目前人數</h5>
                  <h2 className="ms-4">23人</h2>
                </div>
              </div>
              <div className="mt-4 mb-1">
                <div className="Gtitle d-flex align-items-center ">
                  <img src={require('../image/groupdetail/icon5.png')} alt="" />
                  <h5 className="ms-2 mt-2">開團倒數</h5>
                  <h2 className="ms-4">11天</h2>
                </div>
              </div>
              <div className="mt-4 mb-1">
                <div className="Gtitle d-flex align-items-center ">
                  <img src={require('../image/groupdetail/icon4.png')} alt="" />
                  <h5 className="ms-2 mt-2">參團價格</h5>
                  <h2 className="ms-4">$1000</h2>
                </div>
              </div>
              <div className="ms-auto mt-5">
                <Link to="/ShoppingCart">
                  <button type="button" className="btn btn-info">
                    我要參團
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-9 container">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home"></Tab>
          <Tab eventKey="profile" title="Profile"></Tab>
          <Tab eventKey="contact" title="Contact" disabled></Tab>
        </Tabs>
      </div>
    </>
  )
}

export default GroupDetail
