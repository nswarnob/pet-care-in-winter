import React from "react";

const HomePage = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: "url(https://images.prismic.io/positively/d5ef191d-2e39-460b-b92e-23a82198a186_Australian-Shepherd-puppy-in-tunnel-getting-a-treat-shutterstock_1416181847.jpg?auto=compress,format)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="md:max-w-[800px] max-w-md">
            <h1 className="mb-5 text-5xl font-light">Largest Private Day Care For Pets</h1>
            <hr className="text-base-200 max-w-lg mx-auto" />
            <p className="my-5">
             We will take care of your pet's no worry!
            </p>
            <button className="btn btn-secondary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
