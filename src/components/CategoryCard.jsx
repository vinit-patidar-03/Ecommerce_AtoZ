import { Link } from "react-router-dom";
import { categoriesThumbnail } from "../constants/categoriesThumbnail";

const CategoryCard = ({ category }) => {
    let imgSrc = categoriesThumbnail(category);
    return (
        <>
            <Link to={`${category}`} className="lg:w-[calc(25%-0.375rem)] md:w-[calc(33.33%-0.333rem)] sm:w-[calc(50%-0.25rem)] w-full shadow-[0_0px_5px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:transition-all hover:bg-slate-100 transition-all ">
                <img src={imgSrc} className="w-[70%] h-[300px] object-contain block m-auto" alt={category} />
                <h3 className="font-bold text-center text-xl">{category[0].toUpperCase() + category.slice(1,)}</h3>
            </Link>
        </>
    )
}

export default CategoryCard