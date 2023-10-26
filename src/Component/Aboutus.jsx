import person from "../assets/person.jpg";
import parts from "../assets/parts.jpg";

const Aboutus = () => {
    return (
        <div className='flex gap-8 py-6 flex-col md:flex-row'>
            <div >
                <img className="rounded-md md:w-10/12" src={person} alt="" />
                <div className="">
                <img className="w-80 relative md:-top-32 border-l-8 rounded-md  border-t-8 md:left-56" src={parts} alt="" />
                </div>
            </div>
            <div>
                <p className='text-red-500 font-semibold mb-3'>About Us</p>
                <h2 className="text-gray-500 mb-4">We are qualified & of experience in this field</h2>
                <span className="text-gray-500 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </span>
                <h6 className="text-gray-500 mb-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h6>
                <button className='btn btn-secondary'>Get More Info</button>
            </div>
            
        </div>
    );
};

export default Aboutus;