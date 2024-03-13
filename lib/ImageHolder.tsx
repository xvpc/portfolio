import React from 'react'

type ImageHolderProps = {
    image?: string,
    title?: string,
    pointer?: boolean,
    hover?: boolean,
    select?: boolean
}

export default function ImageHolder({ image, title, pointer, hover, select }: ImageHolderProps) {

    // style={{objectFit: 'cover'}}
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
        onError={(e) => {
            e.currentTarget.src = './images/placeholder2.png';
            e.currentTarget.onerror = null
        }} 
        className={`img-fluid h-100 ${select ? "" : "remove-selecting"} ${hover ? "opacity-hover" : ""}`}
        style={{cursor: pointer ? "pointer" : "auto"}}
        src={image}  
        title={title} 
        alt={title || "Image placeholder"} 
        />
    )
}
