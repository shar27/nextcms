import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function ProductBikes({pro}) {

  console.log(pro);
const {title, thumbnail, quantity, description} = pro.fields;


  return (
    <div className='p-4 '>
     {
      
        <div className='text-center'>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={500}
          height={500}
        />
      <h3 className='text-2xl font-bold'>{title}</h3>
      <div style={{color: description === 'SOLD'? 'text-red-500': 'black'}} className='text-black font-bold'>{documentToReactComponents(description)}</div>
      <h4 className='text-xl font-bold'>In stock: {quantity}</h4>
      <section className='mt-5'>
      <button className='bg-red-500 text-white font-bold p-4
        rounded-sm
      '>Get a quote</button>
      </section>
        </div>
      
      }
      
    </div>
     
  )
}

export default ProductBikes