import './Artist-Section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';

import Data from '../Data/data.json'

function ArtistSection() {
    SwiperCore.use([Autoplay]);
    return(
        <section className='artist-container noselect'>
            <div className='artist-title'>
                <h3>Meet the <span>Artists</span></h3>
            </div>
            <div className='swiper-container'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    autoHeight={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    // pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    
                >
                    {
                        Data.artist.map( data => {
                            return(
                                <SwiperSlide style={{textAlign: "center"}} key={data.id}>
                                    <div className='artist-info-container'>
                                    <div className='image-container'>
                                        <img key={data.dp} src={data.dp} alt="" />
                                    </div>
                                    <div className='text-container'>
                                        <h4 key={data.lastname}><span key={data.firstname}>{data.firstname}</span>&nbsp; {data.lastname}</h4>
                                        <p key={data.artistdesc}>{data.artistdesc}</p>
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