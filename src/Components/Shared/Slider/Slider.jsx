import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slider1 from "../../../assets/banner/banner1.jpg";
import slider2 from "../../../assets/banner/banner2.jpg";
import slider3 from "../../../assets/banner/banner3.jpg";
import slider4 from "../../../assets/banner/banner4.jpg";

const Slider = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center bg-slate-300">
          <img className="w-full md:w-2/3 md:mr-4" src={slider1} />
          <div>
          <p className="text-3xl">Experience the Magic of Music: Let the Rhythms Ignite Your Passion and Emotions. Discover New Sounds, Create Lasting Memories, and Find Your Musical Bliss. Unleash Your Soul's Symphony with Us!</p>
          <button className="btn btn-secondary text-2xl mt-6">Explore More</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-300">
          <img className="w-full md:w-2/3 md:mr-4" src={slider2} />
          <div>
          <p className="text-3xl">Unlock the Power of Music: Journey through Time and Genres, Uncover Hidden Gems, and Experience the Captivating Stories That Unfold with Every Note. Let Music Be Your Guiding Light</p> 
          <button className="btn btn-secondary text-2xl mt-6">Explore More</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-300">
          <img className="w-full md:w-2/3 md:mr-4" src={slider3} />
          <div>
          <p className="text-3xl">Feel the Pulse of Sound: Lose Yourself in the Captivating Rhythms, Let the Melodies Move Your Spirit, and Discover the Infinite Possibilities of Musical Expression.</p> 
          <button className="btn btn-secondary text-2xl mt-6">Explore More</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-300">
          <img className="w-full md:w-2/3 md:mr-4" src={slider4} />
          <div>
          <p className="text-3xl">Music: The Language of the Heart: Connect with Your Emotions, Express Your True Self, and Create Moments of Pure Bliss. Let the Universal Language of Music Speak to Your Soul.</p> 
          <button className="btn btn-secondary text-2xl mt-6">Explore More</button>
          </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
  );
};

export default Slider;
