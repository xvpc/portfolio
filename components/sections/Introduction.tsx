import React, { useEffect, useState } from 'react'

// Nextjs
import Image from 'next/image';
import Link from 'next/link';

// Bootstrap
import { Button } from 'react-bootstrap';

// Framer motion
import { motion } from 'framer-motion'

// Icons
import { MdKeyboardArrowDown, MdOutlineMailOutline } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

// Mui
import { Tooltip } from '@mui/material';

// Others
import { Tilt } from 'react-tilt'



// Tilt options
const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            50,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Introduction() {
    const titles = ["Software engineer","Front-end Developer", "Back-end Developer"];
    const [title, setTitle] = useState("Software engineer")
    
    useEffect(() => {
        let interval: NodeJS.Timer;
        let time: number = 0;

        interval = setInterval(() => {
            setTitle(titles[time])
            time = (time + 1) % titles.length
        }, 10100)

        return () => {
            clearInterval(interval)
        }
    }, [])
    
    
    // 
    return (
        <section 
        id='introduction'
        className='container-fluid bottom-pattren-box bg-black bg-opacity-50' 
        >
            <div className='space container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
                <motion.div 
                className='order-2 order-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start gap-2'
                initial={{y: "100vh"}}
                animate={{y: 0}}
                transition={{duration: 0.3}}
                >
                    <p className='p-0 m-0 fw-bold fs-4'>Hello, <span className='text-info'>I&#39;m</span></p>
                    <h1 className='fw-bolder text-info'>Mahmoud Nabil</h1>
                    <h4 style={{fontSize: '20px'}} className='introduction-text-animation border-end border-2 border-white overflow-hidden text-nowrap ps-3 fw-bold'>{title}</h4>
                    <p style={{fontSize: '13px'}} className='w-75 text-center text-md-start p-0 m-0'>
                        I&#39;m A Software engineer with +5 years of experience. I Enjoy Coding and Programming, I shine more in Web development.
                    </p>
                    <div className='introduction-links-container d-flex flex-row justify-content-center aglin-items-center gap-2'>
                        <Tooltip title='Gmail' arrow>
                            <Link className='text-center fs-2 overflow-hidden' href={process.env.NEXT_PUBLIC_EMAIL as string} target='_blank'>
                                <MdOutlineMailOutline className='bg-white text-dark rounded-circle p-1' />
                            </Link>
                        </Tooltip>
                        {/* <Tooltip title='Linkedin' arrow>
                            <Link className='text-center fs-2 overflow-hidden' href={process.env.NEXT_PUBLIC_LINKEDIN as string} target='_blank'>
                                <AiFillLinkedin className='bg-white text-dark rounded-circle p-1' />
                            </Link>
                        </Tooltip> */}
                        <Tooltip title='WhatsApp' arrow>
                            <Link className='text-center fs-2 overflow-hidden' href={process.env.NEXT_PUBLIC_WHATSAPP as string} target='_blank'>
                                <AiOutlineWhatsApp className='bg-white text-dark rounded-circle p-1' />
                            </Link>
                        </Tooltip>
                        <Tooltip title='Github' arrow>
                            <Link className='text-center fs-2 overflow-hidden' href={process.env.NEXT_PUBLIC_GITHUB as string} target='_blank'>
                                <AiFillGithub className='bg-white text-dark rounded-circle p-1' />
                            </Link>
                        </Tooltip>
                        <Tooltip title='Discord' arrow>
                            <Link className='text-center fs-2 overflow-hidden' href={process.env.NEXT_PUBLIC_DISCORD as string} target='_blank'>
                                <BsDiscord className='bg-white text-dark rounded-circle p-1' />
                            </Link>
                        </Tooltip>
                    </div>

                    <Button style={{cursor: "pointer"}} onClick={() => document?.querySelector('#skills')?.scrollIntoView({behavior: 'smooth'})} className='mt-3' variant="info">My Skills <MdKeyboardArrowDown /></Button>
                </motion.div>

                <motion.div
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                transition={{delay: 0.3, duration: 1}}
                >
                    <Tilt options={defaultOptions} style={{width: '250px', height: '250px'}} className='position-relative'>
                        <div style={{background: 'var(--main-color-shadow)', top: '10px', left: "10px", filter: 'blur(270px)'}} className='introduction-image-shadow w-100 h-100 position-absolute'></div>
                        <div className='introduction-image-overlay w-100 h-100 start-50 translate-middle-x position-absolute'></div>
                        <img style={{objectFit: 'cover', height: '350px'}} className='introduction-image remove-selecting w-100 position-absolute bottom-0' src={'./images/personal-photo.png'} height={720} width={1080} alt='Image' />
                    </Tilt>
                </motion.div>
            </div>
        </section>
    )
}