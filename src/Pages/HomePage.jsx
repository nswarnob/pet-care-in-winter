import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useLoaderData } from "react-router";
import dogImg from "../assets/banner-dogs.png";
import ServiceCard from "../Components/ServiceCard";
import CareTips from "../Components/CareTips";
import MeetOurExpert from "../Components/MeetOurExpert";

const HomePage = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  return (
    <div className="relative w-11/12 mx-auto">
      <div
        className="hero min-h-[600px] overflow-hidden relative "
        style={{
          backgroundImage:
            "url(https://images.prismic.io/positively/d5ef191d-2e39-460b-b92e-23a82198a186_Australian-Shepherd-puppy-in-tunnel-getting-a-treat-shutterstock_1416181847.jpg?auto=compress,format)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitClipPath: "ellipse(130% 90% at 50% 0%)",
          clipPath: "ellipse(130% 90% at 50% 0%)",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content text-center mb-40 md:mb-20 relative z-20">
          <div className="md:max-w-[800px] max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-light text-base-100">
              Largest Private Day Care For Pets
            </h1>
            <hr className="text-base-200 max-w-lg mx-auto" />
            <p className="my-5 text-base-300">
              We will take care of your pet's no worry!
            </p>
            <button className="btn btn-secondary">Book Now</button>
          </div>
        </div>
      </div>

      <img
        src={dogImg}
        alt="puppies"
        className="absolute left-1/2 transform md:translate-x-25 -translate-x-38 md:-translate-y-62 -translate-y-48 z-20 w-[300px] md:w-[400px]"
      />
      {/* Service by json data with swiper */}

      <div className="block md:flex items-center justify-between max-w-[1200px] mx-auto ">
        <div className="max-w-md">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Pet Care Services
          </h1>
          <p className=" text-center">
           <span> At WarmPaws Retreat, we believe every pet deserves personalized
            attention, comfort, and love — just like they receive at home. Our
            comprehensive pet care services are designed to ensure your furry
            companions stay healthy, happy, and stress-free while you’re away.</span>
            <br />
            <span >From luxury boarding cabins with bedding to interactive play
            sessions, we create a fun and safe environment that encourages
            socialization and relaxation. Our dedicated team of animal lovers
            monitors every guest closely, providing gentle care, nutritious
            meals, and plenty of cuddles throughout their stay.</span>
            <br />
            <span>Whether your pet needs overnight care, daytime supervision, or
            special medical attention, our trained staff follows your
            instructions to maintain their usual routines. We also offer
            grooming and wellness add-ons to keep your pet looking and feeling
            their best.</span>
          </p>
        </div>

        <div className="md:w-1/2 relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigationshow={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 2700 }}
            className="rounded-2xl  pb-10"
          >
            {serviceData.map((service) => (
              <SwiperSlide key={service.serviceId}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <CareTips></CareTips>
      </div>
      <div>
        <MeetOurExpert></MeetOurExpert>
      </div>
    </div>
  );
};

export default HomePage;
