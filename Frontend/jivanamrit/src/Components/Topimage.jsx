import React from 'react'
import './Topimg.css'

const Topimage = ({item,heading}) => {
  return (
    <div>
       <div className='cardtop' >
     
     <img className='imagecartop'
       src={item} width={"100%"} height={"380px"}
       alt="item"
     />
     <div className='overlaytop'>
       <div className='texttop'><h1>{heading}</h1></div>
     </div>
   </div>
    </div>
  )
}

export default Topimage
