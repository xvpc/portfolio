import React, { useState } from 'react'

// Nextjs
import Link from 'next/link';

// Icons
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

// Framer motion
import { motion } from 'framer-motion'

// Others
import Ripples from 'react-ripples'
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Learnmore() {

    return (
        <section 
        id='learn-more'
        className='space container d-flex flex-column text-center justify-content-center align-items-center gap-4' 
        >
            <h3 className='hover-effect fw-bold'>How It Works?</h3>

            <motion.ol 
            className="list-group list-group-numbered text-start w-100 mb-4"
            initial={{rowGap: 0}}
            whileInView={{rowGap: "20px"}}
            transition={{duration: 0.8, delay: 0.5}}
            >
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Website Design</div>
                        <p className='p-0 m-0 ms-4'>
                            The client shares the design of the website with me in any format Psd, Figma, xd, sketch or even a PNG picture.
                        </p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Understanding the requirements</div>
                        <p className='p-0 m-0 ms-4'>
                            I will go through the website&#39;s design to understand it and know what the project is about.
                        </p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Deal</div>
                        <p className='p-0 m-0 ms-4'>
                            Time and price will be decided according to the complexity of the project. After agreeing on a deal, I will start working on the project.
                        </p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Delivery</div>
                        <p className='p-0 m-0 ms-4'>
                            The project will be completed and delivered within the agreed time.
                        </p>
                    </div>
                </li>
            </motion.ol>

            <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                <h6 className='text-center p-0 m-0'>Interested?, You can find Me on Fiverr or Directlly get in touch with me!</h6>
                <div className='w-100 d-flex flex-row justify-content-center align-items-center gap-2 text-center'>
                    <Ripples className='p-0 m-0 btn w-50 justify-content-center align-items-center'>
                        <Link style={{cursor: "pointer", background: '#1DBF73'}} href={process.env.NEXT_PUBLIC_FIVERR as string} target='_blank' className='text-white text-center w-100 p-2'><TbBrandFiverr className='fs-5 fw-bold' /></Link>
                    </Ripples>

                    <Ripples className='p-0 m-0 btn w-50 justify-content-center align-items-center'>
                        <Link style={{cursor: "pointer", background: 'var(--main-color)'}} href={"#contact-us"} className='text-nowrap text-white text-center w-100 p-2 fw-bold'>Contact me <MdKeyboardArrowDown size={20} /></Link>
                    </Ripples>
                    {/* <Ripples className='p-0 m-0 btn w-50 justify-content-center align-items-center'>
                        <Link style={{cursor: "pointer", background: '#6fda44'}} href={process.env.NEXT_PUBLIC_UPWORK as string} target='_blank' className='text-white text-center w-100 p-2'><SiUpwork className='fs-5 fw-bold' /></Link>
                    </Ripples> */}
                </div>
            </div>
            
        </section>
    )
}
