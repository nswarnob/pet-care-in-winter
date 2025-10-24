import React from "react";
import { useLoaderData } from "react-router";
import ServiceDetails from "../Components/ServiceDetails";

const ServicesPage = () => {
  const serviceData = useLoaderData();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center font-bold text-3xl text-accent mb-10">
        Our All Services
      </h1>
      <div className="grid grid-cols-1">
        {serviceData.map((service) => (
          <ServiceDetails key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
