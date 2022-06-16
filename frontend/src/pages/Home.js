import React from 'react'
import CardHome from '../components/Card/CardHome'
// import FamousShop from '../components/Home/FamousShop'

function Home() {
  return (
    <>
      <div className="container-fluid mt-6"></div>
      {/* 熱門開團 */}
      <div className="fampus container mb-6">
        <div className="row">
          <h3 className="ps-4">熱門開團</h3>
          <div className="col-md-6  col-12 px-6 mt-5">
            <CardHome />
            <CardHome />
            <CardHome />
            <CardHome />
          </div>
          <div className="col-md-6 col-12 px-6 mt-5">
            <CardHome />
            <CardHome />
            <CardHome />
            <CardHome />
          </div>
        </div>
      </div>
      {/* 熱門店家 */}
      {/* <div className="col-6 px-6 mt-5">
        <FamousShop />
      </div> */}
    </>
  )
}

export default Home
