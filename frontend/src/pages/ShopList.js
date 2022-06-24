import React from 'react'
import { Link } from 'react-router-dom'
import ShopCard from '../components/ShopList/ShopCard'

function ShopList() {
  return (
    <>
      <div className="ShopList container mt-4 mb-5 d-flex justicy-content-center flex-wrap">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </>
  )
}

export default ShopList
