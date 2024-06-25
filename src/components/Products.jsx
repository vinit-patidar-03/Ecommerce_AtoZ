import { useEffect, useState } from "react"
import { fetchProducts } from "../api/ProductAPI"
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Filteration from "./Filteration";
import OtherProducts from "./OtherProducts";
import Spinner from "./Spinner";
import { FaSkullCrossbones } from "react-icons/fa6";

const Products = ({ category }) => {
    const [productsData, setProductsData] = useState([]);
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);
    const totalPages = products && Math.ceil(products.length / 40);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchProducts(category, setProductsData, setProducts, setIsError);
    }, [category])

    return (
        <>
            <div className="p-2 mt-[3.25rem] ">
                <Filteration productsData={productsData} setProducts={setProducts} setPage={setPage} />
                <OtherProducts category={category} />
                <div className="flex flex-wrap gap-2">
                    {products &&
                        products.slice(page * 40 - 40, page * 40).map((product, index) => {
                            return <ProductCard key={index} product={product} />
                        })
                    }
                </div>
                {products.length !== 0 && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
                {products.length === 0 && !isError && <Spinner />}
                {
                    isError &&
                    <div className="flex flex-col justify-center items-center mt-5 h-[50vh]">
                        <FaSkullCrossbones className=" text-red-600 text-3xl" />
                        <h3 className="text-2xl font-bold">Oops! some error occured</h3>
                        <p className="text-lg text-gray-500 mt-2">Please check your internet connection or try refreshing your page</p>
                    </div>
                }
            </div>
        </>
    )
}

export default Products