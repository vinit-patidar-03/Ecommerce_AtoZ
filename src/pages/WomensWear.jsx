import { useEffect } from "react";
import Products from "../components/Products"

const WomensWear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"womenswear"} />
        </>
    )
}

export default WomensWear