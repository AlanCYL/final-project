import React from 'react'
import { Link } from 'react-router-dom'

function ShopCard() {
  return (
    <>
      <div class="hover01 ms-6">
        <div className="zoom-in">
          <Link to="#/">
            <div className="piczoom">
              <img
                className="w-100"
                src={require('../../image/shopList/Kangyaolife-1.jpg')}
                alt=""
              />
            </div>
          </Link>
          <h5 className="mt-3 mx-auto">陶板屋</h5>
        </div>
      </div>
    </>
  )
}

export default ShopCard
