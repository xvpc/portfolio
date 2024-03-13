import React, { useState } from 'react'

// Bootstrap
import { Button } from 'react-bootstrap';

// Icons
import { MdKeyboardArrowDown } from 'react-icons/md';

// Mui
import { Tooltip, useMediaQuery } from '@mui/material';

// Framer motion
import { motion } from 'framer-motion'

// Lib
import ImageHolder from '@/lib/ImageHolder';

// Data
import skillsData from '@/data/skills.json'


export default function Skills() {
    const [activeView, setActiveView] = useState(false);


    return (
        <motion.section 
        id='skills'
        className='container px-0 extra-space d-flex flex-column justify-content-between align-items-center gap-2' 
        onViewportEnter={() => setActiveView(true)}
        onViewportLeave={() => setActiveView(false)}
        >
            <div className='container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center py-5 px-md-3 rounded gap-5'>
                <motion.div 
                className='d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3'
                initial={{y: "-100vh"}}
                animate={activeView ? {y:0} : {y: "-100vh"}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                >
                    <h2 className='text-info fw-bold display-5'>My Skills</h2>
                    <p style={{fontSize: '14px'}} className='w-auto text-center text-md-start p-0 m-0 '>
                        Some Skills and Technologies that I know/use.
                    </p>
                    <Button style={{cursor: "pointer"}} onClick={() => document?.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})} variant="info">Projects <MdKeyboardArrowDown /></Button>
                </motion.div>

                <motion.div style={{maxWidth: '420px'}} 
                className='flex-wrap w-100 d-flex flex-row justify-content-center align-items-center gap-2'
                initial={{y: "-100vh"}}
                animate={activeView ? {y:0} : {y: "-100vh"}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                >
                    <ul style={{display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))", justifyContent: "center", alignItems: "center"}} className=''>
                        {
                            skillsData?.data.length > 0 ?
                            skillsData.data.map((item, index) => (
                                <Tooltip 
                                key={item.name || index} 
                                title={
                                <div className='d-flex flex-column justify-content-between align-items-center gap-1 px-1 py-1'>
                                    <p className='p-0 m-0 fw-bold text-uppercase'>{item.name}</p>
                                    <span className='p-0 m-0 text-capitalize text-success'>{item.state}</span>
                                </div>
                                } 
                                arrow
                                >
                                    <div>
                                        <ImageHolder image={item.icon} title={item.name || "Skill image"} pointer hover />
                                    </div>
                                </Tooltip>
                            )) :
                            <div className="text-danger fw-bold fs-3 text-nowrap">No skills!</div>
                        }
                    </ul>
                </motion.div>
            </div>

            <hr style={{height: "1px"}} className='w-100 bg-secondary bg-opacity-25' />

            <div className='container overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center py-5 px-md-3 rounded gap-3 gap-md-5'>
                <motion.h2
                    className='text-info fw-bold display-5'
                    initial={{y: "100vh"}}
                    animate={activeView ? {y:0} : {y: "100vh"}}
                    transition={{delay: 0.2, duration: 0.8}}
                    viewport={{once: true}}
                >
                    GitHub Contributions
                </motion.h2>

                <motion.div 
                style={{maxWidth: '420px', maxHeight: "130px"}} 
                className='rounded overflow-hidden flex-wrap w-100 d-flex flex-row justify-content-center align-items-center gap-2'
                initial={{y: "100vh"}}
                animate={activeView ? {y:0} : {y: "100vh"}}
                transition={{delay: 0.2, duration: 0.8}}
                viewport={{once: true}}
                >
                    <ImageHolder image={'./images/github-contributions.png'} title={"GitHub Contributions"} select />
                </motion.div>
            </div>
        </motion.section>
    )
}