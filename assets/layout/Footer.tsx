import Link from 'next/link';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
<footer className="footer relative bottom-0 right-0 items-center py-4 px-8 bg-purple-700 text-neutral-content">
  <aside className="items-center grid-flow-col"> 
    <p className='text-white'>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link href={'https://x.com/Luftjunkie'}><FaTwitter className="text-white hover:text-zinc-700 transition-all text-2xl"/></Link>
  
  </nav>
</footer>
  )
}

export default Footer