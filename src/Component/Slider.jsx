import slider1 from '../assets/slider/1.jpg'
import slider2 from '../assets/slider/2.jpg'
import slider3 from '../assets/slider/3.jpg'
import slider4 from '../assets/slider/4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                {/* <img src={slider1} className="w-full" /> */}
                <div  className="w-full rounded-md text-white flex items-center" style={{ backgroundImage: `url(${slider1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='md:max-w-md mr-5 ml-4 '>
                <h2>Affordable Price For Car Servicing</h2>
                <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn mr-4 md:btn-lg mb-3 btn-sm'>Discover More</button>
                <button className='btn md:btn-lg btn-sm'>Latest Project</button>
                </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-md" />
                <div className="absolute flex h-full  left-0 top-0 items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                <div className='md:max-w-md mr-5 ml-4 '>
                <h2>Affordable Price For Car Servicing</h2>
                <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn mr-4 md:btn-lg mb-3 btn-sm'>Discover More</button>
                <button className='btn md:btn-lg btn-sm'>Latest Project</button>
                </div>
                    
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-md" />
                <div className="absolute flex h-full  left-0 top-0 items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                <div className='md:max-w-md mr-5 ml-4 '>
                <h2>Affordable Price For Car Servicing</h2>
                <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn mr-4 md:btn-lg mb-3 btn-sm'>Discover More</button>
                <button className='btn md:btn-lg btn-sm'>Latest Project</button>
                </div>
                    
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full rounded-md" />
                <div className="absolute flex h-full  left-0 top-0 items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                <div className='md:max-w-md mr-5 ml-4 '>
                <h2>Affordable Price For Car Servicing</h2>
                <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn mr-4 md:btn-lg mb-3 btn-sm'>Discover More</button>
                <button className='btn md:btn-lg btn-sm'>Latest Project</button>
                </div>
                    
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;