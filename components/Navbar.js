import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link' 
import Image from 'next/image'
const inage='/1.jpg'

function Navbar() {
  return (
    <nav className={styles.mainNav}>
      <div>
        <Image src={inage} width={900}
        height={180}/>
      </div>
      
        <ul>
          <li>
            <Link href="/">
           <a> Home</a>
           </Link>
            </li>
            <li><Link href="/about">
           <a> About</a>
           </Link></li>
              <li><Link href="/blog">
           <a> Blog</a>
           </Link></li>
                <li><Link href="/contact">
           <a> Contact</a>
           </Link></li>
        </ul>
       
      </nav>
      
  )
}

export default Navbar