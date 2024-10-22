import { useEffect, useState } from "react"
import CategoryCard from "../components/CategoryCard"
import Slider from "../components/Slider"
import categories from "../constants/categories"
import axios from "axios"
import DemoCard from "../components/DemoCard"
import Spinner from "../components/Spinner"

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        categories.map((elem) => fetchData(elem))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    const fetchData = async (category) => {
        try {
            const { data } = await axios.get(`https://ecommerceflaskapi.vercel.app/api/v1/${category}`);
            setProducts(prev => [...prev, { category, data }]);
        } catch (error) {
            console.log("error occured!!!");
        }
    }

    return (
        <>
            <div className="mt-[3.25rem]">
                <Slider />
            </div>
            <h3 className="font-bold m-2">Categories</h3>
            <div className="flex fle-col p-2 gap-2 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2">
                    {
                        categories.map((category, index) => {
                            return <CategoryCard key={index} category={category} />
                        })
                    }
                </div>
            </div>
            <div className="my-3">
                {products &&
                    products?.map((elem, index) => {
                        return <DemoCard key={index} products={elem} />
                    })
                }
            </div>
            {products.length == 0 && <Spinner />}
        </>
    )
}

export default Home