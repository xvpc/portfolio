import React from 'react'

// Data
import projectData from '@/data/projects.json'

export default async function getProjects() {

    if(process.env.NODE_ENV === 'production'){
        // return null
        return projectData
    }else{
        return projectData
    }
}
