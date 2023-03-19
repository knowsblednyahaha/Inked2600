import './Artist-Section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';
import Data from '../../Data/data.json'
import { Link } from "react-router-dom"
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ArtistSection() {
    const artisttitle = useRef(null);
    let artistDesc = useRef([]) as any;
    let imgwrapper = useRef([]) as any;
    useEffect( () => {
        gsap.from(artisttitle.current, {
            opacity: 0,
            duration: .8,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: artisttitle.current as any,
            },
        });
        gsap.from(artistDesc.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: artistDesc.current as any,
            },
        });
        gsap.from(imgwrapper.current, {
            width: "100%",
            duration: 1,
            delay: .5,
            ease: "Power3.inOut",
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: imgwrapper.current as any,
            },
        });
    }, []);
    SwiperCore.use([Autoplay]);
    return(
        <section className='artist-container noselect'>
            <div className='artist-title' ref={artisttitle}>
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
                >
                    {
                        Data.artist.map( data => {
                            return(
                                <SwiperSlide style={{textAlign: "center"}} key={data.id}>
                                    <div className='artist-info-container'>
                                        <div className='image-container' >
                                            <Link to={`/artist/${data.id}`} onClick={() => window.scrollTo(0, 0)} >
                                                <img key={data.dp} src={data.dp} alt={data.dp} className="artist-img"/>
                                                <div className="image-wrapper" ref={el => {imgwrapper.current[data.id] = el;}}></div>
                                            </Link>
                                        </div>
                                        <div className='text-container' ref={el => {artistDesc.current[data.id] = el;}}>
                                            <h4 key={data.lastname}><span key={data.firstname}>{data.firstname}</span>&nbsp; {data.lastname}</h4>
                                            <p key={data.artistdesc}>{data.artistdesc}</p>
                                        </div>
                                        <div className="button-container">
                                            <Link to={`/artist/${data.id}`} onClick={() => window.scrollTo(0, 0)} >
                                                <button>View Portfolio</button>
                                            </Link>
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