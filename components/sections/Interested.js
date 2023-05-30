import React, { useState, useEffect, useRef } from 'react'

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

// Others
import interestedData from '../../data/interested.json'

export default function Interested() {
    const interestedRefs = useRef()

    // Loading
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    // Animations
    useEffect(() => {
        const interestedName = document.querySelector('.interested-name')
        const interestedSwiper = document.querySelector('.interested-swiper')
    
        const handleScroll = () => {
            if(typeof window !== 'undefined'){
                const {scrollY} = window
                // interested
                if(scrollY >= interestedRefs.current.scrollHeight){
                    interestedName.classList.remove('move-items-top')
                    interestedSwiper.classList.remove('move-items-right')
                }else{
                    interestedName.classList.add('move-items-top')
                    interestedSwiper.classList.add('move-items-right')
                }
            }
        }

        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.addEventListener('scroll', handleScroll, true)
        }
    }, [])

    return (
        <div ref={interestedRefs} className='container-fluid' id='interested'>
            <div className='container py-5 overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
                <div className='w-50 text-center d-flex flex-column justify-content-center align-items-center'>
                    <h2 style={{filter: 'drop-shadow(8px 8px 15px var(--main-color))', transitionDuration: '1s', transitionDelay: '1s'}} className='interested-name move-items-top p-0 m-0 display-4 fw-bolder font-monospace'>Interested?</h2>
                </div>

                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                style={{height: '300px', maxWidth: '220px'}} 
                className='interested-swiper move-items-right shadow-lg'>
                {
                    interestedData && interestedData.map((items, index) => {

                    return(
                        <SwiperSlide style={{background: `center / cover no-repeat ${items.color || 'rgba(30, 187, 235, 0.829)'} url(${items.image})`}} key={index} className={`interested-swiper-card position-relative p-3 d-flex flex-column justify-content-center align-items-start gap-1`}>
                            <h4 className='fw-bold border-bottom'>{items?.name}</h4>
                            {loaded ?
                            items?.button ? 
                            <Button style={{cursor: "pointer"}} onClick={() => document.querySelector('#learn-more').scrollIntoView({behavior: 'smooth'})} 
                            type='button' className='btn btn-info text-white'>Learn More <MdKeyboardArrowDown /></Button> :
                            <p style={{fontSize: '12px'}}>{items?.description}</p>
                            :
                            <Placeholder className='w-75' as="p" animation="wave">
                                <Placeholder xs={12} />
                                <Placeholder xs={10} />
                                <Placeholder xs={8} />
                            </Placeholder>
                            }
                            <div style={{background: 'linear-gradient(to top, black, #00000000)', zIndex: '-1'}} className='position-absolute top-0 start-0 w-100 h-100'></div>
                        </SwiperSlide>
                    )
                    })
                }
                </Swiper>
            </div>
        </div>
    )
}
