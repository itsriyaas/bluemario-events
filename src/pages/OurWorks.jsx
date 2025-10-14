import React from 'react'
import GallerySection from '../components/GallerySection'
import { Helmet } from 'react-helmet'

function OurWorks() {
  return (
  <div id='about'>
    <Helmet>
        <title>Customized wedding planner in Kerala |  Blue Mario Events </title>
        <meta
          name="description"
          content="Explore Blue Mario Events, your tailored wedding planner in Kerala. We create distinctive weddings featuring personalized themes, sophisticated decor.
"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customized wedding planner in Kerala |  Blue Mario Events " />
        <meta
          property="og:description"
          content="Explore Blue Mario Events, your tailored wedding planner in Kerala. We create distinctive weddings featuring personalized themes, sophisticated decor."
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/our-work" />
      </Helmet>
    <GallerySection/>
    </div> 
  )
}

export default OurWorks