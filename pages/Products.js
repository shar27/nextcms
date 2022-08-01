import React from 'react'

import ProductBikes from './components/ProductBikes';


import { createClient } from 'contentful';
import contentful from 'contentful'



export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

const res = await client.getEntries({
  content_type: 'product'
})

console.log(res);

return {
  props:{
    products: res.items
  }
}

}


function Products({products}) {
  
  return (
    <div className='p-4'>

      {products.map((product, prod)=> (
        <ProductBikes
        key={prod}
        product={product}
        />
      ))}

    </div>
  )
}

export default Products