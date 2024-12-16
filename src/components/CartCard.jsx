import toast from "react-hot-toast";
import { createOrderandPay } from "../api/Payment";

const CartCard = ({ product, setCartItems, setLoading }) => {
    const handleClick = (action) => {
        let cart = []
        cart = [...JSON.parse(localStorage.getItem("cartAtoZ"))];
        if (action === "+") {
            cart.filter((item) => item.id === product.id)[0].Quantity += 1;
        } else {
            if (cart.filter((item) => item.id === product.id)[0].Quantity > 1) {
                cart.filter((item) => item.id === product.id)[0].Quantity -= 1;
            }
        }
        localStorage.setItem("cartAtoZ", JSON.stringify(cart));
        setCartItems(cart);
    }

    const removeFromCart = () => {
        let cart = []
        if (localStorage.getItem("cartAtoZ")) {
            cart = [...JSON.parse(localStorage.getItem("cartAtoZ"))];
            cart = cart.filter((item) => item.id !== product.id)
            localStorage.setItem("cartAtoZ", JSON.stringify(cart));
            setCartItems(cart);
        }
        toast.success("Deleted from cart successfully");
    }

    return (
        <>
            <div className="flex shadow-[0_0px_2px_0px_rgba(0,0,0,0.3)] mb-2 p-2 gap-5 rounded-lg flex-col sm:flex-row">
                <img src={product.Image} alt="cart-product" className="h-[200px] sm:w-[30%] object-contain block m-auto" />
                <div className="sm:w-[70%]">
                    <h2 className="font-bold">{product.Brand}</h2>
                    <p className="line-clamp-3 text-xs text-gray-600 font-['Mulish-Regular']">{product.Description}</p>
                    <h3 className="font-bold text-lg">{product.Price}</h3>
                    <div className="flex gap-5 items-center">
                        <h3 className="font-semibold text-sm">Quantity</h3>
                        <div className="flex gap-2">
                            <button className=" w-5 bg-red-600 text-white font-bold cursor-pointer" onClick={() => { handleClick("-") }}>-</button>
                            <p>{product.Quantity}</p>
                            <button className=" w-5 bg-green-600 text-white font-bold cursor-pointer" onClick={() => { handleClick("+") }}>+</button>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:transition-all transition-all" onClick={removeFromCart}>Delete</button>
                        <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:transition-all transition-all" onClick={() => { createOrderandPay(product.Quantity * parseInt(product.Price.split(',').join("").slice(1,)), product.id, product.Brand + " " + product.Description, setLoading) }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard