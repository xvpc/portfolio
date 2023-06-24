import React from 'react'

// Icons
import { BsArrowUpShort } from 'react-icons/bs';


export default function Layout({ children }) {

    // 
    return (
        <div className='text-white bg-dark main-content d-flex flex-column justify-content-between min-vh-100'>
            <header>
            <nav className='w-100 shadow-sm py-3' id='navbar'>
                <div style={{transition: 'var(--main-transition)', fontSize: '14px'}} className='navbar-container container h-100 d-flex flex-row flex-wrap justify-content-center justify-content-md-end align-items-center gap-4'>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#introduction').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Introduction</span>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#skills').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Skills</span>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Projects</span>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#interested').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Interested?</span>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#learn-more').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Learn More</span>
                    <span style={{cursor: 'pointer'}} onClick={() => document.querySelector('#contact-me').scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Contact Me</span>
                </div>
            </nav>
            </header>

            <main className='container-fluid px-0 mb-auto'>
                {children}
            </main>

            <footer>
                <div id='footer' className='w-100 py-2 px-1 bg-black text-white'>
                    <div style={{transition: 'var(--main-transition)'}} className='text-secondary container d-flex flex-row justify-content-between align-items-center gap-3'>
                        <BsArrowUpShort style={{cursor: "pointer"}} className='opacity-hover text-white bg-primary fs-4 rounded-circle p-1' title='Scroll up' onClick={() => document.querySelector('#navbar').scrollIntoView({behavior: 'smooth'})} />
                        <span style={{fontSize: '12px'}}>xvpc.dev&#169;{new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
