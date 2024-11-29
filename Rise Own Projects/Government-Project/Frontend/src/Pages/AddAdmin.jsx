import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";
function AddAdmin (){
    return <div className="bg-lightBlue w-full h-screen py-5">
        <div className="w-[350px] ml-[35%] mt-6  shadow-lg  h-[500px] rounded-[20px] bg-white ">
            <form className="pt-4 ">
                <div className="flex ">
                    <Link to="/workerDashboard"><FaBackward className="absolute text-[25px] mt-2 text-skyBlue hover:text-deepBlue ml-[310px]" /></Link>
                    <h1 className=" text-center text-skyBlue ml-[110px] font-semibold font-Roboto text-[25px]"> Add Admin </h1>
                </div>
                <div className="px-6 mt-3">
                    <label className="text-deepBlue font-semibold">Name</label>
                    <input type="text" placeholder="Enter name" className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue font-semibold ml-1">ID</label>
                            <label className="text-deepBlue font-semibold mr-[110px]">Title</label>
                        </div>
                        <input type="text" placeholder="Enter ID" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input type="text" placeholder="Enter Title" className="w-[140px] h-[40px] mb-1 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 " />
                    </div>
                    <label className="text-deepBlue  font-semibold">Email</label>
                    <input type="email" placeholder="Enter email" className="w-[300px] mb-1 h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  font-semibold">Phone Number</label>
                    <input type="tell" placeholder="Enter phone number" className="w-[300px] h-[40px] mb-1 text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <label className="text-deepBlue  font-semibold">Password</label>
                    <input type="password" placeholder="Enter password" className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <button className="w-[300px] h-[40px] text-white m bg-deepBlue hover:bg-skyBlue rounded-[10px] mt-5" placeholder="Enter Permission Reason"> Submit</button>
                </div>

            </form>
        </div>
    </div>
}
export default AddAdmin