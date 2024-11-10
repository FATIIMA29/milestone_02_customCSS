import React from 'react'
import '@/style/contact.css'
import Link from 'next/link'
const page = () => {
  return (
    <div >
      <h1 className='heading'>contact me </h1>
     <div className='contact'>
      <div className='contact1'>
      <div className="mb-6">
    <label htmlFor="name" >Name</label>
    <input type="text"  className="input-field" required />
     </div>
     <div className="mb-6">
    <label htmlFor="email" >Email</label>
    <input type="text" id="email" className="input-field" required />
     </div>
     <div className="mb-6">
    <label htmlFor="message">Message</label>
    <textarea name="message" rows={7} id="msg" className="input-field"></textarea>
    </div>
     <div>
    <button className="btn">Send</button>
    </div>
    </div>
    <div className='contact2'> 
      <h1 className='h11'>
        Let's talk for something special
      </h1>
     <h2 className='cont-link'>fatimaahaamughal@gmail.com</h2>

    </div>
    </div>
        </div>
   
  )
}

export default page



