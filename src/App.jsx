import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Success from "./pages/Success.jsx"
import Orders from "./pages/Orders.jsx"
import Products from "./pages/Products.jsx"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/paymentSuccess" element={<Success />} />
      </Routes>
      <Toaster position="bottom-center" />
      <Footer />
    </>
  )
}

export default App
