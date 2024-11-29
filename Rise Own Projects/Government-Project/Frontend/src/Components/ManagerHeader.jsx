import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
// import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";





function ManagerHeader (){
    const [IsUserOpen, setIsUserOpen] = useState(false)
const HandleOpen = () => {
    setIsUserOpen(true)
}
const HandleClose = () => {
    setIsUserOpen(false)
}
    return <div> 
    <div className="w-full max-w-full fixed pl-[12%]    h-[70px] px-[50px] items-center flex justify-between  shadow-md  bg-white rounded-b-[40px]">
        <div className="flex  ">
            <input type="text" placeholder="Search by ID" className="w-[300px] pl-8 border-[1px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-full px-2" />
            <IoIosSearch className="text-[22px] text-deepBlue ml-2 absolute mt-[10px]" />
        </div>
        <div className="flex items-center text-skyBlue gap-3  ">
            {/* <Link to="/workerForm"><FaSquarePlus className="text-2xl hover:text-deepBlue" /></Link> */}
            <Link to="/managerNotification"><IoIosNotifications className="text-3xl hover:text-deepBlue" /></Link>
            <FaUser style={{display: IsUserOpen ? "none" : ""}} onClick={HandleOpen} className="text-2xl  hover:text-deepBlue" />
            <FaUser style={{display: IsUserOpen ? "block" : "none"}} onClick={HandleClose} className="text-2xl hidden  hover:text-deepBlue" />
        </div>
    </div>
    <div style={{display: IsUserOpen ? "block" : "none"}} className="w-[230px]  right-4   shadow fixed top-20 z-10 h-[250px] bg-white rounded-[20px]">
        <div className="w-full h-[50px]  rounded-t-[10px] bg-skyBlue pt-5 rounded-b-[20px]">
            <div className="w-[50px] ml-[38%]   py-[10px] px-[5px] h-[50px] shadow rounded-full bg-white">
                <FaUser className="w-[30px] h-[30px] ml-1 text-deepBlue" />
            </div>
            <div className="px-[20px] mt-3">
                <h1 className="text-[18px] text-center font-semibold font-Roboto"> Abuukar Ibraahim Mohamed</h1>
                <h1 className="text-center text-[18px]">Admin ID: SOM252</h1>
                <h1 className="text-center text-[18px]"> Title: Software Engineer</h1>
            <button className="w-[100px] flex items-center gap-2 justify-center ml-10 px-1  h-[35px] mt-3 text-white bg-deepBlue rounded-[10px]"> Log Out <RiShutDownLine className="w-[20px] h-[20px] " /></button>
            </div>
        </div>
    </div>
</div>
}
export default ManagerHeader
{/* <FaUserPlus /> */}
