import React from 'react'
import { Link } from 'react-router-dom'
import ShopCard from '../components/ShopList/ShopCard'

function ShopList() {
  return (
    <>
      <div className="ShopList container mt-6 mb-5 d-flex justicy-content-center ">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
      <div className="ShopList container mt-4 mb-5 d-flex justicy-content-center ">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </>
  )
}

export default ShopList
