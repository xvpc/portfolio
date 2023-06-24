import React from 'react'

// Components
import Introduction from './sections/Introduction';
import Learnmore from './sections/Learnmore';
import Projects from './sections/Projects';
import Interested from './sections/Interested';
import Skills from './sections/Skills';
import ContactMe from './sections/Contact';


export default function Home() {

    // 
    return (
        <div className='main-container d-flex flex-column justify-content-between align-items-center'>

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
            <ContactMe />

        </div>
    )
}
