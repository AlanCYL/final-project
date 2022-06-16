import React from 'react'
import bannertest02 from '../image/groups/bannertest02.jpg'
import FamousGroups from '../components/Group/FamousGroups'
import Recommend from '../components/Group/Recommend'
import GroupPages from '../components/Group/GroupPages'
import Carousel from 'react-bootstrap/Carousel'

function Groups() {
  return (
    <>
      {/* 輪播banner */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={bannertest02} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannertest02}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannertest02} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      {/* 熱門開團 */}
      <div className="container groups mb-6">
        <h3 className=" titleH3 ps-4">熱門開團</h3>
        <FamousGroups />
      </div>
      {/* 開團頁面*/}
      <div className="container-fluid mb-6">
        <GroupPages />
      </div>
      {/* 為你推薦 */}
      <div className="container groups mb-6">
        <h3 className="ps-4">為你推薦</h3>
        <Recommend />
      </div>
    </>
  )
}

export default Groups
