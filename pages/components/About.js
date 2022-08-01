import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react'

function About(abo) {
  console.log(abo);

const {aboutme} = abo.abo.fields; 
console.log(aboutme);
    return (
    <div>{documentToReactComponents(aboutme)}</div>
  )
}

export default About