import { useEffect, useState } from "react"
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [numberOfProducts, setNumberOfProducts] = useState(0);
    useEffect(() => {
        let timer;
        timer = setInterval(() => {
            if (localStorage.getItem("cartAtoZ")) {
                let cart = JSON.parse(localStorage.getItem("cartAtoZ"));
                setNumberOfProducts(cart.length);
            }
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <nav className="bg-sky-600 flex p-3 text-white justify-between fixed top-0 w-full z-10">
                <Link to="/" className="text-lg font-bold">AtoZ</Link>
                <ul className="flex gap-10">
                    <li>
                        <Link to="/orders" className="font-bold">My Orders</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <div className="relative">
                                <FaCartArrowDown className="text-2xl" />
                                <span className=" absolute top-0 left-5 text-xs bg-yellow-300 rounded-full px-2">
                                    {numberOfProducts}
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li><FaUserCircle className="text-2xl cursor-pointer" /></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar