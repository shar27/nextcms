import React from 'react'
import Link from 'next/link'


function TopHeader() {
  return (
    <div className="w-full bg-white text-black font-bold flex flex-col lg:flex-row justify-center 
    lg:justify-between p-2 text-lg">
       
      <Link className="text-black" href="mailto:hello@webdesignhighwycombe.co.uk">
        📧hello@webdesignhighwycombe.co.uk
      </Link>
   
<Link className="text-black" href="tel:0333 360 6113">
      📞 0333 360 6113
      </Link>
      </div>
   
  )
}

export default TopHeader