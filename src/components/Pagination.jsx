import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"

const Pagination = ({ page, setPage, totalPages }) => {

    const handleClick = (action) => {
        if (action === "+" && page + 1 <= totalPages) {
            setPage(prev => prev + 1);
            moveTotop();
        } else if (action === "-" && page - 1 !== 0) {
            setPage(prev => prev - 1)
            moveTotop();
        }
    }

    const moveTotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <div className="flex justify-evenly mt-2">
                <FaCircleArrowLeft className="text-3xl cursor-pointer" onClick={() => { handleClick("-") }} />
                <p className="font-bold">{page}/{totalPages}</p>
                <FaCircleArrowRight className="text-3xl cursor-pointer" onClick={() => { handleClick("+") }} />
            </div>
        </>
    )
}

export default Pagination