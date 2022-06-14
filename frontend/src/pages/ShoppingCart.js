import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReserveCart from '../components/ShoppingCart/Reserve/ReserveCart'
import PayCart from '../components/ShoppingCart/Pay/PayCart'

const ShoppingCart = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shoppingCart">
            <ReserveCart />
          </Route>
          <Route path="/shoppingCart></Route">
            <PayCart />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default ShoppingCart
