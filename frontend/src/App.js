<<<<<<< HEAD
import Nav from './components/Navbar/NavbarDesktop'
import Footer from './components/Footer/Footer'
import MemberLogin from './pages/MemberLogin'
// import ShopLogin from './pages/ShopLogin'
function App() {
  return (
    <>
      <Nav />
      <MemberLogin />
      {/* <ShopLogin /> */}

      <Footer />
=======
// import Nav from './components/Navbar/NavbarDesktop'
// import Footer from './components/Footer/Footer'
// import MemberLogin from './pages/MemberLogin'
import Shop from './pages/Shop'
import ReserveList from './components/ShoppingCart/ReserveList'
function App() {
  return (
    <>
      {/* <Nav /> */}
      {/* <MemberLogin /> */}
      <Shop />
      <ReserveList />
      {/* <Footer /> */}
>>>>>>> c498ddf6472e8dc8f8dbdeb45ae3cdc3059d42c0
    </>
  )
}

export default App
