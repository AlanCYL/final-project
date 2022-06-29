import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useLogin } from '../../context/LoginStatus'

function Heart() {
  const [heart, setHeart] = useState(false)
  const heartPoint = 1
  const { member } = useLogin()

  const inputFavorite = async () => {
    if (member) {
      if(heart === true){
        setHeart(false)
        // TODO:INSERT
      }else{
        setHeart(true)
        // TODO:DELETE
      }
    } else {
        // TODO:請登入，USELOCATON跳到登入畫面
    }
  }

  return (
    <>
      <label className="heart-input">
        <input
          type="radio"
          name=""
          defaultValue={heartPoint}
          onClick={() => {

            inputFavorite()
          }}
        />
        <FaHeart
          size={20}
          color={heart < heartPoint ? '#A7A5A5' : '#EF8062'}
          className="heart"
        />
      </label>
    </>
  )
}

export default Heart
