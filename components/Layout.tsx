import React, { ReactNode } from 'react'

// Nextjs
import Link from 'next/link';
import Head from 'next/head';

// Lib
import ImageHolder from '@/lib/ImageHolder';

// Icons
import { BsArrowUpShort } from 'react-icons/bs';


type props = {
    children: ReactNode,
    title?: string
}

export default function Layout({ children, title }: props) {


    // 
    return (
        <>
            <Head>
                <title>{title || "Viper - Mahmoud"}</title>
                    <meta name="title" content={title || 'Viper - Mahmoud'} />
                    <meta name="description" content="Hello, my name is Mahmoud Nabil you may also know me as 'Viper'. I'm A web developer with +4 years of experience. I Enjoy Coding and Programming, but I shine more in Frontend development." />
                    <meta name="keywords" content='viper, mahmoud, dev, programmer, programming, developer, website, portfolio, fiverr, discord, github, project, anime, whatsapp, react, freelancer, front end, back end, full stack, software engineer, custom website, animation, html, css, javascript, nextjs, bootstrap, company, IT' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* ICONS */}
                    <link rel="shortcut icon" type="image/x-icon" href='./favicon/favicon.ico' />
                    <link rel="apple-touch-icon" sizes="180x180" href='./favicon/apple-touch-icon.png' />
                    <link rel="icon" type="image/png" sizes="32x32" href='./favicon/favicon-32x32.png'/>
                    <link rel="icon" type="image/png" sizes="16x16" href='./favicon/favicon-16x16.png'/>
            </Head>
            <div className='text-white night-bg main-content d-flex flex-column justify-content-between min-vh-100'>
                <header>
                    <nav className='container-fluid shadow-sm py-3 bg-black bg-opacity-75' id='navbar'>
                        <div className='align-center container d-flex flex-row flex-wrap justify-content-center justify-content-sm-between algin-items-center text-center gap-sm-4 gap-5'>
                            <Link href="/" title='Go Home' className='rounded overflow-hidden'>
                                <ImageHolder image={'./favicon/favicon-32x32.png'} title='Site Icon' />
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

                <main className='container-fluid px-0 mb-auto'>
                    {children}
                </main>

                <footer>
                    <div id='footer' className='w-100 py-2 px-1 bg-black text-white'>
                        <div style={{transition: 'var(--main-transition)'}} className='text-secondary container d-flex flex-row justify-content-between align-items-center gap-3'>
                            <BsArrowUpShort size={25} style={{cursor: "pointer"}} className='opacity-hover text-white bg-primary fs-4 rounded-circle p-1' title='Scroll up' onClick={() => document?.querySelector('#navbar')?.scrollIntoView({behavior: 'smooth'})} />
                            <span style={{fontSize: '12px'}}>{process.env.NEXT_PUBLIC_HOST || "xvpc"}&#169;{new Date().getFullYear()}</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
