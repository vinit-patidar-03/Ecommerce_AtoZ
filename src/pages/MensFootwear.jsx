import { useEffect } from "react";
import Products from "../components/Products"


const MensFootwear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"malefootwear"} />
        </>
    )
}

export default MensFootwear