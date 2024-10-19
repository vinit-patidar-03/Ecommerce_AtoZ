import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import MensWear from "./pages/MensWear.jsx"
import WomensWear from "./pages/WomensWear.jsx"
import WomensFootwear from "./pages/WomensFootwear.jsx"
import MensFootwear from "./pages/MensFootwear.jsx"
import KidsWear from "./pages/KidsWear.jsx"
import KidsFootwear from "./pages/KidsFootwear.jsx"
import Books from "./pages/Books.jsx"
import Laptops from "./pages/Laptops.jsx"
import Mobiles from "./pages/Mobiles.jsx"
import Watches from "./pages/Watches.jsx"
import Cart from "./pages/Cart.jsx"
import Success from "./pages/Success.jsx"
import Orders from "./pages/Orders.jsx"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menswear" element={<MensWear />} />
        <Route path="womenswear" element={<WomensWear />} />
        <Route path="femalefootwear" element={<WomensFootwear />} />
        <Route path="malefootwear" element={<MensFootwear />} />
        <Route path="kidswear" element={<KidsWear />} />
        <Route path="kidsfootwear" element={<KidsFootwear />} />
        <Route path="books" element={<Books />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="watches" element={<Watches />} />
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
