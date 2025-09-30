// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
// import './Carousel.css';

// function Carousel(){

//     const videos = [
//     "/assets/vids/854701-hd_1920_1080_24fps.mp4",
//     "/assets/vids/3191859-uhd_3840_2160_25fps.mp4",
//     "/assets/vids/3209298-uhd_3840_2160_25fps.mp4",
//     "/assets/vids/3578984-uhd_3840_2160_30fps.mp4",
//     "/assets/vids/4717657-hd_1920_1080_25fps.mp4",
//     "/assets/vids/5866268-uhd_3840_2160_25fps.mp4"
//     ];

//     return(
//         <>
//             <div className="carousel">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="video-swiper"
//       >
//         {videos.map((videoSrc, index) => (
//           <SwiperSlide key={index}>
//             <div className="video-container">
//               <video autoPlay muted loop playsInline>
//                 <source src={videoSrc} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//         </>
//     )
// } 

// export default Carousel;

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import './Carousel.css';

function Carousel() {
  const videos = [
    {
      src: "/assets/vids/854701-hd_1920_1080_24fps.mp4",
      text: "Explore the World Through Stories"
    },
    {
      src: "/assets/vids/3191859-uhd_3840_2160_25fps.mp4",
      text: "Discover Unique Perspectives"
    },
    {
      src: "/assets/vids/3209298-uhd_3840_2160_25fps.mp4",
      text: "Every Blog is a Journey"
    },
    {
      src: "/assets/vids/3578984-uhd_3840_2160_30fps.mp4",
      text: "Empowering Voices, Sharing Ideas"
    },
    {
      src: "/assets/vids/4717657-hd_1920_1080_25fps.mp4",
      text: "Inspiration Starts Here"
    },
    {
      src: "/assets/vids/5866268-uhd_3840_2160_25fps.mp4",
      text: "Write. Read. Connect."
    }
  ];

  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="video-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <video autoPlay muted loop playsInline>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay-text">
                <h2>{video.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
