import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ServicesCards = ({ servicecard }) => {
    const { _id,img, title, price } = servicecard;

    // Initialize AOS
    AOS.init();

    return (
        <Link to={`servicedetails/${_id}`}>
        <div data-aos="zoom-in" className="card card-compact bg-base-100 shadow-xl mt-4">
            <figure>
                <img className='h-48 w-full' src={img} alt="Service" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex'>
                    <p className='text-red-500 font-semibold'>Price: $ {price}</p>
                    <BsArrowRightShort className='text-xl text-red-500'></BsArrowRightShort>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ServicesCards;
