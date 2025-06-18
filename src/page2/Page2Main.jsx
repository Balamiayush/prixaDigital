import React from 'react';
import { useParams } from 'react-router-dom';
import Page2HeroContainer from './Page2HeroContainer';
import DetailsPage from './DetailsPage';
import ImgSliderAnimation from '../components/ImgSliderAnimation';
import Overview from './Overview';
import Page6 from '../pages/Page6';
import Page7 from '../pages/Page7';
import Navbar from '../components/Navbar';

const products = [
  {
    title: "ThirdFactor Ai",
    description: "We build websites that feel just right...",
    tags: ["Website", "Ai", "AI Product Design"],
    image: "/images/thirdfactorpage2.png",
  },
  {
    title: "Speak Up Nepal",
    description: "The platform for Nepal to express issues...",
    tags: ["Nonprofit", "Civic", "Web"],
    image: "/images/speakupnepal.png",
  },
  {
    title: "Bearyfine",
    description: "Our second year was filled with great events...",
    tags: ["Nonprofit", "Civic", "Web"],
    image: "/images/bearyfine.png",
  },
  
];

const Page2Main = () => {
  const { slug } = useParams();
  const selectedProduct = products.find(p =>
    p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!selectedProduct) {
    return <div className="text-white p-10">404 - Project Not Found</div>;
  }
  
  return (
    <div className='w-full text-white overflow-hidden'>
      <Navbar/>

      <Page2HeroContainer product={selectedProduct} />
      <DetailsPage />
      <ImgSliderAnimation />
      <Overview />
      <Page6 />
      <Page7 />
    </div>
  );
};

export default Page2Main;
