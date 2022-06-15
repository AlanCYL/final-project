import React from 'react'
import CardWord from '../../image/home/logo/Kangyaolife'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
//左右按鈕
function FamousShop(props) {
  const cardWordSlider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const slideWLeft = () => {
    let slider = document.querySelector('.sliderw')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  const slideWRight = () => {
    let slider = document.querySelector('.sliderw')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <>
      <div className="w-100 slider-container d-flex justify-content-between align-items-center">
        <MdChevronLeft
          className="slider-icon left bg-info"
          size={40}
          onClick={slideWLeft}
        />
        <div className="sliderw">
          {cardWordSlider.map((v, i) => {
            return (
              <div key={i} className="d-inline-block p-4">
                <CardWord />
              </div>
            )
          })}
        </div>
        <MdChevronRight
          className="slider-icon right bg-info"
          size={40}
          onClick={slideWRight}
        />
      </div>
      {/* <div className="w-100 h-100 famous-groups d-flex justify-content-center align-items-center"></div> */}
    </>
  )
}

export default FamousShop
