import Nav from './components/Navbar/NavbarDesktop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MemberLogin from './pages/MemberLogin'
import './App.css'
function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Header />
        <MemberLogin />
      </div>
      <Footer />
    </>
  )
}

export default App
