import React from 'react'

function GroupDiscount() {
  return (
    <>
      <div className="mx-6 mt-5">
        <div className="row">
          <div className="col-4 ">
            <h4 className="bg-primary text-center">10人達標</h4>
            <div className="mt-4 px-2 py-4 discount-dish text-center">
              <h4 className="mb-3 text-primary">價值 $1185菜色 (85折)</h4>
              <h5>菜色(每人)</h5>
              <p>排骨蛋炒飯</p>
              <p>小籠包(10顆)</p>
              <p>蝦肉煎餃(6顆)</p>
              <p>元盅雞湯</p>
              <p>涼拌雲耳</p>
              <p>巧克力小籠包(５顆)</p>
            </div>
          </div>
          <div className="col-4 ms-6">
            <h4 className="bg-primary text-center">20人達標</h4>
            <div className="mt-4 px-2 py-4 discount-dish text-center">
              <h4 className="mb-3 text-primary">價值 $1270菜色 (78折)</h4>
              <h5>菜色(每人)</h5>
              <p>排骨蛋炒飯</p>
              <p>小籠包(10顆)</p>
              <p>蝦肉煎餃(6顆)</p>
              <p>元盅雞湯</p>
              <p>涼拌雲耳</p>
              <p>巧克力小籠包(５顆)</p>
              <p className="text-danger">豆沙粽子</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupDiscount
