import Nav from './components/Navbar/NavbarDesktop'
import Footer from './components/Footer/Footer'
import MemberLogin from './pages/MemberLogin'
import Shop from './pages/Shop'
// import ReserveList from './components/ShoppingCart/ReserveList'
import MemberCenter from './pages/MemberCenter'
function App() {
  return (
    <>
      <Nav />
      <MemberCenter />
      {/* <MemberLogin /> */}
      {/* <Shop /> */}
      {/* <ReserveList /> */}
      <Footer />
    </>
  )
}

export default App
