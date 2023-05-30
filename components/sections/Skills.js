import React, { useEffect, useRef } from 'react'

// Liab
import { Button } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Mui
import { useMediaQuery } from '@mui/material';

export default function Skills() {
    const skillsRefs = useRef()

    // Animations
    useEffect(() => {
        let timeOut
        const skillsDescription = document.querySelector('.skills-description')
        const skillsList = document.querySelector('.skills-list')
    
        timeOut = setTimeout(() => {
            skillsDescription.classList.remove('move-items-bottom')
            skillsList.classList.remove('move-items-top')
        }, 400)

        const handleScroll = () => {
            if(typeof window !== 'undefined'){
                const {scrollY} = window
                // console.log(scrollY)
                // Skills
                if(scrollY >= skillsRefs.current.clientHeight){
                    skillsDescription.classList.remove('move-items-top')
                    skillsList.classList.remove('move-items-bottom')
                }else{
                    skillsDescription.classList.add('move-items-top')
                    skillsList.classList.add('move-items-bottom')
                }
            }
        }
        window.addEventListener('scroll', handleScroll, true)

        return () => {
            clearTimeout(timeOut)
            window.addEventListener('scroll', handleScroll, true)
        }
    }, [])

    const matchSm = useMediaQuery('(min-width: 576px)')

    return (
        <div ref={skillsRefs} className='container-fluid skills-container' id='skills'>
            <div className='container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center py-5 rounded gap-5'>

                <div style={{transition: '1s'}} className='skills-description move-items-top d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3'>
                    <h2 className='text-info fw-bold display-5'>My Skills</h2>
                    <p style={{fontSize: '14px'}} className='w-75 text-center text-md-start p-0 m-0 '>Some Skills and Technologies that I master.</p>
                    <Button style={{cursor: "pointer"}} onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'})} variant="success">Projects <MdKeyboardArrowDown /></Button>
                </div>

                <div style={{maxWidth: '420px', transition: '1s', fontSize: matchSm ? '15px' : '10px'}} className='skills-list flex-wrap w-100 move-items-bottom d-flex flex-row justify-content-center align-items-center gap-2'>
                    <ul className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        {
                            ['html', 'css', 'javascript', 'bootstrap'].map((items, index) => (
                                <li key={items || index} className='opacity-hover w-100 bg-secondary bg-opacity-25 text-center text-md-start p-3 p-md-2 rounded text-uppercase'><span className='fw-bold text-info'>0{index + 1}.</span> {items}</li>
                            ))
                        }
                    </ul>
                    <ul className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        {
                            ['sass/scss', 'react.js', 'redux', 'next.js'].map((items, index) => (
                                <li key={items || index} className='opacity-hover w-100 bg-secondary bg-opacity-25 text-center text-md-start p-3 p-md-2 rounded text-uppercase'><span className='fw-bold text-info'>0{index + 5}.</span> {items}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}