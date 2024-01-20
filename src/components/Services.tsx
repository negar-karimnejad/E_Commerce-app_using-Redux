import { services } from "../data/data";
import Service from "./Service";

function Services() {
  return (
    <div className="bg-white my-10">
      <div className="container mx-auto px-[15px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
