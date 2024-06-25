import CategoryCard from "../components/CategoryCard"
import categories from "../constants/categories"

const Home = () => {
    return (
        <>
            <div className="flex flex-wrap mt-[3.25rem] p-2 gap-2">
                {
                    categories.map((category, index) => {
                        return <CategoryCard key={index} category={category} />
                    })
                }
            </div>
        </>
    )
}

export default Home