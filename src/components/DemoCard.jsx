import { Link } from "react-router-dom";

const DemoCard = ({ products }) => {
    return (
        <>
            <div className="my-5">
                <h2 className="font-bold text-md mb-2 mx-2">{products?.category.toUpperCase()}</h2>
                <div className="flex gap-2 overflow-x-auto scrollbar-hide p-2">
                    <div className="flex gap-2">
                        {
                            products?.data.slice(0, 11).map((product, index) => {
                                return <Link to={`https://www.flipkart.com/search?q=${product.Description}`} target="_blank" key={index} className="w-[200px] h-[200px] shadow-[0_0px_5px_rgba(0,0,0,0.3)] hover:bg-gray-200 hover:transition-all transition-all">
                                    <img src={product?.Image} alt="product logo" className="w-full h-full object-contain mx-auto" />
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default DemoCard;
