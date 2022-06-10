import Header from '../Header/Header'
import Side from './Side'
import List from './List'

const ReserveList = () => {
  return (
    <>
      <Header />
      <div className="d-flex container">
        <Side />
        <List />
      </div>
    </>
  )
}

export default ReserveList
