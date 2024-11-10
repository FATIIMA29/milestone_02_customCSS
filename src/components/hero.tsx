import React from 'react'
import '../style/hero.css'
import Image from 'next/image'
import Hero from '../../public/heroo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import Link from 'next/link';
import { MdOutlineFileDownload } from 'react-icons/md';
  
const hero = () => {
  return (
    <div className='hero'>
      {/* left */}
      <div className='left'>
      <p className='hello'>Hello I'm  </p> <h1 data-aos="zoom-in-up"><i>FATIMA AKIF</i> </h1>
          <h2 data-aos="zoom-in-up">Frontend developer </h2>
         <h2 data-aos="zoom-in-up">Based in Pakistan. </h2>
         <br />
         <hr />
         <p className='explore'>Explore my portfolio to see my latest projects and skills.</p>
         <br />
         <button className='resume'>
                <Link href='https://hackathon-milestones-kvxm15zlt-fatima-akifs-projects.vercel.app/' className='resume-link'>resume <MdOutlineFileDownload className='icon'/></Link>
            </button>
            <br />
            <br />
         <div>
          <Link className='links' href='https://github.com/FATIIMA29' target='blank'><FaGithub size={30} /></Link>
          <Link  className='links' href='https://www.linkedin.com/in/fatima-akif-312640278/' target='blank'> <FaLinkedin  size={30}/></Link>
          <Link className='links' href='https://vercel.com/fatima-akifs-projects' target='blank'> <TbBrandVercel  size={30} /></Link>
          
         </div>
      </div>
      {/* right */}
      <div>
     <Image  src={Hero} alt='image' className='img'></Image>
      </div>
      
    </div>
  )
}

export default hero
