import './Artist-Section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';

import Data from '../Data/data.json'

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
                    autoplay = {true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {
                        Data.artist.map( data => {
                            return(
                                <SwiperSlide style={{textAlign: "center"}}>
                                    <div className='artist-info-container'>
                                    <div className='image-container'>
                                        <img src={data.dp} alt="" />
                                    </div>
                                    <div className='text-container'>
                                        <h4><span>{data.firstname}</span>&nbsp; {data.lastname}</h4>
                                        <p>{data.artistdesc}</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default ArtistSection;