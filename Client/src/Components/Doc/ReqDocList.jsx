const ReqDocList = () => {
    return (
        <>
            <div className="border-gray-50 shadow-md mt-10 p-5">
                <p className="text-2xl font-bold ">Required Documnet List</p>
                {/* <ul className="text-gray-600 p-5">
                <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>Item1</li>
                    <li><i className="fa-solid fa-check-square" />Item 1 </li>
                    <li>Item 2 </li>
                    <li>Item 3 </li>
                    <li>Item 4 </li>
                </ul> */}
                <ol className="fa-ul mt-5">
                    <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>List icons can</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>List icons can</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>List icons can</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>List icons can</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>List icons can</li>
                </ol>
            </div>
        </>
    )
}
export default ReqDocList;