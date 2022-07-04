import 'antd/dist/antd.min.css';
import './App.css';

import React from 'react';

import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';

import Profile from './components/Profile';
import MainLayout from './components/MainLayout';

import ComingSoon from './components/ComingSoon';
import Candidates from './components/Candidates';






const  App = () => {

  const onSearch = (value) => console.log(value);
  return (
    
    
    <div className=" fixed flex w-full h-full">

           <Sidebar  />
    <div className="bg-white-600 flex-0 p-0 text-2xl font-bold overflow-auto  ">
           

            
  

      
  <div>
       <Routes>
       <Route  path="/candidates" element={<Candidates />} />
       <Route  path="/inbox" element={ <MainLayout />} />
       <Route  path="/profile" element={ <Profile />} />
       <Route  path="/soon" element={ <ComingSoon />} />
     
              
       </Routes>
      </div>



</div>
          </div>
         

    
  );
}

export default App;


























