import { Link } from "react-router-dom"
import { FaDeleteLeft } from "react-icons/fa6";
// import { AiFillDelete } from "react-icons/ai";
import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
function RejectedRequests (){
    return <div className="w-full h-screen bg-lightBlue">
        <ManagerHeader />
        <ManagerSidebar />
        <h1 className=" text-center text-3xl font-semibold text-deepBlue pt-[8%]"> Pending Requests </h1>
        <Link to="/managerDashboard"><FaDeleteLeft className="text-[40px] text-skyBlue hover:text-deepBlue right-44 mt-[-33px] absolute " /></Link>

        <div className="w-full  ml-[15%] top-58 absolute  mt-10 max-w-4xl  bg-white rounded-lg shadow-md ">

<table className=" table-auto  font-Nunito w-full text-left text-deepBlue">
    <thead>
        <tr className="bg-sky-100 border-b  text-[20px] font-semibold text-sky-700">
            <td className="p-4 text-center"> No.</td>
            <td className="p-4 text-center"> Worker ID </td>
            <td className="p-4 text-center"> Name </td>
            <td className="p-4 text-center"> Status </td>
            <td className="p-4 text-center"> Manager Comment </td>
            <td className="p-4 text-center"> Action </td>
        </tr>
    </thead>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    <tbody className="bg-white">
        <tr className="border-b text-center">
            <td className="p-4 text-center"> 01 </td>
            <td className="p-4 text-center"> SOM252 </td>
            <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
            <td className="p-4 text-center"> <span className="text-red-600 font-semibold bg-red-100 rounded-full px-2 py-1">Rejected</span> </td>
            <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
            <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
        </tr>
    </tbody>
    
           </table>
</div>
    </div>
}
export default RejectedRequests