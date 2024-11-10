import React from 'react'
import Image from 'next/image'
import project1 from '../../../public/projectt1.png'
import project2 from '../../../public/projectt2.png'
import project3 from '../../../public/governorweb.webp'
import project4 from '../../../public/project4.png'
import project5 from '../../../public/project5.png'
import '@/style/project.css'

const page = () => {
  return (
    <div className="projectt">
    <h1 className="heading">Projects</h1>
    <div className="projects">
        <div className="boxx" >
            <h2 className='h22'>Static Resume</h2>
            <Image src={project1} alt="Static Resume Image" className="imagee" />
            <p className="description">Simple Static Resume build by using HTML & CSS</p>
        </div>
        <div className="boxx">
            <h2 className='h22'> Shareable Resume builder</h2>
            <Image src={project2} alt="Dynamic Resume Image" className="imagee" />
            <p className="description">Shareable Resume builder by using HTML , CSS & Typescript</p>
        </div>
        <div className="boxx">
            <h2 className='h22'>Governor Initiative Website</h2>
            <Image src={project3} alt="Website Image" className="imagee" />
            <p className="description">The Governor House Initiative website clone  developed by using Next.js and Tailwind CSS</p>
        </div>
        <div className="boxx">
            <h2 className='h22'>Amazon website clone</h2>
            <Image src={project4} alt="amazon image" className="imagee" />
            <p className="description">Amazon website clone  developed by using html and CSS</p>
        </div>
        <div className="boxx">
            <h2 className='h22'>Portfolio</h2>
            <Image src={project5} alt="Portfolio Image" className="imagee" />
            <p className="description">MY second portfolio build by using Next.js and tailwind CSS</p>
        </div>
    </div>
</div>
  )
}

export default page
