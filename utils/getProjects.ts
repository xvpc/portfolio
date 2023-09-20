import React from 'react'

// Data
import projectData from '@/data/projects.json'

// Fetch
import axios from "axios"

const url = 'https://xvpc.dev/api/projects'

export default async function getProjects() {
    if(process.env.NODE_ENV === 'production'){
        try{
            const { data } = await axios.post(url)
            if(data?.error){
                console.log(data.error || "Something went wrong!");
                return projectData
            }else{
                return data.results
            }
        }catch(err: any){
            console.log(err.message || "Something went wrong!");
            return projectData
        }
    }else{
        return projectData
    }
}
