import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Blog = () => {
    return (
        <Swiper
            modules={[Navigation ]}
            navigation
            spaceBetween={50}
            slidesPerView={1}

        >
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/Dbt5wjv/fatane-rahimi-h-U0-GEAYbr-W4-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    );
};

export default Blog;