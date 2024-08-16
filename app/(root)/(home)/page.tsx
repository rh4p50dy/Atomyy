import React from 'react'
import Footer from '@/components/Footer/Footer';
import Intro from './Intro'
import Hero from './Hero'
import Faq from './Faq'
import Highlights from './Highlights'

function page() {
  return (
    <>
    <div >
      <Intro />
      <Hero />
      <Faq />
      <Highlights />
    </div>
    <Footer />
    </>
  )
}

export default page