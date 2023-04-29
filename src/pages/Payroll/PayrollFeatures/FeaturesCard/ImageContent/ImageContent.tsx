import React, { FC } from "react"

import "./ImageContent.css"

type ImageContentProps ={
  img?: any,
  height?: string,
  width?: string
}

const ImageContent:FC<ImageContentProps>  = ({img, height, width}) => {
  return (
    <div className="feature-img">
         <img style={{height: height, width: width }} src={img}  alt="rendahr"/>
    </div>
  )
}

export default ImageContent