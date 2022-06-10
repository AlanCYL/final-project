import React from 'react'

const NavbarShop = () => {
  return (
    <>
      <div className="shop-head container-fluid main-content d-flex shadow">
        <div className="ms-6 mt-3">
          <img src={require('../../image/navbar/logo.png')} alt="" />
        </div>
        <h3 className="d-flex align-items-center ms-4">店家登入/註冊</h3>
      </div>
    </>
  )
}

export default NavbarShop
