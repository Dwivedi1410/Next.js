"use client";
// import ServiceItem from "./ServiceItem";

// export default function ServiceList() {
//   const services = [
//     "Web Development",
//     "Mobile App Development",
//     "Consulting Services",
//     "Digital Marketing",
//   ];
//   return (
//     <>
//       <h3>All Services List</h3>
//       <ul className="services-list">
//         {services.map((service) => (
//           <ServiceItem key={service} serviceName={service} />
//         ))}
//       </ul>
//     </>
//   );
// }




export default function ServiceList({children}) {

  return (
    <>
      <h3>All Services List</h3>
      <ul className="services-list">
       {children}
      </ul>
    </>
  );
}

//Note :- Here we are using children prop to render the ServiceItem components passed from the parent component (Services page).
// This allows us to keep ServiceList as a server component while rendering ServiceItem as a client component.
