import React from 'react'
import Footer from '../Component/footer'
import Faq from '../Component/faq'
import Review from '../Component/review.jsx'
import What_we_do from '../Component/what_we_do'
import Car from '../Component/car'
import Drive from '../Component/drive'
import Explore from '../Component/explore'
import Blogs from '../Component/blogs'
import Trip from '../Component/trip'
import { Navbarr } from '../Component/navbar'
import Hero_section from '../Component/hero_section'
import UseRadioGroup, { RadioDefault } from '../Component/radio_btn'
import Trending_search from '../Component/trending_search'
import Trending_search_mobile from '../Component/trending_search_mobile.jsx'
import Eateries_to_explore from '../Component/eateries_to_explore.jsx'
import Explore_mobile from '../Component/explore_mobile.jsx'

const Landing_page = () => {
  return (
    <div>

      <Navbarr />
      <Hero_section/>
      <Trending_search_mobile/>
      <Trending_search />
      <Car />
      <What_we_do />
      <Explore_mobile/>
      <Drive />
      <Explore />
      <Blogs />
      <Trip />
      <Eateries_to_explore/>
      <Review />
      <Faq />
      <Footer />
    </div>
  )
}

export default Landing_page