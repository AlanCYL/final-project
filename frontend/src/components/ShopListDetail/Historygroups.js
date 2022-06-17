import React from 'react'

function Historygroups() {
  return (
    <>
      <div className="p-3 shadow-sm mb-5">
        <h4 className="fw-normal">最後人數:6人</h4>
        <h5 className="fmb-4">已用餐</h5>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: '100%' }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="progress-text mt-1">2022/06/11結團</p>
          <p className="progress-text mt-1">最後人數:12人</p>
        </div>
      </div>
    </>
  )
}

export default Historygroups
