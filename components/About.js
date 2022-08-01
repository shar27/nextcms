import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react'

function About(abo) {
  

const {aboutme} = abo.abo.fields; 

    return (
    <div className='text-xl leading-8'>{documentToReactComponents(aboutme)}</div>
  )
}

export default About