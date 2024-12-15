import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa"

const OrderCard = ({ order, setOrders }) => {

    const handleClick = () => {
        let orders = [];
        if (localStorage.getItem("ordersAtoZ")) {
            orders = [...JSON.parse(localStorage.getItem("ordersAtoZ"))];
            orders = orders.filter((item) => item.id !== order.id)
            localStorage.setItem("ordersAtoZ", JSON.stringify(orders));
            setOrders(orders);
        }
        toast.success("Deleted from orders successfully")
    }
    return (
        <>
            <div className="p-2 lg:w-[calc(25%-0.375rem)] md:w-[calc(33.33%-0.333rem)] sm:w-[calc(50%-0.25rem)] w-full  shadow-[0_0px_2px_0px_rgba(0,0,0,0.5)] rounded-lg">
                <img src={order.Image} alt="order-img" className="h-[200px] block m-auto" />
                <div>
                    <h3 className="font-bold">{order.Brand}</h3>
                    <p className=" line-clamp-3 text-xs text-gray-600 font-['Mulish-Regular']">{order.Description}</p>
                    <p className="font-semibold">Quantity: {order.Quantity}</p>
                    <h3 className="font-bold text-lg">Amount Paid: {order.Price[0] + order.Quantity * parseInt(order.Price.split(',').join("").slice(1,))}</h3>
                    <div className=" text-green-500 flex gap-2 items-center">
                        <FaCheckCircle />
                        <p> Delievered</p>
                    </div>
                </div>
                <button className="px-5 py-2 mt-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:transition-all transition-all" onClick={handleClick}>Delete</button>
            </div>
        </>
    )
}

export default OrderCard