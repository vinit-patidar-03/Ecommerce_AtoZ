import { useEffect, useState } from "react"
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("cartAtoZ")) {
            setCartItems(JSON.parse(localStorage.getItem("cartAtoZ")));
        }
    }, [])

    return (
        <>
            <div className="mt-[3.25rem] p-2">
                {
                    cartItems &&
                    cartItems.map((item, index) => {
                        return <CartCard product={item} key={index} setCartItems={setCartItems} />
                    })
                }
                {cartItems.length === 0 &&
                    <div className="h-[calc(100vh-4.25rem)] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-[70%] sm:w-[40%]">
                            <img src="images/Cart.webp" alt="empty-cart" className="w-[300px]" />
                            <h2 className="text-2xl font-bold">Your cart is empty</h2>
                            <p className="text-gray-500 text-center">Looks like you have not added anything in your cart. Go ahead and explore top categories.</p>
                            <Link to="/" className="px-5 py-1 mt-5 rounded-lg bg-blue-600 text-white">continue shopping</Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart