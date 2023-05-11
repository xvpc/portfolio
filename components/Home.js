import React, { useRef } from 'react'

// Components
import Introduction from './sections/Introduction';
import Learnmore from './sections/Learnmore';
import Projects from './sections/Projects';
import AboutMe from './sections/Aboutme';
import Skills from './sections/Skills';
import ContactMe from './sections/Contact';

export default function Home() {
    const footerRefs = useRef()

    // 
    return (
        <div className={`text-white bg-dark main-content d-flex flex-column justify-content-between min-vh-100`}>
            <header>
            <nav className='w-100 shadow-sm py-3' id='navbar'>
                <div style={{fontSize: '14px'}} className='navbar-container container h-100 d-flex flex-row flex-wrap justify-content-center justify-content-md-end align-items-center gap-4'>
                    <span onClick={() => document.querySelector('#introduction').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Introduction</span>
                    <span onClick={() => document.querySelector('#skills').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Skills</span>
                    <span onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Projects</span>
                    <span onClick={() => document.querySelector('#about').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>About me</span>
                    <span onClick={() => document.querySelector('#learn-more').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Learn More</span>
                    <span onClick={() => document.querySelector('#contact-me').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Contact Me?</span>
                </div>
            </nav>
            </header>

            <main className='container-fluid px-0 mb-auto'>
                <div className='main-container d-flex flex-column justify-content-between align-items-center'>

                    {/* Introduction */}
                    <Introduction />

                    {/* Skills */}
                    <Skills />

                    {/* Projects */}
                    <Projects />
                    
                    {/* AboutMe */}
                    <AboutMe />

                    {/* Learn More */}
                    <Learnmore />

                    {/* Contact Me */}
                    <ContactMe />

                </div>
            </main>

            <footer>
                <div ref={footerRefs} id='footer' className='w-100 p-1 bg-black text-white'>
                    <div className='footer-container text-secondary container d-flex flex-row justify-content-center align-items-center gap-3'>
                        xvpc.dev &#169; {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </div>
    )
}
