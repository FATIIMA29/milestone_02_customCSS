import Link from 'next/link';
import React from 'react';
import '../style/navbar.css';


export default function navbar() {
  return (
    <div className='navbar'>
        {/* left */}
        <div >
        <h1 className='hover'>FA.</h1>
        </div>
        <div className='navbar-right' >
            <ul className='navbar-link'>
                <li>
                    <Link href='/' className='nav-link'><b>about me</b></Link>
                </li>
                <li>
                    <Link href='/skills' className='nav-link'><b>skills</b></Link>
                </li>
                <li>
                    <Link href='/projects ' className='nav-link'><b>projects</b></Link>
                </li>
                <li>
                    <Link href='/contact' className='nav-link'><b>contact me</b></Link>
                </li>
            </ul>
        </div>
       
    </div>
  )
}
