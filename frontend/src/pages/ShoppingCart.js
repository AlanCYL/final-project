import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReserveCart from '../components/ShoppingCart/Reserve/ReserveCart'
import PayCart from '../components/ShoppingCart/Pay/PayCart'

const ShoppingCart = () => {
  return (
    <>
      <ReserveCart />
    </>
  )
}

export default ShoppingCart
