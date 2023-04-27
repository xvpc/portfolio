import React, { useState, useEffect, useRef } from 'react'

import aboutData from '../../data/aboutme.json'

// Liab
import Placeholder from 'react-bootstrap/Placeholder';

// Icons
import { MdKeyboardArrowDown } from "react-icons/md";

// Bootstrap
import { Button } from 'react-bootstrap';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-cards";

export default function AboutMe() {
    const aboutMeRefs = useRef()

    // Loading
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    // Animations
    useEffect(() => {
        const aboutName = document.querySelector('.about-name')
        const aboutSwiper = document.querySelector('.about-swiper')
    
        const handleScroll = () => {
            if(typeof window !== 'undefined'){
                const {scrollY} = window
                // Aboutme
                if(scrollY >= aboutMeRefs.current.scrollHeight){
                    aboutName.classList.remove('move-items-top')
                    aboutSwiper.classList.remove('move-items-right')
                }else{
                    aboutName.classList.add('move-items-top')
                    aboutSwiper.classList.add('move-items-right')
                }
            }
        }

        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.addEventListener('scroll', handleScroll, true)
        }
    }, [])

    return (
        <div ref={aboutMeRefs} className='container-fluid' id='about'>
            <div className='container py-5 overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
                <div className='w-50 text-center d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='about-name move-items-top p-0 m-0 display-4 fw-bolder font-monospace'>About Me</h2>
                </div>

                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                style={{height: '300px', maxWidth: '220px'}} 
                className='about-swiper move-items-right shadow-lg'>
                {
                    aboutData && aboutData.map((items, index) => {

                    return(
                        <SwiperSlide style={{background: `center / cover no-repeat ${items.color || 'rgba(30, 187, 235, 0.829)'} url(${items.image})`}} key={index} className={`about-swiper-card p-3 d-flex flex-column justify-content-center align-items-start gap-1`}>
                        <h4 className='fw-bold border-bottom'>{items?.name}</h4>
                        {loaded ?
                        items?.button ? 
                        <Button onClick={() => document.querySelector('#learn-more').scrollIntoView({behavior: 'smooth'})} 
                        type='button' className='btn btn-info text-white'>Learn More <MdKeyboardArrowDown /></Button> :
                        <p style={{fontSize: '12px'}}>{items?.description}</p>
                        :
                        <Placeholder className='w-75' as="p" animation="wave">
                            <Placeholder xs={12} />
                            <Placeholder xs={10} />
                            <Placeholder xs={8} />
                        </Placeholder>
                        }
                        </SwiperSlide>
                    )
                    })
                }
                </Swiper>
            </div>
        </div>
    )
}
