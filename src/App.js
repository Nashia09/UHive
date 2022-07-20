import 'antd/dist/antd.min.css';
import './App.css';

import React, { useContext } from 'react';

import Sidebar from './components/Sidebar';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';

import Profile from './components/Profile';
import MainLayout from './components/MainLayout';

import ComingSoon from './components/ComingSoon';
import Candidates from './components/Candidates';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import MyCard from './components/MyCard';
import { Outlet } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';





const  App = () => {

  const onSearch = (value) => console.log(value);
 
  // const {currentUser} = useContext(AuthContext)

  const currentUser = true
  const RequireAuth = ({children}) => {

    
     return currentUser ? children : <Navigate to="/" replace={true} /> ;
    
  };
  console.log(currentUser)


  

  return (

    <AuthContextProvider>
     
   
    <div>
    <div className=" fixed flex w-full h-full">
    
     
      
    {/* <Sidebar  /> */}
<div className="bg-white-600 flex-0 p-0 text-2xl font-bold overflow-auto  ">

            {/* <Sidebar/> */}
   

  

      
  <div>
     
        
        
       <Routes>
       <Route  path="/candidates" element={<RequireAuth> <Sidebar><Candidates /></Sidebar> </RequireAuth>} />
       <Route  path="/inbox" element={<RequireAuth><MainLayout /></RequireAuth>} />
       <Route  path="/profile" element={<RequireAuth> <Profile /></RequireAuth>  } />
       <Route  path="/soon" element={ <RequireAuth> <ComingSoon /></RequireAuth>  } />
       <Route  path="/" element={ <SignIn />} />
       <Route  path="/signup" element={ <SignUp />} />
       </Routes>

     
       
       
  {/* <SignIn/> */}
    
       
     
      </div> 
      
        
          
        
        

</div>
</div>

</div> 
          
          </AuthContextProvider>
         
    
    
  )
}

export default App;


















































