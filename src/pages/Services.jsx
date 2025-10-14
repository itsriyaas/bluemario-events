import React from 'react'
import ServiceSection from '../components/ServiceSection'
import { Helmet } from 'react-helmet'
function Services() {
  return (
    <>
    <Helmet>
        <title>Best Event Planner in Thrissur | Blue Mario Events</title>
        <meta
          name="description"
          content="Premier event decorators located in Thrissur, Kerala.Our team specializes in imaginative wedding decor, stage design
"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Event Planner in Thrissur, Kerala | Blue Mario Events " />
        <meta
          property="og:description"
          content="Premier event decorators located in Thrissur, Kerala.Our team specializes in imaginative wedding decor, stage design"
        />
        <meta property="og:url" content="https://www.bluemarioevents.com/" />
        <meta property="og:image" content="https://www.bluemarioevents.com/assets/bm_footer.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bluemarioevents.com/services" />
      </Helmet>
    <ServiceSection/>
    </>
  )
}

export default Services