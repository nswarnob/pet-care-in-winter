import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    image: user?.photoURL || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUser({ displayName: formData.name, photoURL: formData.image })
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((err) => {
        toast.error("Failed to update profile.", err);
      });
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        {!isEditing ? (
          <>
            <div className="flex justify-center mb-6">
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200 shadow-sm"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.displayName}
            </h2>
            <p className="text-gray-500">{user?.email}</p>

            <button
              className="mt-6 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition-all"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-left mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-left mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary"
              >
                Update Profile
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
