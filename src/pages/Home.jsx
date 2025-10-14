import React from 'react'
import SliderSection from '../components/SliderSection'
import AboutSection from '../components/About'
import TestimonialsSection from '../components/Testimonials'
import BookUsSection from '../components/ExploreWork'
import TasteSection from '../components/MoreAbout'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
      <Helmet>
        <title>Top Wedding Planner in Thrissur | Blue Mario Events</title>
        <meta
          name="description"
          content="The top Thrissur wedding planner at Blue Mario Events specializes in wedding decoration, stage design, and luxury planning services across Kerala.
"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Wedding Planner in Thrissur | Blue Mario Events" />
        <meta
          property="og:description"
          content="The top Thrissur wedding planner at Blue Mario Events specializes in wedding decoration, stage design, and luxury planning services across Kerala."
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/" />
      </Helmet>
      <SliderSection />
      <AboutSection />
      <TasteSection />
      <TestimonialsSection />
      <BookUsSection />
    </>
  )
}

export default Home