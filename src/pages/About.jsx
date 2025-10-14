import React from 'react'
import AboutUs from '../components/AboutSection'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
        <title>Best Event Planner in Thrissur, Kerala | Blue Mario Events </title>
        <meta
          name="description"
          content="Blue Mario Events is a top event planner in Thrissur, providing expert wedding planning, theme decor, and comprehensive event management services in thrissur
"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Event Planner in Thrissur, Kerala | Blue Mario Events " />
        <meta
          property="og:description"
          content="Blue Mario Events is a top event planner in Thrissur, providing expert wedding planning, theme decor, and comprehensive event management services in thrissur"
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/about" />
      </Helmet>
    <AboutUs/>
    </>
  )
}

export default About
