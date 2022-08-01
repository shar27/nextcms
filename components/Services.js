import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react'

function Services(service) {
 

  const {serviceList} = service.service.fields

  
    return (
    <ul className='list-disc'>{documentToReactComponents(serviceList)}</ul>
  )
}

export default Services