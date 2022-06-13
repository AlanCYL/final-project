import React from 'react'
import bannertest01 from '../image/groups/bannertest01.jpg'
import bannertest02 from '../image/groups/bannertest02.jpg'
import fliterpic from '../image/groups/fliterpic.png'
import FamousGroups from '../components/Group/FamousGroups'
import Filter from '../components/Group/Filter'
import GroupPages from '../components/Group/GroupPages'

function Groups() {
  return (
    <>
      {/* 輪播banner */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannertest02} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannertest01} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannertest01} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* 熱門開團 */}
      <div className="container groups mb-6">
        <h3 className="ps-4">熱門開團</h3>
        <FamousGroups />
      </div>
      {/* 篩選 */}
      <div className="container-fluid mb-9">
        <div className="container-fluid bg-secondary group-fliter">
          <div className="pic ps-8 ms-4">
            <img className="img-fluid mt-6 ms-4" src={fliterpic} alt="" />
          </div>
          <div>
            <Filter />
          </div>
        </div>
      </div>
      {/* 其他團 */}
      <div className="container mb-8">
        <GroupPages />
      </div>
    </>
  )
}

export default Groups
