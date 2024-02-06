import React, { useState, useEffect } from 'react'

// Lib
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

// Data
import interestedData from '../../data/interested.json'

// Framer motion
import { motion } from 'framer-motion'

export default function Interested() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    

    return (
        <section 
        id='interested'
        className='container-fluid border-bottom border-1 border-secondary border-opacity-25' 
        >
            <motion.div 
            className='container py-5 overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.4}}
            >
                <motion.div 
                initial={{y:0}}
                animate={{y: ["-6px", "6px", "-6px"]}}
                transition={{duration: 3, repeat: Infinity}}
                className='w-50 text-center d-flex flex-column justify-content-center align-items-center'>
                    <h2 
                    style={{filter: 'drop-shadow(8px 8px 15px var(--main-color))', transitionDuration: '1s', transitionDelay: '1s', fontFamily: "cursive, Arial, sans-serif"}} 
                    className='p-0 m-0 display-4 fw-bolder'
                    >
                        Interested?
                    </h2>
                </motion.div>

                <motion.div
                >
                    <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    style={{height: '300px', maxWidth: '220px'}} 
                    className='shadow-lg'>
                    {
                        interestedData && interestedData.map((items, index) => {

                        return(
                            <SwiperSlide style={{background: `center / cover no-repeat ${items.color || 'rgba(30, 187, 235, 0.829)'} url(${items.image})`}} key={index} className={`rounded-2 position-relative p-3 d-flex flex-column justify-content-center align-items-start gap-1`}>
                                <h4 className='fw-bold border-bottom'>{items?.name}</h4>
                                {loaded ?
                                items?.button ? 
                                <Button style={{cursor: "pointer"}} onClick={() => document?.querySelector('#learn-more')?.scrollIntoView({behavior: 'smooth'})} 
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
                </motion.div>
            </motion.div>
        </section>
    )
}
