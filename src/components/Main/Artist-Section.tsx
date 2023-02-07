import './Artist-Section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ArtistSection() {
    return(
        <section className='artist-container'>
            <div className='artist-title'>
                <h3>Meet the <span>Artists</span></h3>
            </div>
            <div className='swiper-container'>
                <Swiper
                    navigation={true}
                    autoHeight={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide
                        style={{textAlign: "center"}}
                    >
                        <div className='artist-info-container'>
                            <div className='image-container'>
                                <img src="/img/1.jpg" alt="" />
                            </div>
                            <div className='text-container'>
                                <h4><span>Roniel</span> Malupet</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore ab assumenda consectetur et eveniet, ipsum praesentium rerum totam corrupti ducimus. Delectus nobis optio cum dignissimos voluptatibus. Cum, incidunt quas!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{textAlign: "center"}}
                    >
                        <div className='artist-info-container'>
                            <div className='image-container'>
                                <img src="/img/2.jpg" alt="" />
                            </div>
                            <div className='text-container'>
                                <h4><span>Garret</span> Malupet</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore ab assumenda consectetur et eveniet, ipsum praesentium rerum totam corrupti ducimus. Delectus nobis optio cum dignissimos voluptatibus. Cum, incidunt quas!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default ArtistSection;