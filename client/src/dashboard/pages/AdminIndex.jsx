import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminIndex = () => {
    return (
        <div className="mt-2 p-4 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="w-full p-8 flex flex-col items-center rounded-lg gap-y-2 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white transition transform hover:scale-105">
                    <span className="text-3xl font-extrabold">50</span>
                    <span className="text-md font-medium">Total News</span>
                </div>
                <div className="w-full p-8 flex flex-col items-center rounded-lg gap-y-2 shadow-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-white transition transform hover:scale-105">
                    <span className="text-3xl font-extrabold">30</span>
                    <span className="text-md font-medium">Pending News</span>
                </div>
                <div className="w-full p-8 flex flex-col items-center rounded-lg gap-y-2 shadow-lg bg-gradient-to-br from-emerald-400 to-green-500 text-white transition transform hover:scale-105">
                    <span className="text-3xl font-extrabold">22</span>
                    <span className="text-md font-medium">Active News</span>
                </div>
                <div className="w-full p-8 flex flex-col items-center rounded-lg gap-y-2 shadow-lg bg-gradient-to-br from-red-400 to-pink-500 text-white transition transform hover:scale-105">
                    <span className="text-3xl font-extrabold">0</span>
                    <span className="text-md font-medium">Deactive News</span>
                </div>
                <div className="w-full p-8 flex flex-col items-center rounded-lg gap-y-2 shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-white transition transform hover:scale-105">
                    <span className="text-3xl font-extrabold">7</span>
                    <span className="text-md font-medium">Writers</span>
                </div>
            </div>

            <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-700">Recent News</h2>
                    <Link to="/news" className="text-blue-500 hover:underline">View All</Link>
                </div>

                <div className="relative overflow-x-auto mt-4">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">NO</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Image</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Description</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5, 6].map((n, i) => (
                                <tr key={i} className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 font-medium">1</td>
                                    <td className="px-6 py-4 truncate max-w-[150px]">Bangladesh Gets its longest grass...</td>
                                    <td className="px-6 py-4">
                                        <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/40" alt="news-thumbnail" />
                                    </td>
                                    <td className="px-6 py-4">Sports</td>
                                    <td className="px-6 py-4 truncate max-w-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
                                    <td className="px-6 py-4">2022-01-01</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Link to="#" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                                                <FaEye size={16} />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminIndex;
