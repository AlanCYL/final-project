import React from 'react'
import Card from '../Card/Card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
//左右按鈕
function FamousGroups(props) {
  const cardSlider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const slideLeft = () => {
    let slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  const slideRight = () => {
    let slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <>
      <div className="w-100 slider-container d-flex justify-content-between align-items-center">
        <MdChevronLeft
          className="slider-icon left bg-info"
          size={40}
          onClick={slideLeft}
        />
        <div className="slider">
          {cardSlider.map((v, i) => {
            return (
              <div className="d-inline-block p-4">
                <Card />
              </div>
            )
          })}
        </div>
        <MdChevronRight
          className="slider-icon right bg-info"
          size={40}
          onClick={slideRight}
        />
      </div>
      {/* <div className="w-100 h-100 famous-groups d-flex justify-content-center align-items-center"></div> */}
    </>
  )
}

export default FamousGroups
