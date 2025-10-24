import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ExpertCard from "./ExpertCard";

const MeetOurExpert = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}expert.json`)
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((error) => toast.warning(error.message));
  }, []);

  return (
    <div className="md:max-w-[1200px] mx-auto my-10 bg-primary p-15 rounded-4xl shadow-md text-center h-auto space-y-3">
      <h1 className="text-4xl text-base-100">We Have Best Experts</h1>
      <p className="text-base-300">
        Providing the very best pet care in Toronto with years of experience and
        maximum ratings.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
        {experts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurExpert;
