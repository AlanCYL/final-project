import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PayList from './PayList'

const PayCart = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shoppingCart">
            <PayList />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default PayCart
