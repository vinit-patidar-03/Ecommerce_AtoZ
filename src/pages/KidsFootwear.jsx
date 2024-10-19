import { useEffect } from "react"
import Products from "../components/Products"


const KidsFootwear = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Products category={"kidsfootwear"} />
        </>
    )
}

export default KidsFootwear