import React from 'react'
import { useHistory } from 'react-router-dom'

const Side = () => {
  const history = useHistory()

  return (
    <>
      <div className="side w-25 ms-3">
        <div className="d-flex mt-3 ">
          <img src={require('../../image/shoppingCart/cart.png')} alt="" />
          <h5 className="mx-1 side-hover">購物車</h5>
        </div>
        <div className="d-flex mt-5 ">
          <img src={require('../../image/shoppingCart/heart.png')} alt="" />
          <h5
            className="mx-1 side-hover"
            onClick={() => {
              history.push('/memberCenter')
            }}
          >
            收藏清單
          </h5>
        </div>
      </div>
    </>
  )
}

export default Side
