import { FaUserPlus } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ManagerSidebar (){
    return <div className="w-[11%] h-[350px] rounded-br-full shadow-md bg-white fixed top-0">
        <Link to="/addAdmin">
            <div className="flex group justify-between hover:text-white  hover:bg-skyBlue hover:px-2 hover:py-2 hover:rounded-r-full items-center mt-28 px-[10px]">
                <FaUserTie className="text-[21px] text-sky-900 group-hover:text-white" />
                <h1 className="text-[17px] font-semibold text-sky-900 group-hover:text-white"> Add Admin </h1>
            </div>
        </Link>
        <Link to="/addWorker">
        <div className="flex group justify-between hover:text-white  hover:bg-skyBlue hover:px-2 hover:py-2 hover:rounded-r-full items-center mt-10 px-[10px]">
           <FaUserPlus className="text-[21px] text-sky-900 group-hover:text-white" />
            <h1 className="text-[17px] font-semibold text-sky-900 group-hover:text-white"> Add Worker </h1>
        </div>
        </Link>
    </div>
}
export default ManagerSidebar