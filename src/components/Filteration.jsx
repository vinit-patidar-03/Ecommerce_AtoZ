import { useState } from "react"
import { FaFilterCircleDollar, FaFilterCircleXmark } from "react-icons/fa6"

const Filteration = ({ productsData, setProducts, setPage, setIsNoItem }) => {
    const [filtering, setFiltering] = useState(false);
    const [filter, setFilter] = useState(false);
    const [filterPayload, setFilterPayload] = useState({ Brand: "", Price: "" })

    const handleClick = () => {
        setFiltering(prev => !prev)
    }

    const handleChange = (e) => {
        setFilterPayload(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setFilter(false)
    }

    const removeCommas = (priceString) => {
        return parseFloat(priceString.replace(/,/g, ''));
    }

    const ApplyFilter = () => {
        setProducts(productsData.filter((product) => {
            const productBrand = product.Brand ? product.Brand.toLowerCase() : product.Description.toLowerCase();
            const productPrice = removeCommas(product.Price.slice(1));
            const filterPrice = parseFloat(filterPayload.Price);

            if (!filterPayload.Price) {
                return productBrand.includes(filterPayload.Brand.toLowerCase());
            } else if (!filterPayload.Brand) {
                return productPrice <= filterPrice;
            } else {
                return productBrand === filterPayload.Brand.toLowerCase() && productPrice <= filterPrice;
            }
        }))
        setFilter(prev => !prev);
        setPage(1);
        setTimeout(() => {
            setIsNoItem(true);
        }, [5000])
    }

    const ClearFilter = () => {
        setFilterPayload({ Brand: "", Price: "" });
        setProducts(productsData);
        setFilter(prev => !prev)
        setPage(1);
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:h-20 h-auto gap-2 sm:items-center items-start">
                {!filtering ? <FaFilterCircleDollar title="Filter" className="text-black text-2xl cursor-pointer" onClick={handleClick} /> :
                    <FaFilterCircleXmark className="text-black text-2xl cursor-pointer" onClick={handleClick} />
                }
                <div className={`flex items-center gap-2 ${filtering ? 'block' : 'hidden'} transition-all`}>
                    <div className="flex flex-col sm:items-center sm:flex-row w-[40%] sm:w-auto">
                        <label htmlFor="Brand" className="font-semibold">Brand</label>
                        <input type="text" placeholder="Enter Brand" name="Brand" className="border-2 border-slate-400 rounded-lg sm:ml-2 p-2 w-full" value={filterPayload.Brand} onChange={handleChange} autoComplete="off" />
                    </div>
                    <div className="flex flex-col sm:items-center sm:flex-row w-[40%] sm:w-auto">
                        <label htmlFor="Price" className="font-semibold">Price</label>
                        <input type="text" placeholder="Enter Price" name="Price" className="border-2 border-slate-400 rounded-lg sm:ml-2 p-2 w-full" value={filterPayload.Price} onChange={handleChange} autoComplete="off" />
                    </div>
                    <button className={`px-3 relative top-3 sm:top-0 py-2 bg-green-500 text-white font-bold rounded-lg ${filter ? 'hidden' : 'block'}`} onClick={ApplyFilter} disabled={!filterPayload.Brand && !filterPayload.Price}>Apply</button>
                    <button className={`px-3 relative top-3 sm:top-0 py-2 bg-red-500 text-white font-bold rounded-lg ${!filter ? 'hidden' : 'block'}`} onClick={ClearFilter}>Clear</button>
                </div>
            </div>
        </>
    )
}

export default Filteration
