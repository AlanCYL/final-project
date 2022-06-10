import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDesktop = () => {
  return (
    <>
      <div className="head d-flex justify-content-around align-items-center py-3">
        <div className="logo">
          <img src={require('../../image/navbar/logo.png')} alt="" />
        </div>

        <div className="navBar">
          <ul className="d-flex">
            <li>
              <Link to="">
                <h4>首頁</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>立即參團</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>店家列表</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <h4>店家登入/註冊</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div className="icon">
          <img src={require('../../image/navbar/shop.png')} alt="" />
          <img src={require('../../image/navbar/login.png')} alt="" />
          <img src={require('../../image/navbar/map.png')} alt="" />
        </div>
      </div>
      <div className='header-space'></div>
    </>
  )
}

export default NavbarDesktop
