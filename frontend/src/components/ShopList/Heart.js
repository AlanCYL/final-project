import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function Heart() {
  const [heart, setHeart] = useState(0)
  const heartPoint = 1
  return (
    <>
      <label className="heart-input">
        <input
          type="radio"
          name=""
          value={heartPoint}
          onClick={() => {
            setHeart(!heart)
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
