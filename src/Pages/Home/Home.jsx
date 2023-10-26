import Aboutus from "../../Component/Aboutus";
import Call from "../../Component/Call";
import ServicesSection from "../../Component/ServicesSection";
import Slider from "../../Component/Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Aboutus></Aboutus>
           <ServicesSection></ServicesSection>
           <Call></Call>
        </div>
    );
};

export default Home;