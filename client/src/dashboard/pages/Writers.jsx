import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Writers = () => {
    return (
        <div className=" mx-auto my-8  rounded-lg  overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-purple-600">
                <h2 className="text-2xl font-semibold text-white">Add Writers</h2>
                <Link
                    to="/dashboard/writer/add"
                    className="px-5 py-2 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100 transition duration-200 shadow-sm"
                >
                    Writers
                </Link>
            </div>
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">NO</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5, 6].map((_, i) => (
                            <tr key={i} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-800">{i + 1}</td>
                                <td className="px-6 py-4 truncate max-w-[150px] text-gray-800">Mostakem</td>
                                <td className="px-6 py-4 text-gray-700">Sports</td>
                                <td className="px-6 py-4 text-gray-700">Writer</td>
                                <td className="px-6 py-4">
                                    <img
                                        className="h-10 w-10 rounded-full object-cover shadow-md border"
                                        src="https://picsum.photos/40"
                                        alt="news-thumbnail"
                                    />
                                </td>
                                <td className="px-6 py-4 text-gray-700">mostakememon123@gmail.com</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Link to="#" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200 shadow-md">
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
    );
};

export default Writers;
