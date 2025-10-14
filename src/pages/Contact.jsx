import React from 'react'
import ContactSection from '../components/ContactSection'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
        <title>Birthday Event planner in Thrissur </title>
        <meta
          name="description"
          content="Blue Mario Events stands as the premier birthday event planner in Thrissur, specializing in personalized decorations, themed celebrations
"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Birthday Event planner in Thrissur " />
        <meta
          property="og:description"
          content="Blue Mario Events stands as the premier birthday event planner in Thrissur, specializing in personalized decorations, themed celebrations"
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/contact" />
      </Helmet>
    <ContactSection/>
    </>
  )
}

export default Contact