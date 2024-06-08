import React from 'react'
import Link from 'next/link'

function TopHeader() {
  return (
    <div className="w-full bg-black text-white font-bold flex justify-between p-2 text-xl">
       
      <Link href="mailto:hello@webdesignhighwycombe.co.uk">
 
📧 hello@webdesignhighwycombe.co.uk
      </Link>
<Link href="tel:0333 360 6113">
      📞 0333 360 6113
      </Link>
      </div>
   
  )
}

export default TopHeader