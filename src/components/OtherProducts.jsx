import { Link } from "react-router-dom"
import categories from "../constants/categories"

const OtherProducts = ({ category }) => {
    return (
        <>
            <div className="py-2">
                <h2 className="font-semibold">Other products you may be looking for:</h2>
                <div className="flex flex-wrap gap-2">
                    {
                        categories.map((elem, index) => {
                            if (elem === category) return null;
                            return <Link to={"/products/" + elem} key={index} className=" text-blue-700 font-bold">{elem[0].toUpperCase() + elem.slice(1,)}</Link>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default OtherProducts