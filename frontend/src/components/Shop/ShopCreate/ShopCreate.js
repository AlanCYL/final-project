import shopcreatebanner from '../../../image/shop/shopcreatebanner.png'
import ShopCreateForm from './ShopCreateForm/ShopCreateForm'

function ShopCreate() {
  return (
    <>
      <div className="container-fulid banner">
        <img className='img-fluid"' src={shopcreatebanner} alt="" />
      </div>
      <h3 className="mt-5 text-center">
        歡迎您!<span>Unii</span>期待眾多優秀的餐廳加入
      </h3>
      <div className="container mt-5 mb-8">
        <ShopCreateForm />
      </div>
    </>
  )
}
export default ShopCreate
