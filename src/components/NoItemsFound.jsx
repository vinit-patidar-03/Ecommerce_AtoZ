const NoItemsFound = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <img src="/images/NoItems.avif" alt="No_items_found" className="w-60 h-60" />
            <h3 className="text-3xl">😔 No Items Found!!!</h3>
        </div>
    )
}

export default NoItemsFound