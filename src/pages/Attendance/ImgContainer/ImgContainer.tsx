import React, { FC } from "react"
import { Grid } from "@mui/material"
import "./ImgContainer.css"


type ImgContainerProps ={
  img?: any,
  align?: any,
  children?: any
}


const ImgContainer: FC<ImgContainerProps> = ({img, children, align}) => {
  return (
    <Grid xs={12} item md={5}  className="at-img-container">
       <img className="at-img" src={img} alt="calendar renda" /> 
       <div style={{textAlign: align, marginTop: "2rem"}}>
        {children}
       </div>
    </Grid>
  )
}

export default ImgContainer