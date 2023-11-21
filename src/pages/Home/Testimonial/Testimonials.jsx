import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

    const[reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('/reviews.json')
        .then(res =>res.json())
        .then(data =>{
            setReviews(data)
        })
    },[])

    return (
        <section>
            <SectionTitle
            subHeading={'---What Our Clients Say---'}
            heading={'TESTIMONIALS'}
            ></SectionTitle>

            <div>
            <Swiper
            pagination={{
              type: 'bullets',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
          {
            reviews.map(review => <SwiperSlide
                key={review._id}>
                <div className='flex flex-col items-center m-10'>
                <Rating
                 style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                />
                <p className='py-10'>{review.details}</p>
                <h3 className='text-3xl text-center font-semibold text-orange-600'>{review.name}</h3>
                </div>
                </SwiperSlide>)
          }
            
            
          </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;