import React, {useEffect, useState} from 'react'

// Cookies
import Cookies from "js-cookie";

// NextJs
import { useRouter } from 'next/router';

// Bootstrap
import { Form, Spinner } from 'react-bootstrap';

// Mui
import { Button } from '@mui/material';

// Utils
import isLoggedin from '@/utils/Loggedin';

export default function Login() {
    const router = useRouter()

    const [inputError, setInputError] = useState("")
    const [loading, setLoading] = useState<boolean>(false)

    const checkCookies = async() => {
        if(await isLoggedin()){
            router.replace('/admin')
        }else{
            setInputError("Wrong credentials!")
        }
    }

    const signIn = async(e: any) => {
        e.preventDefault()
        setLoading(true)
        if(e.target[0].value && e.target[1].value){
            setInputError("")
            Cookies.set("userName", `${e.target[0].value}`)
            Cookies.set("password", `${e.target[1].value}`)
            await checkCookies()
        }else{
            setInputError("Invalid Inputs")
        }
        setLoading(false)
    }
    

    return (
        <div className='container px-2 py-4 mt-5 text-center rounded overflow-hidden bg-black bg-opacity-25 d-flex flex-column justify-content-center algin-items-center gap-4'>
            <h2 className='text-white fw-bold'>Login</h2>

            <Form onSubmit={signIn} className='container d-flex flex-column justify-content-center align-items-center gap-4'>
                <Form.Group className='w-100 d-flex flex-row flex-wrap flex-sm-nowrap justify-content-between align-items-center gap-3'>
                    <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-bold' minLength={1} type='text' id='userName' name='userName' placeholder='username' />
                    <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-bold' type='password' id='password' name='password' placeholder='password' />
                </Form.Group>
                
                {
                    inputError ?
                    <span className='text-danger fw-bold text-center'>{inputError}</span>
                    : <></>
                }

                {
                loading ?
                <Button className='user-select-none rounded text-center text-white-50 d-flex flex-row justify-content-center align-items-center gap-2' variant="contained" disabled>
                    Validating..
                    <Spinner size='sm' animation='border' variant='primary' /> 
                </Button>
                :
                <Button type='submit' value='Send' variant='contained' className='text-capitalize'>SignIn</Button>
                }
            </Form> 
        </div>
    )
}
