import { Link } from "react-router-dom";
import WorkerHeader from "../Components/WorkerHeader";
function WorkerDashboard (){
    return <div className="w-full bg-fixed overflow-hidden h-screen bg-lightBlue">
        {/* Worker Header */}
        <WorkerHeader />
        {/* Worker Table  */}
        <div className="w-full ml-[14%]  top-14 absolute  mt-10 max-w-4xl max-auto bg-white rounded-lg shadow-md overflow-hidden">

            <table className=" table-auto font-Nunito w-full text-left text-deepBlue">
                <thead>
                    <tr className="bg-sky-100 border-b text-[20px] font-semibold text-sky-700">
                        <td className="p-4"> No.</td>
                        <td className="p-4"> Start Date </td>
                        <td className="p-4"> End Date </td>
                        <td className="p-4"> Status </td>
                        <td className="p-4"> Manager Comment </td>
                        <td className="p-4"> Action </td>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4"> 01 </td>
                        <td className="p-4"> 12-02-2024 </td>
                        <td className="p-4"> 12-06-2024 </td>
                        <td className="p-4"> <span className="text-red-600 font-semibold bg-green-100 rounded-full px-2 py-1">Rejected</span> </td>
                        <td className="p-4"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4"> 01 </td>
                        <td className="p-4"> 12-02-2024 </td>
                        <td className="p-4"> 12-06-2024 </td>
                        <td className="p-4"> <span className="text-green-600 font-semibold bg-green-100 rounded-full px-2 py-1">Accepted</span> </td>
                        <td className="p-4"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className="p-4"> 01 </td>
                        <td className="p-4"> 12-02-2024 </td>
                        <td className="p-4"> 12-06-2024 </td>
                        <td className="p-4"> <span className="text-[#6226EF] font-semibold bg-green-100 rounded-full px-2 py-1">Pending</span> </td>
                        <td className="p-4"> Lorem ipsum dolor sit amet.  </td> {/* make the world range 5 word +*/}
                        <Link to="/workerViewMore"><td className="p-4 text-[#3498DB]"> <span className="bg-sky-100 text-sky-800 font-semibold rounded-full px-2 py-1">View more</span> </td></Link>
                    </tr>
                </tbody>
                       </table>
            </div>
        </div>
}
export default WorkerDashboard