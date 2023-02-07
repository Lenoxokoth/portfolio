import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Heropro from '../Component/Heropro'
import Email from '../Component/Email'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heropro heading="CONTACT." text="Let's have a chat."/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Contact
