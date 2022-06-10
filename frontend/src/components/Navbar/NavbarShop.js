import React from 'react'

function NavbarShop() {
  return (
    <>
      <header className="sticky-top shadow">
        <div className="head d-flex justify-content-start align-items-center py-3 ps-9">
          <div className="logo">
            <img src={require('../../image/navbar/logo.png')} alt="" />
          </div>
          <h4 className="ms-4 mt-3">店家註冊/登入</h4>
        </div>
      </header>
    </>
  )
}

export default NavbarShop
