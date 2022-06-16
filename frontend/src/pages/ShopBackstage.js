import React from 'react'
import NavBackstage from '../components/ShopBackstage/NavBackstage'
// import Opengroup from '../components/ShopBackstage/Opengroup'
import NavbarShopbackstage from '../components/Navbar/NavbarShopbackstage'

const ShopBackstage = () => {
  return (
    <>
      <NavbarShopbackstage />
      <div className="d-flex">
        <NavBackstage />
        {/* <Opengroup /> */}
      </div>
    </>
  )
}

export default ShopBackstage
