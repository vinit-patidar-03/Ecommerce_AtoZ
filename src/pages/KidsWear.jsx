import { useEffect } from "react";
import Products from "../components/Products"

const KidsWear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"kidswear"} />
        </>
    )
}

export default KidsWear