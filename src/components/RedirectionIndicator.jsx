const RedirectionIndicator = () => {
    return (
        <>
            <div className="h-[100vh] w-full flex flex-col items-center justify-center fixed top-0 backdrop-blur-sm">
                <img src="/images/Spinner.gif" alt="loader" className=" w-[50px]" />
                <p className="font-bold text-2xl text-blue-600">Please wait...</p>
                <p className="text-blue-500 font-semibold">We are redirecting you to payments page</p>
            </div>
        </>
    )
}

export default RedirectionIndicator