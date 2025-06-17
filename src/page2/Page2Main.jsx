import React from 'react'
import Page2HeroContainer from './Page2HeroContainer'
import DetailsPage from './DetailsPage'
import ImgSliderAnimation from '../components/ImgSliderAnimation'
import Overview from './Overview'
import Page6 from '../pages/Page6'
import Page7 from '../pages/Page7'

const Page2Main = () => {
  return (
    <div className='w-full text-white overflow-hidden'>
        <Page2HeroContainer/>
          <DetailsPage/>
      <ImgSliderAnimation/>
      <Overview/>
         <Page6 /> 
            <Page7 />
        </div>
  )
}

export default Page2Main