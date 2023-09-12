import React, { useState, useEffect } from 'react'

// Nextjs
import Image from 'next/image'
import Link from 'next/link';

// Data
import projectData from '../../data/projects.json'

// Icons
import { AiFillGithub } from "react-icons/ai";
import { FiArrowDown } from "react-icons/fi";
import { SlLink } from 'react-icons/sl'

// Lib
import ImageHolder from '@/lib/ImageHolder';

// Bootstrap
import Placeholder from 'react-bootstrap/Placeholder';

// Framer motion
import { motion } from "framer-motion"

export default function Projects() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    const [hover, setHover] = useState<string | null>(null)
    
    // 
    return (
        <div 
        id='projects'
        className='extra-space bg-black bg-opacity-75 top-bottom-pattren-box overflow-hidden container-fluid d-flex flex-column justify-content-center align-items-center gap-3' 
        >
            <div 
            onClick={() => document?.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})} 
            className={`text-white border-secondary d-flex flex-column justify-content-center align-items-center gap-1 border-bottom py-2 px-3 w-auto`}
            >
                <span>Recent Projects</span>
                <motion.div
                initial={{y:0}}
                animate={{y: ["0px", "0px", "0px", "-5px", "0px", "-5px", "0px", "0px"]}}
                transition={{duration: 1.5, repeat: Infinity}}
                >
                    <FiArrowDown className='fs-5' />
                </motion.div>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                {
                    projectData && projectData.map((items) => {
                        const {name, image, link, repo} = items
                        
                        return(
                            <motion.div 
                            key={name} 
                            onHoverStart={() => setHover(name)} 
                            onHoverEnd={() => setHover(null)} 
                            style={{width: '250px', height: '200px', zIndex: '1'}} 
                            className='position-relative d-flex flex-column justify-content-center align-items-center rounded px-2 py-3 gap-2'
                            initial={{y: "100px", opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                            >
                                <div style={{top: hover == name ? '0%' : '50%', width: hover == name ? '100%' : '0%', height: hover == name ? '100%' : '0%', zIndex: '-1', background: 'rgba(128, 128, 128, 0.349)', transition: 'var(--main-transition)'}} className='position-absolute rounded'></div>
                                {loaded ?
                                <Link style={{transform: hover == name ? 'scale3d(1, 1, 1)' : 'scale3d(1.1, 1.1, 1)', transition: 'all 0.4s linear', cursor: "pointer"}} className='rounded overflow-hidden shadow bg-dark' title={name || ''} href={link || '#'} target='_blank'>
                                    <ImageHolder image={image} title='Project Images' />
                                </Link> :
                                <Placeholder className='rounded overflow-hidden h-100 w-100' as={'span'} animation="glow">
                                    <Placeholder className="w-100 h-100" lg={10} />
                                </Placeholder>
                                }
                    
                                <div style={{fontSize: '30px'}} className='w-100 d-flex flex-row justify-content-center align-items-center gap-2'>
                                    {loaded ?
                                    <Link style={{opacity: hover == name ? '0.6' : '0', transform: hover == name ? 'translateY(0%)' : 'translateY(-100%)', zIndex: hover == name ? '1' : '-1', transition: 'var(--main-transition)', cursor: "pointer"}} 
                                    className='hover-black w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' 
                                    title={link || ''} href={link || '#'} target='_blank'>
                                        <SlLink />
                                    </Link> :
                                    <Placeholder className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' as={'a'} animation="wave">
                                        <Placeholder lg={6} />
                                    </Placeholder>
                                    }
                    
                                    {loaded ?
                                    <Link 
                                    style={{opacity: hover == name ? '0.6' : '0', transform: hover == name ? 'translateY(0%)' : 'translateY(-100%)', zIndex: hover == name ? '1' : '-1', transition: 'var(--main-transition)', cursor: "pointer"}} 
                                    className='hover-black text-white w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' title={repo || ''} href={repo || '#'} target='_blank'>
                                        <AiFillGithub />
                                    </Link> :
                                    <Placeholder className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' as={'a'} animation="wave">
                                        <Placeholder lg={6} />
                                    </Placeholder>
                                    }
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
