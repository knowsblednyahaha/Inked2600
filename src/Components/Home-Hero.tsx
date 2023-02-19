import './Home-Hero.scss';


function HomeHero() {
    return(
        <section className='home-hero'>
            <div className='text-header-container noselect'>
                <h1 className='text-header'>Distinctive</h1>
                <h1 className='text-header'>Tattoo Artists</h1>
                <h1 className='text-header'>in Baguio City</h1>
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