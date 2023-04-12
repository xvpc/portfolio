import React, {useState, useEffect, useRef} from 'react'

import projectData from '../data/projects.json'
import introductionData from '../data/introduction.json'

// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

// Icons
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

import { FiArrowDown } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import { SlLink } from 'react-icons/sl'

// Liab
import Placeholder from 'react-bootstrap/Placeholder';

import Ripples from 'react-ripples'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import "swiper/css/effect-cards";

export default function Home() {
  const introductionRefs = useRef()
  const learnMoreRefs = useRef()
  const projectsRefs = useRef()
  const footerRefs = useRef()

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const introductionName = document.querySelector('.introduction-name')
    const introductionSwiper = document.querySelector('.introduction-swiper')

    const timeOut = setTimeout(() => {
      introductionName.classList.remove('move-items-top')
      introductionSwiper.classList.remove('move-items-right')
    }, 1000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  useEffect(() => {
    const projectContainer = document.querySelectorAll('.project-container')

    const handleScroll = () => {
      if(typeof window !== 'undefined'){
        const {scrollY} = window
        // console.log(scrollY)
        // Projects
        if(scrollY >= projectsRefs.current.scrollHeight){
          projectContainer.forEach((items) => {
            items.classList.remove('move-items-bottom')
          })
        }
      }
    }
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.addEventListener('scroll', handleScroll, true)
    }
  })

  return (
    <>
      <Head>
          <title>Viper - Mahmoud</title>
        <meta name="title" content='Viper - Mahmoud' />
        <meta name="description" content="A Software engineer / Web developer. I Enjoy Coding and Programming in general, but I shine more in Frontend development." />
        <meta name="keywords" content='viper, mahmoud, dev, programmer, programming, developer, website, portfolio, fiverr, discord, github, project, anime, whatsapp, react, freelancer, front end, back end, full stack, software engineer, custom website, animation, html, css, javascript, nextjs, bootstrap, company, IT' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ICONS */}
        <link rel="shortcut icon" type="image/x-icon" href='/favicon/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href='/favicon/apple-touch-icon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href='/favicon/favicon-32x32.png'/>
        <link rel="icon" type="image/png" sizes="16x16" href='/favicon/favicon-16x16.png'/>
      </Head>
      
      <div className={`text-white bg-dark main-content d-flex flex-column justify-content-between min-vh-100`}>
        <header>
          <nav className='w-100 bg-info p-2' id='navbar'>
            <div className='navbar-container container h-100 fs-5 d-flex flex-column flex-sm-row flex-wrap justify-content-end align-items-center gap-3'>
                <Link className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="https://github.com/xvpc" target='_blank'>
                  <AiFillGithub />
                  <span>GitHub</span>
                </Link>
                <Link className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="https://www.linkedin.com/in/mahmoud-nabil-52a031268" target='_blank'>
                  <AiFillLinkedin />
                  <span>LinkedIn</span>
                </Link>
                <span onClick={() => {
                  footerRefs.current.scrollIntoView({behavior: 'smooth'})
                }} className={`text-dark hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`}>Contact Me?</span>
            </div>
          </nav>
        </header>

        <main className='container-fluid px-0 mb-auto'>
          <div className='main-container d-flex flex-column justify-content-between align-items-center gap-5'>
            {/*  style={{height: '800px'}} */}
            <div className='banner-video-container overflow-hidden m-0 p-0 w-100'>
              <video style={{objectFit: 'cover'}} className='w-100 h-100 p-0 m-0' src='../public/res/bannervid.mp4' autoPlay muted />
            </div>

            {/* Introduction */}
            <div ref={introductionRefs} className='w-100 introduction-container' id='introduction'>
              <div className='container py-5 overflow-hidden d-flex flex-column flex-md-row justify-content-between align-items-center gap-5'>
                <div className='w-50 text-center d-flex flex-column justify-content-center align-items-center'>
                  <h1 className='introduction-name move-items-top p-0 m-0 display-2 fw-bolder font-monospace'>Mahmoud Nabil</h1>
                </div>

                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                style={{height: '300px', maxWidth: '220px'}} 
                className='introduction-swiper move-items-right shadow-lg'>
                  {
                    introductionData && introductionData.map((items, index) => {

                      return(
                        <SwiperSlide style={{background: `center / cover no-repeat ${items.color || 'rgba(30, 187, 235, 0.829)'} url(${items.image})`}} key={index} className={`introduction-swiper-card p-3 d-flex flex-column justify-content-center align-items-start gap-1`}>
                          <h4 className='fw-bold border-bottom'>{items?.name}</h4>
                          {loaded ?
                          items?.button ? 
                          <button onClick={() => {
                            learnMoreRefs.current.scrollIntoView({behavior: 'smooth'})
                          }} type='button' className='btn btn-info text-white'>Learn More <MdKeyboardArrowDown /></button> :
                          <p style={{fontSize: '12px'}}>{items?.description}</p>
                          :
                          <Placeholder className='w-75' as="p" animation="wave">
                            <Placeholder xs={12} />
                            <Placeholder xs={10} />
                            <Placeholder xs={8} />
                          </Placeholder>
                          }
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
            </div>

            {/* Learn More */}
            <div ref={learnMoreRefs} className='learn-container border-top border-bottom border-secondary container d-flex flex-column text-center justify-content-center align-items-center gap-3' id='learn-more'>
              <h3 className='hover-effect fw-bold text-dark'>How It Works?</h3>

              <ol className="list-group list-group-numbered text-start w-100">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="ms-2 fw-bold">Website Design</div>
                    <p className='p-0 m-0 ms-4'>The client shares the design of the website with me in any format psd, figma, xd, sketch, etc...</p>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="ms-2 fw-bold">Understanding the requirements</div>
                    <p className='p-0 m-0 ms-4'>I will go through the design of the website to understand it and know what the project is about.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="ms-2 fw-bold">Deal</div>
                    <p className='p-0 m-0 ms-4'>Time and price will be decided according to the complexity of the project. After agreeing on a deal, I will start working on the project.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="ms-2 fw-bold">Delivery</div>
                    <p className='p-0 m-0 ms-4'>The project will be completed and delivered within the agreed time.</p>
                  </div>
                </li>
              </ol>

              <h6 className='text-center p-0 m-0'>
                Interested? Check out my Fiverr 
                <Ripples className='mt-2 btn btn-success w-100'>
                  <Link href='https://www.fiverr.com/xviper123' target='_blank' className='w-100 text-white text-center'><TbBrandFiverr className='fs-5 fw-bold' /></Link>
                </Ripples>
                </h6>
            </div>

            {/* Projects */}
            <div ref={projectsRefs} className='projects-container overflow-hidden container d-flex flex-column justify-content-center align-items-center gap-3' id='projects'>
              <div onClick={() => {
                projectsRefs.current.scrollIntoView({behavior: 'smooth'})
              }} className={`text-white border-secondary d-flex flex-column justify-content-center align-items-center gap-1 border-bottom py-2 px-3 w-auto`}>
                <span>Check My Projects</span>
                <FiArrowDown className='projects-arrow fs-5' />
              </div>
              <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                {
                  projectData && projectData.map(items => {
                    const {name, image, link, repo} = items
                    
                    return(
                      <div key={name} style={{width: '250px', height: '200px'}} className='project-container move-items-bottom d-flex flex-column justify-content-center align-items-center rounded px-2 py-3 gap-2'>
                        {loaded ?
                        <Link className='rounded overflow-hidden shadow bg-dark' title={name || ''} href={link || '#'} target='_blank'>
                            <Image style={{objectFit: 'cover'}} className='img-fluid' src={image || '/images/placeholder2.png'} height='1080' width='1920' alt='Inroduction Image' />
                        </Link> :
                        <Placeholder className='rounded overflow-hidden h-100 w-100' as={'span'} animation="glow">
                            <Placeholder className="w-100 h-100" lg={10} />
                        </Placeholder>
                        }
            
                        <div style={{fontSize: '30px'}} className='w-100 d-flex flex-row justify-content-center align-items-center gap-2'>
                            {loaded ?
                            <Link className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' title={link || ''} href={link || '#'} target='_blank'>
                                <SlLink />
                            </Link> :
                            <Placeholder className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' as={'a'} animation="wave">
                                <Placeholder lg={6} />
                            </Placeholder>
                            }
            
                            {loaded ?
                            <Link className={`text-white w-100 p-2 d-flex text-center align-items-center justify-content-center rounded`} title={repo || ''} href={repo || '#'} target='_blank'>
                                <AiFillGithub />
                            </Link> :
                            <Placeholder className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' as={'a'} animation="wave">
                                <Placeholder lg={6} />
                            </Placeholder>
                            }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </main>

        <footer>
          <div ref={footerRefs} id='footer' className='w-100 p-1 bg-black text-white'>
            <div className='footer-container container d-flex flex-row justify-content-center align-items-center gap-3'>
              <p className='fs-5 p-0 m-0 fw-bold'>Contact:</p>
              <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                <div style={{fontSize: '12px'}} className='d-flex flex-row justify-content-center align-items-center gap-1'>
                  <FaDiscord />
                  <span>Viper#0003</span>
                </div>
                <div style={{fontSize: '12px'}} className='d-flex flex-row justify-content-center align-items-center gap-1'>
                  <AiOutlineWhatsApp />
                  <span>0201007936126</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
