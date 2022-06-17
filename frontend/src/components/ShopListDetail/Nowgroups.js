import React from 'react'

function Nowgroups() {
  return (
    <>
      <div className="p-3 shadow-sm mb-5">
        <h4 className="fw-normal">目前人數:6人</h4>
        <h6 className="fw-normal mb-4">用餐時間:2022/06/17</h6>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: '30%' }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between">
          <p className="progress-text mt-1">剩下3天</p>
        </div>
      </div>
    </>
  )
}

export default Nowgroups
