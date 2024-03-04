import Instruction from "./Instruction";
import Links from "./Links";
import ReqDocList from "./ReqDocList";

const DocPage = () =>{
    return(
        <>
            <h1 className="font-bold text-center fa-2xl mt-5">Title</h1>
            <Instruction />
            {/* Instruction */}
            {/* Required docs list */}
            <ReqDocList />
            {/* buttons */}
            <Links />
        </>
    )
}
export default DocPage;