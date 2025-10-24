import React from "react";
import ladyDogImg from "../assets/lady-and-dog-img.jpg";
import { Link } from "react-router";
const PlayAllDay = () => {
  return (
    <div className="w-100 md:w-full text-center md:text-start md:flex gap-10 items-center justify-between md:max-w-[1200px] mt-20 mx-auto">
      <div className="mb-10 md:mb-0">
        <img src={ladyDogImg} className="w-100 h-full" alt="ladyDogImg" />
      </div>
      <div className="w-100 md:w-1/2 space-y-6">
        <h1 className="text-4xl text-accent">Play All Day</h1>
        <p className="text-gray-600 ">
          Dogs can romp and play the day away both indoors and outdoors in our
          10,000 square foot facility. Dog kennel guests play all day with our
          dog daycare guests and you can see all their new friends, adventures,
          and fun times on our Facebook page and Instagram feed! Let your dog
          experience the luxury of a dog hotel right here in Toronto.{" "}
        </p>
        <Link to={"/book"}>
          <button className="bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300">
            Book Today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlayAllDay;
