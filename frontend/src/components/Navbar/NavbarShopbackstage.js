import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

function NavbarShopbackstage() {
  return (
    <>
      <header className="sticky-top shadow bg-white">
        <div className="head d-flex justify-content-start align-items-center py-3 ps-4 container">
          <div className="logo">
            <Link to="/">
              <img src={require('../../image/navbar/logo.png')} alt="" />
            </Link>
          </div>
          <h4 className="ms-4 mt-3">店家後台</h4>
          <FiLogOut className="text-primary ms-auto" size={30} />
        </div>
      </header>
    </>
  )
}

export default NavbarShopbackstage
