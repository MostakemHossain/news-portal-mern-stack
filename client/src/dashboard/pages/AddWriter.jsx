import { Link } from "react-router-dom";

const AddWriter = () => {
    return (
        <div className="rounded-lg mx-auto my-8">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-700">Add Writer</h2>
                <Link
                    to="/dashboard/writers"
                    className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200"
                >
                    Writers
                </Link>
            </div>
            <div className="px-6 py-8">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter writer's name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="category" className="text-sm font-medium text-gray-600">Category</label>
                            <select
                                id="category"
                                name="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="">-- Select Category --</option>
                                <option value="education">Education</option>
                                <option value="travel">Travel</option>
                                <option value="politics">Politics</option>
                                <option value="health">Health</option>
                                <option value="international">International</option>
                                <option value="technology">Technology</option>
                                <option value="sports">Sports</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Add Writer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWriter;
