import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const { pathname } = useLocation();
    return (
        <div className="w-[250px] h-screen fixed left-0 top-0 bg-white p-2">
            <div className="h-[70px] flex items-start justify-center">
                <Link to={"/"}>
                    <h1 className="text-4xl font-bold"><span className="text-red-600">N</span>ews<span className="text-red-600">C</span>rest</h1>
                </Link>
            </div>
            <ul className="px-3 flex flex-col gap-y-1 font-medium">
                <li>
                    <Link to={"/dashboard/admin"} className={`px-3 ${pathname === "/dashboard/admin" ? 'bg-indigo-500 text-white' : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl">
                            <AiFillDashboard />
                        </span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/news"} className={`px-3 ${pathname === "/dashboard/news" ? 'bg-indigo-500 text-white' : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl">
                            <BiNews />
                        </span>
                        <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/writer/add"} className={`px-3 ${pathname === "/dashboard/writer/add" ? 'bg-indigo-500 text-white' : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl">
                            <AiOutlinePlus />
                        </span>
                        <span>Add Writer</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/writers"} className={`px-3 ${pathname === "/dashboard/writers" ? 'bg-indigo-500 text-white' : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl">
                            <FiUsers />
                        </span>
                        <span>Writers</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/profile"} className={`px-3 ${pathname === "/dashboard/profile" ? 'bg-indigo-500 text-white' : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl">
                            <ImProfile />
                        </span>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar