import React, { useState } from 'react'

// Bootstrap
import { Button } from 'react-bootstrap';

// Icons
import { MdKeyboardArrowDown } from 'react-icons/md';

// Mui
import { useMediaQuery } from '@mui/material';

// Framer motion
import { motion } from 'framer-motion'

export default function Skills() {
    const [activeView, setActiveView] = useState(false);

    const matchSm = useMediaQuery('(min-width: 576px)')

    return (
        <motion.div 
        id='skills'
        className='container-fluid extra-space' 
        onViewportEnter={() => setActiveView(true)}
        onViewportLeave={() => setActiveView(false)}
        >
            <div className='container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center py-5 rounded gap-5'>

                <motion.div 
                className='d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3'
                initial={{y: "-100vh"}}
                animate={activeView ? {y:0} : {y: "-100vh"}}
                transition={{duration: 0.5}}
                >
                    <h2 className='text-info fw-bold display-5'>My Skills</h2>
                    <p style={{fontSize: '14px'}} className='w-75 text-center text-md-start p-0 m-0 '>Some Skills and Technologies that I master.</p>
                    <Button style={{cursor: "pointer"}} onClick={() => document?.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})} variant="success">Projects <MdKeyboardArrowDown /></Button>
                </motion.div>

                <motion.div style={{maxWidth: '420px', fontSize: matchSm ? '15px' : '10px'}} 
                className='flex-wrap w-100 d-flex flex-row justify-content-center align-items-center gap-2'
                initial={{y: "100vh"}}
                animate={activeView ? {y:0} : {y: "100vh"}}
                transition={{delay: 0.2, duration: 0.8}}
                >
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
                </motion.div>
            </div>
        </motion.div>
    )
}