import { useEffect } from "react";
import Products from "../components/Products"


const Watches = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"watches"} />
        </>
    )
}

export default Watches