import './Contact-Hero.scss';

function ContactHero() {
    return(
        <section className='contact-hero-container noselect'>
            <div className='marquee'>
                <h5>
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us
                </h5>
                <br />
                <h5>
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us -
                    get to <span className='white'>know</span> us - get to <span className='white'>know</span> us
                </h5>
            </div>
            <div className='contact-text-container'>
                <div className='big-text-container'>
                    <h5> Say <a href='mailto:inked2600@gmail.com'> Hi!</a></h5>
                </div>
                <div className='description-container'>
                    <div className='text-description'>is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to 
                        make a type specimen book. It has survived 
                        not only five centuries,
                    </div>
                    <div className='social-media-container'>
                        <div className='social-media-item'>
                            <a href='https://www.facebook.com/profile.php?id=100087213424052' target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        <div className='social-media-item'>
                            <a href='https://www.instagram.com/inkedtwosixx/' target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero;