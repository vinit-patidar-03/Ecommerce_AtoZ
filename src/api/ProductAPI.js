import axios from "axios";
import toast from "react-hot-toast";

export const fetchProducts = async (category, setProductsData, setProducts, setIsError) => {
    try {
        const { data } = await axios.get(`https://ecommerceflaskapi.vercel.app/api/v1/${category}`);
        setProducts(data);
        setProductsData(data);
    } catch (error) {
        setIsError(true);
        toast.error("Some error occured");
    }
}