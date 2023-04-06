import React, {useState, useEffect} from 'react'

// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

// Icons
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { SlLink } from "react-icons/sl";

// Liab
import Ripples from 'react-ripples'

export default function Home() {
  // Light Mode
  const [mode, setMode] = useState('light')
  const handleMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }

  return (
    <>
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`${mode === 'light' ? 'bg-white text-dark' : 'bg-dark text-white'} main-content d-flex flex-column justify-content-between min-vh-100`}>
        <header>
          <div id='navbar' className='w-100 bg-info p-2'>
            <div className='navbar-container container h-100 fs-5 d-flex flex-row justify-content-between align-items-center'>
              <div className=''>
                {mode === 'light' ?
                <button onClick={handleMode} className='btn btn-outline-light border-0 rounded-circle'>
                  <MdOutlineDarkMode />
                </button> :
                <button onClick={handleMode} className='btn btn-outline-dark border-0 rounded-circle'>
                  <MdOutlineLightMode />
                </button>
                }
              </div>
              <div className='d-flex flex-column flex-sm-row flex-wrap justify-content-end align-items-center gap-3'>
                <Link className={`${mode === 'light' ? 'text-dark' : 'text-white'} hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="#">
                  <AiFillGithub />
                  <span className=''>GitHub</span>
                </Link>
                <Link className={`${mode === 'light' ? 'text-dark' : 'text-white'} hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="#">
                  <AiFillLinkedin />
                  <span className=''>LinkedIn</span>
                </Link>
                <Link className={`${mode === 'light' ? 'text-dark' : 'text-white'} hover-effect d-flex flex-row justify-content-center align-items-center gap-1 fw-bold`} href="#footer">
                  <span className=''>Contact Me?</span>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className='container-fluid my-5'>
          <div className='main-container d-flex flex-column justify-content-between align-items-center gap-5'>
            <div className='introduction-container' id='introduction'>
              {/* <div className={`${mode === 'light' ? 'bg-dark' : 'bg-white'} d-none d-md-inline-block introduction-top-bollets`}></div> */}
              {/* <div className={`${mode === 'light' ? 'bg-dark' : 'bg-white'} d-none d-md-inline-block introduction-bottom-bollets`}></div> */}

              <div className='container d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
                <div className='introduction-image order-1 order-md-0 shadow-lg'>
                  <Image src='/images/nerd.gif' height='150' width='230' alt='Inroduction Image' />
                </div>
                <div className='introduction-description text-center d-flex flex-column justify-content-center align-items-center gap-3'>
                  <h3 className='p-0 m-0 fw-bold'>User Name</h3>
                  <p style={{fontSize: '15px'}} className='p-0 m-0 w-75 fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rerum a. Iste, ipsum quae unde obcaecati iure repellendus blanditiis officiis nam debitis sapiente et atque!</p>
                </div>
              </div>
            </div>

            <div className='qanda-container border border-info border-1 rounded shadow-lg container p-3 d-flex flex-column justify-content-start align-items-center gap-3' id='qanda'>
              <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                <h4 className='fw-bold'>Who Are We?</h4>
                <p className='ps-3 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem laudantium illum harum ad cumque maxime est esse asperiores, nesciunt, ea quaerat quibusdam ratione voluptatem rerum exercitationem nulla eligendi! Quis!</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                <h4 className='fw-bold'>Why Us?</h4>
                <p className='ps-3 text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, fugiat libero voluptatum inventore pariatur atque qui, quo aut rerum exercitationem aliquam laborum animi reprehenderit. Fuga aperiam impedit, eum nulla necessitatibus perspiciatis non quas sequi, facilis ea nihil saepe aut tenetur aliquid ex praesentium molestiae corporis! Est praesentium possimus officiis recusandae.</p>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                <h4 className='fw-bold'>How It Works?</h4>
                <p className='ps-3 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti laborum laboriosam temporibus praesentium laudantium quasi a vero, impedit blanditiis fuga vitae aliquid voluptatibus sunt tenetur adipisci beatae minus obcaecati.</p>
              </div>
            </div>
            <div className='projects-container container d-flex flex-column justify-content-center align-items-center gap-2' id='projects'>
              <div className={`${mode === 'light' ? 'border-black text-black' : 'border-white text-white'} border fw-bold py-2 px-3 w-auto`}>Projects Example</div>
              <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                <div style={{width: '250px', height: '150px'}} className='project-container d-flex flex-column justify-content-center align-items-center rounded px-2'>
                  <Link className='rounded-1 overflow-hidden shadow bg-dark' href='#'>
                    <Image style={{objectFit: 'cover'}} className='img-fluid h-100' src='/images/siteimgs/home.png' height='1080' width='1920' alt='Inroduction Image' />
                  </Link>
                  <div style={{fontSize: '25px'}} className='project-container-overlay d-flex flex-row justify-content-center align-items-center'>
                    <Ripples color='#adb5bd'>
                      <Link title='tpanime.com' href='#' className='border-bottom border-black d-flex text-center align-items-center justify-content-center'>
                        <SlLink />
                      </Link>
                    </Ripples>
                    
                    <Ripples color='#adb5bd'>
                      <Link title='GitHub' href='#projects' className={`${mode === 'light' ? 'text-black' : 'text-white'} d-flex text-center align-items-center justify-content-center`}>
                        <AiFillGithub />
                      </Link>
                    </Ripples>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
        <footer>
          <div id='footer' className='w-100 p-1 bg-black text-white'>
            <div className='footer-container container d-flex flex-row justify-content-center align-items-center gap-3'>
              <p className='fs-5 p-0 m-0 fw-bold'>Contact:</p>
              <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                <div style={{fontSize: '12px'}} className='d-flex flex-row justify-content-center align-items-center gap-1'>
                  <FaDiscord />
                  <span className=''>Viper#0003</span>
                </div>
                <div style={{fontSize: '12px'}} className='d-flex flex-row justify-content-center align-items-center gap-1'>
                  <AiOutlineWhatsApp />
                  <span className=''>0123456789</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
