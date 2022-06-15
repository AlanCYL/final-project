import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import EmptyReserveList from './EmptyReserveList'
import ReserveList from './ReserveList'
import ConfirmReserveList from './ConfirmReserveList'
import FinishReserveList from './FinishReserveList'

const ReserveCart = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shoppingCart/EmptyReserveList">
            <EmptyReserveList />
          </Route>
          <Route path="/shoppingCart">
            <ReserveList />
          </Route>
          <Route path="/shoppingCart/ConfirmReserveList">
            <ConfirmReserveList />
          </Route>
          <Route path="/shoppingCart/FinishReserveList">
            <FinishReserveList />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default ReserveCart
