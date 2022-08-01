import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react'

function Offers(offer) {
  
  const {specialOffers} = offer.offer.fields;
    return (
    <div className='text-xl leading-8'>{documentToReactComponents(specialOffers)}</div>
  )
}

export default Offers