import { Link } from "react-router-dom";
import image from "../../assets/picture.jpeg";
import SideBar from "../Layouts/SideBar.jsx";
import { GoPencil } from "react-icons/go";

const ProfileSettings = () => {
  return (
    <div className="lg:flex bg-indigo-600 min-h-screen p-4 font-bodyFont">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-indigo-800">
            Account Settings
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Update your personal information below
          </p>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6 relative">
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-300 object-cover"
          />
          <Link to="/edit-picture">
            <GoPencil className="absolute bottom-0 right-[42%] bg-white text-indigo-600 rounded-full p-1 w-8 h-8 hover:text-indigo-800" />
          </Link>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "First Name", placeholder: "John" },
            { label: "Last Name", placeholder: "Doe" },
            { label: "Password", placeholder: "********", type: "password" },
          ].map(({ label, placeholder, type = "text" }, index) => (
            <div key={index} className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type={type}
                  placeholder={placeholder}
                  className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <GoPencil className="text-indigo-500 hover:text-indigo-800 cursor-pointer" />
              </div>
            </div>
          ))}

          <div className="md:col-span-2 text-right pt-4">
            <button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-900 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
