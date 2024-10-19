import { useEffect } from "react";
import Products from "../components/Products"

const MensWear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"menswear"} />
        </>
    )
}

export default MensWear