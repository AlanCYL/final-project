import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL, IMAGE_URL } from '../utils/config'
import Heart from '../components/ShopList/Heart'

function ShopList() {
  const [shops, seShops] = useState([])
  useEffect(() => {
    let getShop = async () => {
      let response = await axios.get(`${API_URL}/shoplist`)
      seShops(response.data)
    }
    getShop()
  }, [])

  return (
    <>
      <div className="ShopList container mt-4 mb-5 d-flex justicy-content-center flex-wrap">
        {shops.map((v, i) => {
          return (
            <div key={v.id} className="hover01 ps-6 mt-6 ">
              <div className="zoom-in">
                <Link to="#/">
                  <div className="piczoom">
                    <img
                      className="w-100"
                      src={`${IMAGE_URL}${shops[i].img}`}
                      alt=""
                    />
                  </div>
                </Link>
                <div className=" d-flex mt-3">
                  <h5 className="me-auto">{v.name}</h5>
                  <Heart className="ms-auto" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ShopList
