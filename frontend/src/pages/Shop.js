import React from 'react'
import NavbarShop from '../components/Navbar/NavbarShop'
// import ShopLogin from '../components/Shop/ShopLogin/ShopLogin'
import ShopCreate from '../components/Shop/ShopCreate/ShopCreate'
import Footer from '../components/Footer/Footer'
function Shop() {
  return (
    <>
      <NavbarShop />
      {/* <ShopLogin /> */}
      <ShopCreate />
      <Footer />
    </>
  )
}

export default Shop
