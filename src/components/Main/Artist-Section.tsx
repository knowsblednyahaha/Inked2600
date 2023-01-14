import './Artist-Section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ArtistSection() {
    return(
        <section className='artist-container'>
            <div className='artist-title'>
                Meet the <span>Artists</span>
            </div>
            <div className='swiper-container'>
                <Swiper
                    navigation={true}
                    autoHeight={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide
                        style={{textAlign: "center"}}
                    >
                        <div className='image-container'>
                            <img src="/img/1.jpg" alt="" />
                        </div>
                        <div className='text-container'>
                            <span>Roniel</span> Malupet
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{textAlign: "center"}}
                    >
                        <div className='image-container'>
                            <img src="/img/2.jpg" alt="" />
                        </div>
                        <div className='text-container'>
                            <span>Garret</span> Malupet
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default ArtistSection;