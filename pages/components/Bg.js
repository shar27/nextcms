import React from 'react'
import Image from 'next/image'
function Bg(h) {
  
 

  const {url} = h.h.fields.heroBg.fields.file;

  return (
    <div>
      
    <Image 
    src={'https:'+ url}
    className='opacity-70'
    layout='fill'


    />
 </div>
  )
}

export default Bg