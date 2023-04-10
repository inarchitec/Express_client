import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Service from '../../components/Service'

function Home() {
  return (
    <div className='home'>
    <Slider />
    <FeaturedProducts type="featured"/>
    <Categories />
    <Service/>
    <Contact/>
    </div>
    
  )
}

export default Home