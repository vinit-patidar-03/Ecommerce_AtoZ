import { useEffect } from "react";
import Products from "../components/Products"


const Laptops = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"laptops"} />
        </>
    )
}

export default Laptops