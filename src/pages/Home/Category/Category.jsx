import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
        <SectionTitle
        subHeading={'---From 11:00am to 10:00pm---'}
        heading={'ORDER ONLINE'}
        ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        Pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className='text-2xl  -mt-10 text-center'>SALAD</h3>
        </SwiperSlide>
        <SwiperSlide> 
         <img src={slide2} alt="" />
        <h3 className='text-2xl  -mt-10 text-center'>PIZZA</h3>
         </SwiperSlide>
        <SwiperSlide>
        <img src={slide3}alt="" />
        <h3 className='text-2xl  -mt-10 text-center'>SOUP</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-2xl  -mt-10 text-center'>DESERT</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-2xl  -mt-10 text-center'>SALAD</h3>
        </SwiperSlide>
       
      </Swiper>   
        </section>
    );
};

export default Category;