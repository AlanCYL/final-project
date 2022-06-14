import React from 'react'
// import bannertest01 from '../image/groups/bannertest01.jpg'
import bannertest02 from '../image/groups/bannertest02.jpg'
import fliterpic from '../image/groups/fliterpic.png'
import FamousGroups from '../components/Group/FamousGroups'
import Filter from '../components/Group/Filter'
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
