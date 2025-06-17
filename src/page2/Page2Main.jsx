import React from 'react'
import Page2HeroContainer from './Page2HeroContainer'
import DetailsPage from './DetailsPage'
import ImgSliderAnimation from '../components/ImgSliderAnimation'
import Overview from './Overview'

const Page2Main = () => {
  return (
    <div className='w-full text-white overflow-hidden'>
        <Page2HeroContainer/>
          <DetailsPage/>
      <ImgSliderAnimation/>
      <Overview/>
        
        </div>
  )
}

export default Page2Main