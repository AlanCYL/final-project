import registerbanner from '../../../image/shop/registerbanner.png'
import ShopCreateForm from './RegisterForm'

function Register() {
  return (
    <>
      <div className="container-fulid banner">
        <img className='img-fluid"' src={registerbanner} alt="" />
      </div>
      <h3 className="mt-5 text-center">
        歡迎您!<span>Unii</span>期待眾多優秀的餐廳加入
      </h3>
      <div className="container mt-5 mb-5">
        <ShopCreateForm />
      </div>
    </>
  )
}
export default Register
