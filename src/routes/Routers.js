import React from 'react'

import {Routes , Route, Navigate} from 'react-router-dom'



import Home1 from '../pages/Home1'
import Contact from '../pages/Contact'
import Market from '../pages/Market'
import Create from '../pages/Create'
import EditProfile from  '../pages/EditProfile'
import Wallet from '../pages/Wallet'
import SellerProfile from '../pages/SellerProfile'
import NftDetails from '../pages/NftDetails'

const Routers = () => {
  return 
  <Routes>
    <Route path ='/' element={< Navigate to ='/home' />} />
    <Route  path='/home' element={< Navigate to ='/Home1'/>} />
    <Route  path='/market' element={< Navigate to ='/Market'/>} />
    <Route  path='/contact' element={< Navigate to ='/Contact'/>} />
    <Route  path='/create' element={< Navigate to ='/Create'/>} />
    <Route  path='/wallet' element={< Navigate to ='/Wallet'/>} />
    <Route  path='/edit-profile' element={< Navigate to ='/EditProfile'/>} />
    <Route  path='/seller-profile' element={< Navigate to ='/SellerProfile'/>} />
  </Routes>
  

}


export default Routers