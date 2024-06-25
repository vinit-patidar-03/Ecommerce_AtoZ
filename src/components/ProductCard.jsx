import { Link } from "react-router-dom"
import { createOrderandPay } from "../api/Payment"
import toast from "react-hot-toast"

const ProductCard = ({ product, setLoading }) => {
    const handleClick = (action) => {
        const productDetails = {
            id: Date.now(),
            Brand: product.Brand,
            Description: product.Description,
            Quantity: 1,
            Price: product.Price,
            Image: product.Image
        }
        let cart = []
        if (localStorage.getItem("cartAtoZ")) {
            cart = [...JSON.parse(localStorage.getItem("cartAtoZ"))];
            cart.push(productDetails)
            localStorage.setItem("cartAtoZ", JSON.stringify(cart));
        } else {
            cart.push(productDetails)
            localStorage.setItem("cartAtoZ", JSON.stringify(cart));
        }

        if (action === "cart") {
            toast.success("Added to cart successfully")
        } else {
            createOrderandPay(parseInt(product.Price.split(',').join("").slice(1,)), productDetails.id, product.Brand + " " + product.Description, setLoading)
        }
    }
    return (
        <>
            <div className="lg:w-[calc(25%-0.375rem)] md:w-[calc(33.33%-0.333rem)] sm:w-[calc(50%-0.25rem)] w-full shadow-[0_0px_2px_0px_rgba(0,0,0,0.5)] p-2 pb-16 relative rounded-lg">
                <img src={product.Image} className="w-[50%] h-[200px] object-contain block m-auto" alt="product-img" />
                <div className="my-2">
                    <Link to={`https://www.flipkart.com/search?q=${product.Brand}`} className="font-bold hover:text-blue-600 transition-all hover:transition-all" target="_blank">{product.Brand}</Link>
                    <Link to={`https://www.flipkart.com/search?q=${product.Description}`} className=" line-clamp-2 font-semibold hover:text-blue-500 transition-all hover:transition-all" target="_blank">{product.Description}</Link>
                    <p className="font-bold text-lg">{product.Price}</p>
                </div>
                <div className="flex gap-2 absolute bottom-2 left-2">
                    <button className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 hover:transition-all transition-all" onClick={() => { handleClick("cart") }}>Add to Cart</button>
                    <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:transition-all transition-all" onClick={() => { handleClick("buy") }}>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard