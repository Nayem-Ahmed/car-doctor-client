import { useLoaderData } from "react-router-dom";
import ServicesCards from "./servicesCards";


const ServicesSection = () => {
    const servicesloader = useLoaderData()
    return (
        <div>
           <div className="text-center max-w-xl mx-auto">
           <p className='text-red-500 font-semibold mb-3 '>Services</p>
            <h2 className="text-2xl font-bold mb-3">Our Service Area</h2>
            <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>

           <div className="grid md:grid-cols-3 gap-5">
               {
                servicesloader.map(servicecard => <ServicesCards servicecard={servicecard} key={servicecard._id}></ServicesCards>)

               }
           </div>

        </div>
    );
};

export default ServicesSection;