import { Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

import { Form, Spinner } from 'react-bootstrap'

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [inputError, setInputError] = useState("")
    const [loading, setLoading] = useState<boolean>(false)

    // Toastify
    const toastifyError = (error: string) => 
    toast.error(String(error || 'Something went Wrong!'), {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

    const toastifySuccess = (results: string) => 
    toast.success(results || 'Sent Successfully', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        setLoading(true)
        const name = e.target[0].value || "";
        const link = e.target[1].value || "";
        const image = e.target[2].value || "";
        const repo = e.target[3].value || "";
        const description = e.target[4].value || "";

        if(!name && !link && !image && !repo && !description){ 
            setInputError("Invalid Inputs")
        }else{
            setInputError("")
            console.log(`${name} - ${link} - ${image} - ${repo} - ${description}`)
            const url = `https://xvpc.dev/api/projects/create?name=${name}&link=${link}&repo=${repo}&image=${image}&description=${description}&authorization=${process.env.NEXT_PUBLIC_API_KEY}`

            try{
                const { data } = await axios.post(url, {
                    // headers: {
                    //     authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
                    // },
                })
                if(data?.error){
                    toastifyError(data.error || "Something went wrong!")
                }else{
                    toastifySuccess("Project created successfully")
                }
            }catch(err: any){
                console.log(err.message || "Something went wrong!")
                toastifyError(err.message || "Something went wrong!")
            }
        }
        setLoading(false)
    }

    return (
        <div className='px-2 py-4 vh-100 text-center overflow-hidden bg-black bg-opacity-50 d-flex flex-column justify-content-center algin-items-center gap-5'>
            <h2 className='text-white fw-bold text-truncate'>Create New Project</h2>
            {process.env.NEXT_PUBLIC_API_KEY || "??"}
            <Form onSubmit={handleSubmit} className='container d-flex flex-column justify-content-center align-items-center gap-4'>
                <Form.Group className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <div className='d-flex flex-row flex-wrap flex-sm-nowrap justify-content-center align-items-center gap-3'>
                        <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-normal' minLength={4} type='text' id='name' name='name' placeholder='project name' />
                        <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-normal' minLength={4} type='url' id='link' name='link' placeholder='project link' />
                        <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-normal' minLength={4} type='url' id='image' name='image' placeholder='project image' />
                        <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-normal' minLength={4} type='url' id='repo' name='repo' placeholder='project repository' />
                    </div>
                    <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-normal' minLength={7} type='text' as='textarea' rows={8} id='description' name='description' placeholder='project description' />
                </Form.Group>
                
                {
                    inputError ?
                    <span className='text-danger fw-bold text-center'>{inputError}</span>
                    : <></>
                }

                {
                loading ?
                <Button className='user-select-none rounded text-center text-white-50 d-flex flex-row justify-content-center align-items-center gap-2' variant="contained" disabled>
                    Loading..
                    <Spinner size='sm' animation='border' variant='primary' /> 
                </Button>
                :
                <Button type='submit' value='Send' variant='contained' className='text-capitalize'>Submit</Button>
                }
            </Form> 

            <ToastContainer
            position='bottom-center'
            autoClose={5000}
            limit={10}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            />
        </div>
    )
}
