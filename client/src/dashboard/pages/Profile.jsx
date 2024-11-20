import { FaImage } from "react-icons/fa"


const Profile = () => {
    return (
        <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
            <div className="bg-white gap-x-3 p-6 rounded flex justify-center items-center">
            <div>
                <label htmlFor="img" className="w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed">
                    <div className="flex justify-center items-center flex-col gap-y-2">
                        <span className="text-2xl"><FaImage /></span>
                        <span>Select Image</span>

                    </div>
                </label>
                <input type="file" id="img" className="hidden" />

            </div>
                <div className="text-[#404040] flex flex-col gap-y-1 justify-center items-center">
                    <span>Name : Mostakem Hossain</span>
                    <span>Email : mostakemhossain@gmail.com</span>
                    <span>Category: Education</span>

                </div>

            </div>
            <div className="text-[#404040] bg-white px-6 py-4">
                <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                <form >
                    <div className="grid grid-cols-1 gap-y-4 mb-3">

                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="old_password" className="text-sm font-medium text-gray-600">Old Password</label>
                            <input
                                type="password"
                                id="old_password"
                                name="old_password"
                                placeholder="Old password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="new_password" className="text-sm font-medium text-gray-600">New Password</label>
                            <input
                                type="password"
                                id="new_password"
                                name="password"
                                placeholder="New password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200"
                        >
                            update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile