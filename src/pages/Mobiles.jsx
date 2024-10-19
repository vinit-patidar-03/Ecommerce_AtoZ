import { useEffect } from "react";
import Products from "../components/Products"


const Mobiles = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"mobiles"} />
        </>
    )
}

export default Mobiles