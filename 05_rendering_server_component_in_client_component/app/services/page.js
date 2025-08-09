import Header from "@/components/Header";
import ServiceItem from "@/components/ServiceItem";
import ServiceList from "@/components/ServiceList";

const Services = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];

  return (
    <>
      <Header />
      <div>
        <h1>Our Services</h1>
        <ServiceList
          children={services.map((service) => (
            <ServiceItem key={service} serviceName={service} />
          ))}
        />
      </div>
    </>
  );
};

export default Services;
