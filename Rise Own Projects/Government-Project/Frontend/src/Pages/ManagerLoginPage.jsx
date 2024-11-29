import { Link } from "react-router-dom"
function ManagerLoginPage (){
    return <div className="w-full h-screen flex items-center justify-center bg-lightGray">
        <div className="bg-white pt-[10px] px-2 w-[300px] h-[235px] rounded-[20px]">
            <h1 className="text-center font-semibold text-[25px] mb-2 font-Roboto"> Login </h1>
            <input className="w-[280px] px-1 h-[35px] outline-none rounded-[10px] border-2 border-deepBlue " type="text" placeholder="Enter your ID" />
            <input className="w-[280px] px-1 mt-5 h-[35px] outline-none rounded-[10px] border-2 border-deepBlue " type="password" placeholder="Enter your password" />
           <Link to="/managerDashboard"> <button className="w-[280px] h-[35px] mt-5 text-white hover:bg-skyBlue bg-deepBlue rounded-[10px]"> Submit </button></Link>
        </div>
    </div>
}
export default ManagerLoginPage