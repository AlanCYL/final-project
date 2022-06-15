import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PayList from './PayList'
import ConfirmPay from './ConfirmPay'
import FinishPay from './FinishPay'

const PayCart = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shoppingCart/PayList">
            <PayList />
          </Route>
          <Route path="/shoppingCart/ConfirmPay">
            <ConfirmPay />
          </Route>
          <Route path="/shoppingCart">
            <FinishPay />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default PayCart
