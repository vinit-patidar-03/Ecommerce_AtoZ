import { useEffect, useState } from "react"
import OrderCard from "../components/OrderCard";
import { Link } from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = () => {
        if (localStorage.getItem("ordersAtoZ")) {
            setOrders([...JSON.parse(localStorage.getItem("ordersAtoZ"))]);
        }
    }
    return (
        <>
            <div className="mt-[3.25rem] p-2 flex gap-2 flex-wrap">
                {
                    orders &&
                    orders.map((order, index) => {
                        return <OrderCard order={order} key={index} setOrders={setOrders} />
                    })
                }
                {orders.length === 0 &&
                    <div className="h-[calc(100vh-4.25rem)] flex justify-center items-center w-full">
                        <div className="flex flex-col justify-center items-center w-[70%] sm:w-[40%]">
                            <h2 className="text-2xl font-bold">Your orders list is empty</h2>
                            <p className="text-gray-500 text-center">Looks like you have not purchased anything or you have deleted entry. Go ahead and explore top categories.</p>
                            <Link to="/" className="px-5 py-1 mt-5 rounded-lg bg-blue-600 text-white">continue shopping</Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Orders