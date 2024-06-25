import { useCallback, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom"

const Success = () => {
    const searchQuery = useSearchParams();
    const referenceId = searchQuery[0].get('reference');
    const productId = searchQuery[0].get('id');

    const removeOrderedItems = useCallback(() => {
        let cart = [];
        let orderedItem;
        let orderedItems = [];

        if (localStorage.getItem("cartAtoZ")) {
            cart = [...JSON.parse(localStorage.getItem("cartAtoZ"))];
            orderedItem = cart.filter((item) => {
                return item.id === parseInt(productId)
            })

            cart = cart.filter((item) => {
                return item.id !== parseInt(productId)
            })
            localStorage.setItem("cartAtoZ", JSON.stringify(cart));
        }

        if (localStorage.getItem("ordersAtoZ")) {
            orderedItems = [...JSON.parse(localStorage.getItem("ordersAtoZ")), ...orderedItem];
        } else {
            orderedItems = [...orderedItem]
        }
        localStorage.setItem("ordersAtoZ", JSON.stringify(orderedItems));
    }, [productId])

    useEffect(() => {
        removeOrderedItems();
    }, [removeOrderedItems])

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <FaCircleCheck className=" text-green-500 text-2xl" />
                <h3 className=" font-bold text-xl">Payment Successful</h3>
                <p className=" font-semibold">reference id: {referenceId}</p>
                <Link to="/" className="px-5 py-1 mt-2 rounded-lg bg-blue-600 text-white">continue shopping</Link>
            </div>
        </>
    )
}

export default Success