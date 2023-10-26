import { BsCalendar2Date } from 'react-icons/bs';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

const Call = () => {
    return (
        <div className='flex flex-col md:flex-row bg-red-500 text-white justify-around p-10 rounded-md'>
            <div className='flex items-center'>
                <BsCalendar2Date className='text-2xl mr-3'></BsCalendar2Date>
                <div>
                <p className='text-sm'>We are open monday-friday</p>
                <h2>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center'>
            <BsTelephoneOutbound className='text-2xl mr-3'></BsTelephoneOutbound>
                <div>
                <p  className='text-sm'>We are open monday-friday</p>
                <h2>7:00 am - 9:00 pm</h2>
                </div>
                
            </div>
            <div className='flex items-center'>
            <FaLocationDot className='text-2xl mr-3'></FaLocationDot>
                <div>
                <p  className='text-sm'>We are open monday-friday</p>
                <h2>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Call;