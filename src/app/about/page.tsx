import React from 'react'
import Image from 'next/image'
import image2 from '../../../public/about.png'
import '@/style/about.css'

const page = () => {
  return (
    <div >
        <h1 className='heading'>About me</h1>
        <div className='about'>
      <div className='about1'>
        <Image src={image2} alt='image' className='image'></Image>
      </div>
      <div className='about2'>
        <p className='me'>Hi there! I'm Fatima AKIF, a dedicated web developer and data scientist.</p>
        <p className='me'>Currently pursuing a BS in Economics and Finance at NED University.</p>
        <p className='me'>I've been passionate about technology since 2023 when I first enrolled</p>
        <p className='me'>in a web and app development course at SMIT. This ignited my interest</p>
        <p className='me'>in programming, leading me to pursue a Certified Cloud Applied</p>
        <p className='me'>Generative AI Engineer (GenEng) certification from GIAIC.</p>
    </div>
      </div>
    </div>
  )
}

export default page
