const Links = () => {
    return (
        <>
            <div className="sm:flex justify-center px-20 m-5">
                <button className="border rounded-lg p-2 mx-10 bg-black text-white font-bold hover:bg-gray-600"><a href="">Online Link</a></button>
                <button className="border rounded-lg p-2 mx-10 bg-black text-white font-bold hover:bg-gray-600"><a href="">Offline Link</a></button>
                {/* <button className="border border-gray-800 rounded-lg p-2 mx-10  font-bold hover:bg-black hover:text-white "><a href="">Offline Link</a></button> */}
            </div>
        </>
    )
}
export default Links;