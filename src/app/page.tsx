"use client"
import Hero from '@/components/hero'
import Skills from '@/app/skills/page'
import React, {useEffect} from 'react'
import About from '@/app/about/page'
import Project from '@/app/projects/page'
import Contact from '@/app/contact/page'
import Aos from 'aos';
export default function Home() {
  useEffect(()=>{Aos.init({
    easing:'ease-out-back',
    duration:1200,
    delay:100,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset:160, 
  });
  Aos.refresh()
},[]);

  return (

    <div>
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
  <Contact/>
 
    </div>
  );
}
