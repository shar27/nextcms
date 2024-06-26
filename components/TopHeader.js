import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { whatsapp } from './Imports'

function TopHeader() {
  return (
    <div className="w-full bg-black text-white font-bold flex flex-col lg:flex-row justify-center 
    lg:justify-between p-2 text-lg">
       
      <Link href="mailto:hello@webdesignhighwycombe.co.uk">
        📧hello@webdesignhighwycombe.co.uk
      </Link>
   
<Link href="tel:0333 360 6113">
      📞 0333 360 6113
      </Link>
      </div>
   
  )
}

export default TopHeader