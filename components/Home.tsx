import React, { useEffect, useState } from 'react'

// Components
import Introduction from './sections/Introduction';
import Learnmore from './sections/Learnmore';
import Projects from './sections/Projects';
import Interested from './sections/Interested';
import Skills from './sections/Skills';
import ContactUs from './sections/Contact';

// Mui
import { CircularProgress } from '@mui/material';


export default function Home() {
    // const [loaded, setLoaded] = useState(false)
    // useEffect(() => {
    //     let timeOut: ReturnType<typeof setTimeout>;
    //     timeOut = setTimeout(() => {
    //         setLoaded(true)
    //     }, 400)
        
    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // }, [])

    // 
    return (
        <div className='d-flex flex-column justify-content-between align-items-center'>
            
            {/* Introduction */}
            <Introduction />

            {/* Skills */}
            <Skills />

            {/* Projects */}
            <Projects />
            
            {/* Interested */}
            <Interested />

            {/* Learn More */}
            <Learnmore />

            {/* Contact Me */}
            <ContactUs />
        </div>
    )
}
