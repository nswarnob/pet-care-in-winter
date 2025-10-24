import React, { useState } from "react";
import { toast } from "react-toastify";
import MeetOurExpert from "../Components/MeetOurExpert";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    serviceName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.serviceName) {
      toast.warning("Please fill out all fields before booking!");
      return;
    }

    toast.success("🎉 Booking successful! We’ll contact you soon.");
    setFormData({ name: "", serviceName: "", email: "" });
  };

  return (
    <div className="w-100 mx-auto mt-30 ">
      <form
        onSubmit={handleSubmit}
        className="bg-green-50 rounded-xl p-6 shadow-inner"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Book Your Service
        </h3>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input input-bordered w-full border border-green-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="serviceName"
            placeholder="Service name"
            value={formData.serviceName}
            onChange={(e) =>
              setFormData({ ...formData, serviceName: e.target.value })
            }
            className="input input-bordered w-full border border-green-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input input-bordered w-full border border-primary rounded-lg py-2 px-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="bg-secondary hover:bg-primary text-white font-semibold py-2 rounded-full transition-transform transform hover:scale-105 duration-300"
          >
            Book Now
          </button>
        </div>
      </form>
      <MeetOurExpert></MeetOurExpert>
    </div>
  );
};

export default Book;
