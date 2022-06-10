import Header from '../Header/Header'
import Side from './Side'
import List from './List'

const ReserveList = () => {
  return (
    <>
      <div className=" container my-6">
        <Header />
        <div className="d-flex">
          <Side />
          <div className="ms-5">
            <div className="w-75 ms-8">
              <img
                className="w-75 my-5"
                src={require('../../image/shoppingCart/icongroup04.png')}
                alt=""
              />
            </div>
            <List />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveList
