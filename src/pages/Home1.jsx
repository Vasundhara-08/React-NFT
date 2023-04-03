import React from 'react';
import { Container } from 'reactstrap';
import HeroSection from '../component/UI/HeroSection';
import LiveImages from '../component/UI/Live-images/LiveImages';
import SellerSection from '../component/UI/Seller-section/SellerSection';

const Home1 = () => {
  return (
    <>
    <HeroSection/>
   <LiveImages/>
   <SellerSection/>
    </>

  );
}

export default Home1;