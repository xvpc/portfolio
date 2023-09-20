import React from 'react'

// Nextjs
import Link from 'next/link';

// Icons
import { AiFillGithub } from "react-icons/ai";
import { SlLink } from 'react-icons/sl'

// Lib
import ImageHolder from '@/lib/ImageHolder';


// Framer motion
import { motion } from "framer-motion"

type ProjectContainerProps = {
    name: string,
    image?: string, 
    link: string,
    repo?: string,
    description?: string
}

export default function ProjectContainer({name, image, link, repo, description}: ProjectContainerProps) {

    return (
        <motion.div 
        style={{maxWidth: '1250px', zIndex: '1'}} 
        className='shadow bg-black bg-opacity-50 rounded overflow-hidden d-flex flex-row flex-wrap flex-md-nowrap justify-content-center justify-content-md-start align-items-center p-0 gap-3'
        initial={{y: "100px", opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        // viewport={{once: true}}
        >
            <Link href={link || "#"} style={{maxWidth: '500px'}}  className='opacity-hover rounded overflow-hidden my-0 my-md-4'>
                <ImageHolder image={image} title={name || "Project image"} />
            </Link>
            <div className='overflow-hidden d-flex flex-column justify-content-center justify-content-md-between algin-items-center gap-3 px-2 pb-3 pb-md-0 text-center text-md-start'>
                <motion.h2 
                className='fw-bold'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                >
                    {name || ""}
                </motion.h2>
                <motion.p style={{fontSize: 12}} 
                className='p-0 m-0 fw-normal text-white-50 text-center text-md-start m-auto m-md-0 text-wrap w-75' 
                title={description || name || ""}
                initial={{y: "50px", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
                >
                    {description || name || ""}
                </motion.p>

                <div className='mt-5 d-flex flex-row justify-content-center justify-content-md-start align-items-center gap-4'>
                    <Link 
                    className='bg-black py-3 px-5 d-flex text-center align-items-center justify-content-center rounded' 
                    title={link || ''} href={link || '#'} target='_blank'>
                        <SlLink />
                    </Link>
    
                    <Link 
                    className='bg-black py-3 px-5 d-flex text-center align-items-center justify-content-center rounded' 
                    title={repo || ''} href={repo || '#'} target='_blank'>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
