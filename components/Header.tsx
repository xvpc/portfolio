import React from 'react'

// NextJs
import Link from 'next/link'

// Lib
import ImageHolder from '@/lib/ImageHolder'

export default function Header() {
    
    return (
        <header>
            <nav className='container-fluid shadow-sm py-3 bg-black bg-opacity-75' id='navbar'>
                <div className='align-center container d-flex flex-row flex-wrap justify-content-center justify-content-sm-between algin-items-center text-center gap-sm-4 gap-5'>
                    <Link href="/" title='Go Home' style={{width: 30, height: 30}} className='rounded overflow-hidden'>
                        <ImageHolder image={'./favicon/android-chrome-512x512.png'} title='Site Icon' />
                    </Link>
                    <div style={{transition: 'var(--main-transition)', fontSize: '14px'}} className='d-flex flex-row flex-wrap justify-content-center justify-content-md-end align-items-center gap-3'>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#introduction')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Introduction</span>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#skills')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Skills</span>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Projects</span>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#interested')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Interested?</span>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#learn-more')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Learn More</span>
                        <span style={{cursor: 'pointer'}} onClick={() => document?.querySelector('#contact-us')?.scrollIntoView({behavior: 'smooth'})} className={`text-white hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Contact Us</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
