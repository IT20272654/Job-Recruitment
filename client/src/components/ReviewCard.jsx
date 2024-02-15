/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1, name: "Rashka pramodi", company: "Dialog Axiata PLC", comment: "Navigating the job market can be overwhelming, but Job eka made it easy. The personalized job alerts kept me updated on relevant opportunities, and the application process was seamless", photo: "/src/assets/Avatar1.png"
    },
    {
        id: 2, name: "Kalpa de Sliva", company: "John Keells Holdings PLC", comment: "I landed my dream job! The platform's user-friendly design and intuitive navigation made the job search process stress-free.", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 3, name: "Gunasiri Bandara", company: "Aitken Spence PLC", comment: "Whether you're a recent graduate or a seasoned professional, I highly recommend Job eka for your job search needs. It's the ultimate destination for connecting employers with qualified candidates.", photo: "/src/assets/Avatar3.png"
    },
    {
        id: 4, name: "Yasas Rupananda", company: "Singer Sri Lanka PLC", comment: "I highly recommend Job eka for everyone who wants to achieve their dream with a professional team.", photo: "/src/assets/Avatar1.png"
    },
    {
        id: 5, name: "Bavin kulendran", company: "Cargills (Ceylon) PLC", comment: "The job search feature on Job eka is incredibly robust. I appreciated the ability to save and revisit job listings that caught my eye, making it easy to keep track of my applications.", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 6, name: "Amalka Ekanayake", company: "Sri Lanka Telecom PLC", comment: "Highly impressed with the job listings variety and user-friendly interface on Job eka. Found my dream job within days of signing up. Highly recommend!", photo: "/src/assets/Avatar3.png"
    },
]

const ReviewCard = () => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                    <div>
                        <img src="/src/assets/starts.png" alt=""  className='h-4'/>
                        <p className='my-5'>" {review.comment}</p>
                        <div className='flex gap-4 items-center'>
                            <img src={review.photo} alt="" className='h-10' />
                            <div>
                                <p>{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default ReviewCard;