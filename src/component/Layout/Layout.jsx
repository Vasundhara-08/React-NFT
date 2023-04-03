import React from 'react';
import Routers from '../../routes/Routers';
import Header from '../Header/Header';
import  Footer from '../Footer/Footer';
import Home1 from '../../pages/Home1';

const Layout = () => {
  return (
    <>
    <Header/>
    {/* <div>
      <Routers/>
    </div> */}

    <Home1/>
    
      <Footer/> 
    </>
  );
};

export default Layout;