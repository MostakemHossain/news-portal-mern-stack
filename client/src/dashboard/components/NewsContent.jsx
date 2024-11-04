
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
const NewsContent = () => {
    return (
        <div>
            <div className="px-4 py-3 flex gap-x-3">
                <select name="" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" id="">
                    <option value="">--Select type--</option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select>
                <input placeholder="search News" type="text" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" />
            </div>
            <div className="relative overflow-x-auto p-4">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-7 py-3">NO</th>
                            <th className="px-7 py-3">Title</th>
                            <th className="px-7 py-3">Image</th>
                            <th className="px-7 py-3">Category</th>
                            <th className="px-7 py-3">Description</th>
                            <th className="px-7 py-3">Date</th>
                            <th className="px-7 py-3">Status</th>
                            <th className="px-7 py-3">Active</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Bangladesh Gets its longest grass...</td>
                            <td className="px-6 py-4">
                                <img className="h-[40px] w-[40px]" src="https://picsum.photos/200/300" alt="" />

                            </td>
                            <td className="px-6 py-4">Sports</td>
                            <td className="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing</td>
                            <td className="px-6 py-4">2022-01-01</td>
                            <td className="px-6 py-4">
                                <span className="bg-green-500 text-white py-1 px-2 rounded-md">active</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-start items-center gap-x-4 text-white">
                                    <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:bg-green-600">
                                        <FaEye />
                                    </Link>
                                    <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:bg-yellow-600">
                                        <FaEdit />
                                    </Link>
                                    <Link className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:bg-red-600">
                                        <FaTrash />
                                    </Link>


                                </div>
                            </td>

                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default NewsContent