import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import { Link } from "react-router-dom"
import { FaDeleteLeft } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";



function TotalWorkers (){
    return <div>
        <ManagerHeader />
        <ManagerSidebar />
        <h1 className=" text-center text-3xl font-semibold text-deepBlue pt-[8%]"> All Workers </h1>
        <Link to="/managerDashboard"><FaDeleteLeft className="text-[40px] text-skyBlue hover:text-deepBlue right-20 mt-[-33px] absolute " /></Link>

        <div className="w-full  ml-[15%] top-58 absolute  mt-10 max-w-5xl  bg-white rounded-lg shadow-md ">

            <table className=" table-auto  font-Nunito w-full text-left text-deepBlue">
                <thead>
                    <tr className="bg-sky-100 border-b  text-[20px] font-semibold text-sky-700">
                        <td className="p-4 text-center"> No.</td>
                        <td className="p-4 text-center"> Admin ID </td>
                        <td className="p-4 text-center"> Name </td>
                        <td className="p-4 text-center"> Title </td>
                        <td className="p-4 text-center"> Phone numbers </td>
                        <td className="p-4 text-center"> Email </td>
                        <td className="p-4 text-center"> Action </td>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="border-b text-center">
                        <td className="p-4 text-center"> 01 </td>
                        <td className="p-4 text-center"> SOM252 </td>
                        <td className="p-4 text-center"> Abukar Ibrahim Mohamed </td>
                        <td className="p-4 text-center"> Bodyguard </td>
                        <td className="p-4 text-center"> +252617216218  </td> {/* make the world range 5 word +*/}
                        <td className="p-4 text-center"> bakaryare@gmail.com  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-skyBlue hover:text-deepBlue text-3xl"> <AiFillDelete/> </td></Link>
                    </tr>
                </tbody>
                
                       </table>
            </div>
    </div>
}
export default TotalWorkers