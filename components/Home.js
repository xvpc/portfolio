import React, { useRef, useState } from 'react'

// Next
import Link from 'next/link';

// Icons
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

// Components
import Introduction from './sections/Introduction';
import Learnmore from './sections/Learnmore';
import Projects from './sections/Projects';
import AboutMe from './sections/Aboutme';
import Skills from './sections/Skills';
import ContactMe from './sections/Contact';

export default function Home() {
    const footerRefs = useRef()

    const [showDiscord, setShowDiscord] = useState(false)
    const [showGitHub, setShowGitHub] = useState(false)
    const [showWhatsapp, setShowWhatsapp] = useState(false)
    // 
    return (
        <div className={`text-white bg-dark main-content d-flex flex-column justify-content-between min-vh-100`}>
            <header>
            <nav className='w-100 bg-info shadow p-2' id='navbar'>
                <div className='navbar-container container h-100 fs-5 d-flex flex-column flex-sm-row flex-wrap justify-content-end align-items-center gap-3'>
                    <Link className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="https://github.com/xvpc" target='_blank'>
                        <AiFillGithub />
                        <span>GitHub</span>
                    </Link>
                    <Link className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="https://www.linkedin.com/in/mahmoud-nabil-52a031268" target='_blank'>
                        <AiFillLinkedin />
                        <span>LinkedIn</span>
                    </Link>
                    <span onClick={() => document.querySelector('#contact-me').scrollIntoView({behavior: 'smooth'})} className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Contact Me?</span>
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
                <div className='footer-container container d-flex flex-row justify-content-center align-items-center gap-3'>
                    <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3 p-1'>
                        <div style={{fontSize: '12px', transition: '2s', width: `${showDiscord ? 'auto' : '50px'}`}} className={`overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1`}>
                            <FaDiscord onClick={() => showDiscord ? setShowDiscord(false) : setShowDiscord(true)} />
                            {showDiscord && <span>Viper#0003</span>}
                        </div>
                        <div style={{fontSize: '12px', transition: '2s', width: `${showWhatsapp ? 'auto' : '50px'}`}} className={`overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1`}>
                            <AiOutlineWhatsApp onClick={() => showWhatsapp ? setShowWhatsapp(false) : setShowWhatsapp(true)} />
                            {showWhatsapp && <span>0201007936126</span>}
                        </div>
                        <div style={{fontSize: '12px', transition: '2s', width: `${showGitHub ? 'auto' : '50px'}`}} className={`overflow-hidden d-flex flex-row justify-content-center align-items-center gap-1`}>
                            <AiFillGithub onClick={() => showGitHub ? setShowGitHub(false) : setShowGitHub(true)} />
                            {showGitHub && <span>github.com/xvpc</span>}
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
