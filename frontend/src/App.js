import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Navbar/NavbarDesktop'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import MemberLogin from './pages/MemberLogin'
import Shop from './pages/Shop'
import ShoppingCart from './pages/ShoppingCart'
import MemberCenter from './pages/MemberCenter'
import Groups from './pages/Groups'
import GroupDetail from './pages/GroupDetail'
import NotFoundPage from './pages/NotFoundPage'
import ShopBackstage from './pages/ShopBackstage'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <MemberLogin />
        </Route>
        <Route path="/memberCenter">
          <MemberCenter />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/groupDetail">
          <GroupDetail />
        </Route>
        <Route path="/shoppingCart">
          <ShoppingCart />
        </Route>
        <Route path="/shopBackstage">
          <ShopBackstage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
