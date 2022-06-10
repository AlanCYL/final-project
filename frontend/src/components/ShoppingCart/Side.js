import React from 'react'

const Side = () => {
  return (
    <>
      <div className="side w-25">
        <div className="d-flex mt-5">
          <img src={require('../../image/shoppingCart/cart.png')} alt="" />
          <h5 className="mx-1">購物車</h5>
        </div>
        <div className="d-flex mt-5">
          <img src={require('../../image/shoppingCart/heart.png')} alt="" />
          <h5 className="mx-1">收藏清單</h5>
        </div>
      </div>
    </>
  )
}

export default Side
