const Card = () => {
    return (
        <>
        <div className="w-full sm:w-72 p-3 bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex align-center justify-center">
                {/* <h2><i className="fa-solid fa-id-card fa-2xl"></i></h2> */}
                    <img src="/Photos/gredientImage.jpg" className="shadow-md rounded-md w-100 h-2/3" alt="CardImage" />
                </div>
                <h2 className="font-bold mt-5 text-center  text-xs sm:text-sm  md:text-lg"><a href="google.com" target="_blanke">Doc Name</a></h2>
            </div>
        </>
    )
}

export default Card;