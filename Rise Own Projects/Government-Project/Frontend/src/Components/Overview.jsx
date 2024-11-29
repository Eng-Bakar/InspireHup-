// import { HiUsers } from "react-icons/hi";

function OverView ({icon: Icon, IconColor, IconBgColor,Users, Count}){
    return <div>
            <div className="w-[200px] h-[125px] px-[8px] py-3 shadow-md bg-white rounded-[20px]">
                <h3 className="text-[14px] font-semibold font-Nunito text-slate-400"> {Users}</h3>
                <h1 className="text-[55px] text-center font-Nunito font-bold"> {Count} </h1>
                <div className={`text-[27px] px-[8px] py-[9px] w-[45px] h-[45px] mt-[-110px] ml-[140px]  rounded-[15px] ${IconBgColor}`}>
                    <Icon className={` text[20px]  ${IconColor}`} />
                </div>
            </div>
    </div>
}
export default OverView
// HiUsers