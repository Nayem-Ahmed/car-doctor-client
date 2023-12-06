import { Link, useLoaderData, useParams } from "react-router-dom";
import checkout from '../assets/checkout.png';
import servicebanner from '../assets/3.jpg';
import Facility from "./Facility";

const Servicedetails = () => {
    const { id } = useParams();
    const loaderServiceDetails = useLoaderData();

    const findDetails = loaderServiceDetails.find(card => card._id === id);

    const {img,service_id,_id,price,facility } = findDetails;

    return (
        <div className="my-20">
            <div  className="relative my-6 " >
                <img src={checkout} alt="" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) rounded-md top-0 left-0 w-full h-full"></div>
            </div>

            <div className="flex gap-6  md:flex-row flex-col">
                <div className="basis-3/4">
                    <img className="h-80 rounded-md w-full" src={servicebanner} alt="" />

                    <div className="grid md:grid-cols-2 gap-3 my-3">
                        {
                            facility.map((facility,index) => <Facility key={index} facility={facility}></Facility>)
                        }
                    </div>

                </div>
                <div className="basis-2/4 bg-[#F3F3F3] rounded-md">
                    <div className="my-6 text-center">
                    <Link to={`/checkout/${id}`}><button className="btn bg-red-500 hover:bg-yellow-400  text-white">Proceed Checkout</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Servicedetails;
