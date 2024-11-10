
import Hero from '@/components/hero'
import Skills from '@/app/skills/page'

import About from '@/app/about/page'
import Project from '@/app/projects/page'
import Contact from '@/app/contact/page'

export default function Home() {
 

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
