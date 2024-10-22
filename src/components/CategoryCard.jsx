import { Link } from "react-router-dom";
import { categoriesThumbnail } from "../constants/categoriesThumbnail";

const CategoryCard = ({ category }) => {
    let imgSrc = categoriesThumbnail(category);
    return (
        <>
            <Link to={`/products/${category}`} className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] shadow-[0_0px_5px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:transition-all hover:bg-slate-100 transition-all ">
                <img src={imgSrc} className="w-full h-full object-contain block m-auto" alt={category} />
            </Link>
        </>
    )
}

export default CategoryCard