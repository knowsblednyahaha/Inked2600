import './Home-Hero.scss';


function HomeHero() {
    return(
        <section className='home-hero'>
            <div className='text-header-container noselect'>
                <div className='text-header'>Distinctive</div>
                <div className='text-header'>Tattoo Artists</div>
                <div className='text-header'>in Baguio City</div>
            </div>
            <div className='home-image-container'>
                <div className='home-image'>
                    <img src="/img/home-1.jpg" alt="" />
                </div>
                <div className='home-image'>
                    <img src="/img/home-2.jpg" alt="" />
                </div>
                <div className='home-image'>
                    <img src="/img/home-3.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HomeHero;