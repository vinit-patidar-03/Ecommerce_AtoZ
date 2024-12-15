import { useEffect, useState } from "react"
import { fetchProducts } from "../api/ProductAPI"
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Filteration from "../components/Filteration";
import OtherProducts from "../components/OtherProducts";
import { FaSkullCrossbones } from "react-icons/fa6";
import RedirectionIndicator from "../components/RedirectionIndicator";
import { useParams } from "react-router-dom";
import NoItemsFound from "../components/NoItemsFound";
import Spinner from "../components/Spinner";

const Products = () => {
    const { category } = useParams();
    const [productsData, setProductsData] = useState([]);
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isNoItem, setIsNoItem] = useState(false);
    const totalPages = products && Math.ceil(products.length / 40);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchProducts(category, setProductsData, setProducts, setIsError);
    }, [category])

    return (
        <>
            <div className="p-2 mt-[3.25rem] ">
                <Filteration productsData={productsData} setProducts={setProducts} setIsNoItem={setIsNoItem} setPage={setPage} />
                <OtherProducts category={category} />
                <div className="flex flex-wrap gap-2">
                    {products &&
                        products.slice(page * 40 - 40, page * 40).map((product, index) => {
                            return <ProductCard key={index} product={product} setLoading={setLoading} />
                        })
                    }
                </div>
                {products.length !== 0 && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
                {
                    isError &&
                    <div className="flex flex-col justify-center items-center mt-5 h-[50vh]">
                        <FaSkullCrossbones className=" text-red-600 text-3xl" />
                        <h3 className="text-2xl font-bold">Oops! some error occured</h3>
                        <p className="text-lg text-gray-500 mt-2">Please check your internet connection or try refreshing your page</p>
                    </div>
                }
                {products.length === 0 && !isError && !isNoItem && <Spinner />}
                {products.length === 0 && !isError && isNoItem && <NoItemsFound />}
            </div>
            {loading && <RedirectionIndicator />}
        </>
    )
}

export default Products