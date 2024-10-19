import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    const slides = [
        {
            image: '/images/slide1.jpg',
            alt: 'Nature landscape',
        },
        {
            image: '/images/slide2.jpg',
            alt: 'Mountain view',
        },
        {
            image: '/images/slide3.jpg',
            alt: 'Ocean sunset',
        },
        {
            image: '/images/slide4.jpg',
            alt: 'Forest path',
        },
        {
            image: '/images/slide5.jpg',
            alt: 'Forest path',
        },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.image} alt={slide.alt} className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-fit sm:object-cover object-center" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;

