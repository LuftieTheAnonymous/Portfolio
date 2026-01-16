import React, { useState } from 'react';
import classes from '../../styles/styles.module.css'
import Navbar from './Navbar';
import Drawer from './Drawer';
import Footer from './Footer';

type Props = {children:React.ReactNode}

function Layout({children}: Props) {

  const [hamburgerState, setHamburger]=useState(false);

  const closeHamburger=()=>{
    setHamburger(false);
  }

  return (<div className={`min-h-screen w-screen bg-zinc-800`}>
        <Navbar hamburgerOpen={hamburgerState} setHamburgerOpen={setHamburger} />
  

        <Drawer closeHamburger={closeHamburger} hamburgerState={hamburgerState}/>

    <div className={`h-full w-full bg-zinc-800 `}>  
{children}
</div>

<Footer />

  </div>)
}

export default Layout