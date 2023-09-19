import React, { useState, useEffect } from 'react'

// Data
import getProjects from '@/utils/getProjects';

// Icons
import { FiArrowDown } from "react-icons/fi";

// Framer motion
import { motion } from "framer-motion"

// Mui
import { CircularProgress } from '@mui/material';

// Components
import ProjectContainer from '../containers/ProjectContainer';

export default function Projects() {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        (async() => {
            setLoading(true)
            try{
                const req = await getProjects()
                setData(req)
            }catch(err: any){
                setError(err.message || "Something went wrong")
            }
            setLoading(false)
        })()
    }, [])

    
    // 
    return (
        <section 
        id='projects'
        className='extra-space bg-black bg-opacity-50 top-bottom-pattren-box overflow-hidden container-fluid d-flex flex-column justify-content-center align-items-center gap-3' 
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
            <div className='d-flex flex-column justify-content-center algin-items-center gap-4 px-0 px-md-2'>
                {
                    error ? <span className="text-danger fw-bold m-auto text-center">{error}</span> :
                    loading ? <CircularProgress className='m-auto' color="success" /> :
                    data && data.map((item: Record<string, string>, index: number) => {
                        
                        return(
                            <ProjectContainer 
                            key={item.name || index} 
                            name={item.name} 
                            image={item.image}
                            link={item.link}
                            repo={item.repo}
                            description={item.description}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
