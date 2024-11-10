import React from 'react'
import '@/style/skills.css'
import { IoLogoHtml5 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";  

const page = () => {
  return (
    <div className="skills">
    <h1 className="heading">my <strong>skills</strong></h1>

    <div className="boxes">
        <div className="box">
            <span className="icons"><IoLogoHtml5 /></span>
        </div>
        <div className="box">
            <span className="icons"><FaCss3Alt /></span>
        </div>
        <div className="box">
            <span className="icons"><SiJavascript /></span>
        </div>
        <div className="box">
            <span className="icons"><SiTypescript /></span>
        </div>
        <div className="box">
            <span className="icons"><RiReactjsLine /></span>
        </div>
        <div className="box">
            <span className="icons"><RiNextjsFill /></span>
        </div>
        <div className="box">
            <span className="icons"><SiTailwindcss /></span>
        </div>
        <div className="box">
            <span className="icons"><FaNodeJs /></span>
        </div>
    </div>
</div>
  )
}

export default page
