import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import NavbarShop from '../components/Navbar/NavbarShop'
import Login from '../components/Shop/Login/Login'
import Register from '../components/Shop/Register/Register'
import Footer from '../components/Footer/Footer'

function Shop() {
  return (
    <Router>
      <>
        <NavbarShop />
        <Switch>
          <Route path="/shop/Register">
            <Register />
          </Route>
          <Route path="">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default Shop
