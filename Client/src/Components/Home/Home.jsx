import Card from "../UI/Card";

const Home = ()=>{
    return(
        <>
        {/** flex sm:flex-wrap md:flex-wrap*/}
        <main className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 "> 
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </main>
        </>
    )
}
export default Home;