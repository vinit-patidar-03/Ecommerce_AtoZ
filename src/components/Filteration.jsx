import { useState } from "react"
import { FaFilterCircleDollar, FaFilterCircleXmark } from "react-icons/fa6"

const Filteration = ({ productsData, setProducts, setPage }) => {
    const [filtering, setFiltering] = useState(false);
    const [filter, setFilter] = useState(false);
    const [filterPayload, setFilterPayload] = useState({ Brand: "", Price: "" })

    const handleClick = () => {
        setFiltering(prev => !prev)
    }

    const handleChange = (e) => {
        setFilterPayload(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const ApplyFilter = () => {
        setProducts(productsData.filter((product) => {
            if (!filterPayload.Price) return product.Brand.toLowerCase() === filterPayload.Brand.toLowerCase();
            else if (!filterPayload.Brand) return product.Price <= "₹" + filterPayload.Price;
            return product.Brand.toLowerCase() === filterPayload.Brand.toLowerCase() && product.Price <= "₹" + filterPayload.Price;
        }))
        setFilter(prev => !prev);
        setPage(1);
    }

    const ClearFilter = () => {
        setFilterPayload({ Brand: "", Price: "" });
        setProducts(productsData);
        setFilter(prev => !prev)
        setPage(1);
    }
    return (
        <>
            <div className="flex h-20 gap-2 items-center">
                {!filtering ? <FaFilterCircleDollar title="Filter" className="text-black text-2xl cursor-pointer" onClick={handleClick} /> :
                    <FaFilterCircleXmark className="text-black text-2xl cursor-pointer" onClick={handleClick} />
                }
                <div className={`flex gap-2 ${filtering ? 'block' : 'hidden'} transition-all`}>
                    <div>
                        <label htmlFor="Brand" className="font-semibold">Brand</label>
                        <input type="text" placeholder="Enter Brand" name="Brand" className="border-2 border-slate-400 rounded-lg ml-2 p-2" value={filterPayload.Brand} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="Price" className="font-semibold">Price</label>
                        <input type="text" placeholder="Enter Price" name="Price" className="border-2 border-slate-400 rounded-lg ml-2 p-2" value={filterPayload.Price} onChange={handleChange} />
                    </div>
                    <button className={`px-3 py-2 bg-green-500 text-white font-bold rounded-lg ${filter ? 'hidden' : 'block'}`} onClick={ApplyFilter} disabled={!filterPayload.Brand && !filterPayload.Price}>Apply</button>
                    <button className={`px-3 py-2 bg-red-500 text-white font-bold rounded-lg ${!filter ? 'hidden' : 'block'}`} onClick={ClearFilter}>Clear</button>
                </div>
            </div>
        </>
    )
}

export default Filteration