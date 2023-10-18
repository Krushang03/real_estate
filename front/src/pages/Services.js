import React from 'react'
import '../Style/services.css'
import house from '../images/1.png'
import house1 from '../images/real-estate-agent.png'
import house2 from '../images/building.png'
import house3 from '../images/house-sale.png'
import user1 from '../images/5.jpg'
import { Carousel } from 'react-responsive-carousel'

const Services = () => {
    return (
        <div>
            <>
                <div className='contact'>
                    <div className='dark-back d-flex justify-content-center'>
                        <h1>Services</h1>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row mb-5'>
                        <div className='col-md-6 col-12 col-lg-3'>
                            <div className='box-feature mb-4'>
                                <img src={house} className='img-service mb-4' />
                                <h3 class="text-black mb-3 font-weight-bold">
                                    Quality Properties
                                </h3>
                                <p class="text-black-50">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                {/* <p><a href="#" class="learn-more">Read more</a></p> */}
                            </div>
                        </div>
                        <div className='col-md-6 col-12 col-lg-3'>
                            <div className='box-feature mb-4'>
                                <img src={house1} className='img-service mb-4' />
                                <h3 class="text-black mb-3 font-weight-bold">
                                    Top Rated Agent
                                </h3>
                                <p class="text-black-50">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                {/* <p><a href="#" class="learn-more">Read more</a></p> */}
                            </div>
                        </div>
                        <div className='col-md-6 col-12 col-lg-3'>
                            <div className='box-feature mb-4'>
                                <img src={house2} className='img-service mb-4' />
                                <h3 class="text-black mb-3 font-weight-bold">
                                    Property for Sale
                                </h3>
                                <p class="text-black-50">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                {/* <p><a href="#" class="learn-more">Read more</a></p> */}
                            </div>
                        </div>
                        <div className='col-md-6 col-12 col-lg-3'>
                            <div className='box-feature mb-4'>
                                <img src={house3} className='img-service mb-4' />
                                <h3 class="text-black mb-3 font-weight-bold">
                                    House for Sale
                                </h3>
                                <p class="text-black-50">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                {/* <p><a href="#" class="learn-more">Read more</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teacher2">
                    <div className='dark-back2'>
                        <div className="container">
                            <Carousel
                                autoPlay={true}
                                transitionTime={500}
                                infiniteLoop={true}
                                showStatus={false}
                                showArrows={false}
                                // showIndicators={false}
                                stopOnHover={false}
                                emulateTouch={true}
                                showThumbs={false}
                                className='testimonial'
                                >
                                <div class="box8">
                                    <div class="box9">
                                        <img src={user1} class="img_te1 mb-3" />
                                        <h4>Jerome Jensen</h4>
                                        <i>“ Lorem
                                            ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus
                                            voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem
                                            reprehenderit assumenda ”</i>
                                    </div>
                                </div>
                                <div class="box8">
                                    <div class="box9">
                                        <img src={user1} class="img_te1 mb-3" />
                                        <h4>Jerome Jensen</h4>
                                        <i>“ Lorem
                                            ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus
                                            voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem
                                            reprehenderit assumenda ”</i>
                                    </div>
                                </div>
                                <div class="box8">
                                    <div class="box9">
                                        <img src={user1} class="img_te1 mb-3" />
                                        <h4>Jerome Jensen</h4>
                                        <i>“ Lorem
                                            ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus
                                            voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem
                                            reprehenderit assumenda ”</i>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Services