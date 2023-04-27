import React, { useState, useEffect, useRef } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link';

import projectData from '../../data/projects.json'

// Icons
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FiArrowDown } from "react-icons/fi";
import { SlLink } from 'react-icons/sl'

// Liab
import Placeholder from 'react-bootstrap/Placeholder';

export default function Projects() {
    const projectsRefs = useRef()

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])


    useEffect(() => {
        const projectContainer = document.querySelectorAll('.project-container')

        const handleScroll = () => {
            if(typeof window !== 'undefined'){
                const {scrollY} = window
                // console.log('scrollY',scrollY)
                // Projects
                if(scrollY >= projectsRefs.current.clientHeight){
                    projectContainer.forEach((items) => {
                        items.classList.remove('move-items-bottom')
                    })
                }else{
                    projectContainer.forEach((items) => {
                        items.classList.add('move-items-bottom')
                    })
                }
            }
        }
        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.addEventListener('scroll', handleScroll, true)
        }
    }, [])

    
    // 
    return (
        <div ref={projectsRefs} className='projects-container overflow-hidden container-fluid d-flex flex-column justify-content-center align-items-center gap-3' id='projects'>
            <div onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'}) } 
            className={`text-white border-secondary d-flex flex-column justify-content-center align-items-center gap-1 border-bottom py-2 px-3 w-auto`}>
                <span>Recent Projects</span>
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
                                    <img style={{objectFit: 'cover'}} className='img-fluid' src={image || './images/placeholder2.png'} height='1080' width='1920' alt='Project Images' />
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
    )
}
