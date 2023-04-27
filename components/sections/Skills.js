import React, { useEffect, useRef } from 'react'

// Liab
import { Button } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';

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

    return (
        <div ref={skillsRefs} className='container-fluid skills-container' id='skills'>
            <div className='container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center py-5 rounded gap-5'>

                <div className='skills-description move-items-top w-75 d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3'>
                    <h2 className='text-info fw-bold display-5'>My Skills</h2>
                    <p style={{fontSize: '14px'}} className='w-75 text-center text-md-start p-0 m-0 '>Some Skills and Technologies that I master.</p>
                    <Button onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'})} variant="success">Projects <MdKeyboardArrowDown /></Button>
                </div>

                <ul style={{maxWidth: '380px'}} className='skills-list move-items-bottom bg-secondary bg-opacity-25 p-4 rounded d-flex flex-row flex-wrap justify-content-start align-items-center row-gap-3 column-gap-5'>
                    {
                        ['html', 'css', 'javascript', 'bootstrap', 'sass/scss', 'react.js', 'redux', 'next.js'].map((items, index) => (
                            <li key={items || index} className='opacity-hover text-center text-md-start text-uppercase'><span className='fw-bold text-info'>0{index + 1}.</span> {items}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}