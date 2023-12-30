// import { useLoaderData } from "react-router-dom";
import ServicesCards from "./ServicesCards";
import { useEffect, useState } from "react";


const ServicesSection = () => {
    // const servicesloader = useLoaderData()
    const [asc, setAsc] = useState(true)
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch(`https://car-doctor-server-tau-amber.vercel.app/services?sort=${asc ? 'asc':'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
 
    },[asc])
    return (
        <div>
           <div className="text-center max-w-xl mx-auto">
           <p className='text-red-500 font-semibold mb-3 '>Services</p>
            <h2 className="text-2xl font-bold mb-3">Our Service Area</h2>
            <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <button onClick={()=>setAsc(!asc)} className="btn btn-secondary mt-3">
                {asc ?  'Price high to low':'Price low to high' }
                </button>
           </div>

           <div className="grid md:grid-cols-3 gap-5">
               {
                services.map(servicecard => <ServicesCards servicecard={servicecard} key={servicecard._id}></ServicesCards>)

               }
           </div>

        </div>
    );
};

export default ServicesSection;