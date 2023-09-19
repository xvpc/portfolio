import React from 'react'

type ImageHolderProps = {
    image?: string | null,
    title?: string
}

export default function ImageHolder({image, title}: ImageHolderProps) {

    // style={{objectFit: 'cover'}}
    return (
        <img className='img-fluid ' src={image || './images/placeholder2.png'}  alt={title || "Image placeholder"} />
    )
}
