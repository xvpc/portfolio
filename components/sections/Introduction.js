import React, { useEffect, useRef } from 'react'

// Next
import Image from 'next/image';

// Liab
import { Button } from 'react-bootstrap';
import { Tilt } from 'react-tilt'

// Icons
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Introduction() {
    const introductionRefs = useRef()


    // Animations
    useEffect(() => {
        let timeOut
        const introductionDescription = document.querySelector('.introduction-description')
        const introductionImage = document.querySelector('.introduction-image-container')
    
        timeOut = setTimeout(() => {
            introductionDescription.classList.remove('move-items-bottom')
            introductionImage.classList.remove('move-items-top')
        }, 300)
        return () => {
            clearTimeout(timeOut)
        }
    }, [])

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

    return (
        <div ref={introductionRefs} className='container-fluid' id='introduction'>
            <div className='introduction-container container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>

                <div className='introduction-description move-items-bottom order-2 order-md-0 d-flex flex-column justify-content-center align-items-center align-items-md-start gap-2'>
                    <p className='p-0 m-0 fw-bold fs-4'>Hello, <span className='text-info'>I&#39;m</span></p>
                    <h1 className='fw-bolder text-info font-monospace'>Mahmoud Nabil</h1>
                    <h4 className='ps-3 fw-bold'>Front-end Developer</h4>
                    <p style={{fontSize: '12px'}} className='w-75 text-center text-md-start p-0 m-0'>I&#39;m A Web developer. I Enjoy Coding and Programming, but I shine more in Frontend development.</p>
                    <Button onClick={() => document.querySelector('#skills').scrollIntoView({behavior: 'smooth'})} className='mt-3' variant="info">My Skills <MdKeyboardArrowDown /></Button>
                </div>

                <Tilt options={defaultOptions} style={{width: '250px', height: '250px'}} className='introduction-image-container move-items-top position-relative'>
                    <div className='introduction-image-shadow w-100 h-100 position-absolute'></div>
                    <div className='introduction-image-overlay w-100 h-100 start-50 translate-middle-x bg-info position-absolute'></div>
                    <img style={{objectFit: 'cover', height: '350px'}} className='introduction-image remove-selecting w-100 position-absolute bottom-0' src={'/images/me-photo.png'} height={720} width={1080} priority alt='Me Photo' />
                </Tilt>

            </div>
        </div>
    )
}