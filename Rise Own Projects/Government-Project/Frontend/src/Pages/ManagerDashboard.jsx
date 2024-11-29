import ManagerHeader from "../Components/ManagerHeader"
import ManagerSidebar from "../Components/ManagerSidebar"
import OverView from "../Components/Overview"
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import { ImSpinner3 } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";




function ManagerDashboard (){
    return <div className="w-full h-screen  bg-lightBlue">
        <ManagerHeader />
        <ManagerSidebar />
        <div className="ml-[12%] w-full pt-24 h-screen">
            <h1 className="text-2xl font-Nunito font-semibold "> Dashboard Overview </h1>
            <div className="mt-6 flex gap-5 ml-1 shado ">
                <Link to="/totalAdmins"><OverView icon={HiUsers} IconColor="text-sky-800" IconBgColor="bg-sky-100" Users="Total Admins" Count="20" /></Link>
                <Link to="/totalWorkers"><OverView icon={FaUsers} IconColor="text-[#FEC53D]" IconBgColor="bg-yellow-100" Users="Total Workers" Count="20" /></Link>
                <Link to="/pendingRequests"><OverView icon={ImSpinner3} IconColor="text-[#FF0000]" IconBgColor="bg-orange-100" Users="Pending Requests" Count="20" /></Link>
                <Link to="/acceptedRequests"><OverView icon={FaCheckDouble} IconColor="text-[#00B69B]" IconBgColor="bg-green-100" Users="Accepted Requests" Count="20" /></Link>
                <Link to="/rejectedRequests"><OverView icon={FaUserSlash} IconColor="text-red-800" IconBgColor="bg-red-100" Users="Rejected Requests" Count="20" /></Link>
            </div>
            <div className="w-full  ml-[6%] top-58 absolute  mt-10 max-w-4xl  bg-white rounded-lg shadow-md ">

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
                    <tr className="border-b">
                        <td className="p-4 text-center"> 02 </td>
                        <td className="p-4 text-center"> SOM243 </td>
                        <td className="p-4 text-center"> Mohamed Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-green-600 font-semibold bg-green-100 rounded-full px-2 py-1">Accepted</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-violet-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4 text-center"> 03 </td>
                        <td className="p-4 text-center"> SOM253 </td>
                        <td className="p-4 text-center"> Ahlam Abdikarin Abdi </td>
                        <td className="p-4 text-center"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4 text-center"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-center text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                       </table>
            </div>
        </div>
        </div>
    // </div>
}
export default ManagerDashboard