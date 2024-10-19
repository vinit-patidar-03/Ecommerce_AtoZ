import { useEffect } from "react";
import Products from "../components/Products"


const WomensFootwear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"femalefootwear"} />
        </>
    )
}

export default WomensFootwear