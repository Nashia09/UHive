import React, {useState} from 'react';
import control from '../assets/control.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import dash from '../assets/Chart_fill.png';
import chat from '../assets/Chat.png';
import user from '../assets/User.png';
import folder from '../assets/Folder.png';
import calender from '../assets/Calendar.png';
const Sidebar = () => {
 
  const [mini, setMini] = useState(false);



  return (
    <div style={{ height: '100%' }} className="  relative inset-y-0 left-0 transition duration-200 ease-in-out ">
 <div className={`${mini ? "w-72" : "w-20"} p-5 pt-duration-300 absolute h-screen bg-black relative `}>
       
       <img
         alt="img"
        src={control}
         className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!mini && "rotate-180"}`
         }
          onClick={() =>  setMini(!mini)}
      />
        <div className="flex gap-x-4  items-center">
         <img alt="img" src={logo} 
         className={`cursor-pointer duration-500 ${mini && "rotate-[360deg]"}`} />
          
        
         <h1
           className={`text-white origin-left font-medium text-3xl duration-300 ${!mini && "scale-0" }`}>DashBoard</h1>
          
           </div>
           
           <ul className="text-gray-300 text-lg mt-10">
            <span className={`${!mini && "hidden"} origin-left duration-200`}>CODING</span>
            </ul>
            <ul className="text-gray-300 text-lg"> 
            <Link to="/soon" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 active:bg-blue-600
                    
                    hover:bg-light-white selection:bg-fuchsia-300 target:bg-light-white rounded-md  `}  >
                    
                     <img alt="img" src={calender} className={`${mini && "rotate-[360deg]"}`} />
                     <span className={`${!mini && "hidden"} origin-left duration-200`}>Sessions</span>
    
                     </Link></ul>
            <ul className="text-gray-300 text-lg"> <Link to="/soon" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 active:bg-blue-600
                    
                    hover:bg-light-white selection:bg-fuchsia-300 target:bg-light-white rounded-md  `}  >
                    
                     <img alt="img" src={folder} className={`${mini && "rotate-[360deg]"}`} />
                     <span className={`${!mini && "hidden"} origin-left duration-200`}>Book Dev</span>
    
                     </Link></ul>
            
            <h1 className="text-gray-300 text-lg">
              <span className={`${!mini && "hidden"} origin-left duration-200`}>MATCH</span>
              </h1>
            <ul className="text-gray-300 text-lg"> 
            <ul className="text-gray-300 text-lg">
              <Link to="/profile" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 active:bg-blue-600
                    
                    hover:bg-light-white selection:bg-fuchsia-300 target:bg-light-white rounded-md  `}  >
                    
                     <img alt="img" src={user} className={`${mini && "rotate-[360deg]"}`} />
                     <span className={`${!mini && "hidden"} origin-left duration-200`}>My Profile</span>
    
                     </Link></ul>
            <Link to="/candidates" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 active:bg-blue-600
                    
                    hover:bg-light-white selection:bg-fuchsia-300 target:bg-light-white rounded-md  `}  >
                    
                     <img alt="img" src={dash} className={`${mini && "rotate-[360deg]"}`} />
                     <span className={`${!mini && "hidden"} origin-left duration-200`}>Candidates</span>
    
                     </Link></ul>
            <ul className="text-gray-300 text-lg"><Link to="/inbox" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 active:bg-blue-600
                    
                    hover:bg-light-white selection:bg-fuchsia-300 target:bg-light-white rounded-md  `}  >
                    
                     <img alt="img" src={chat} className={`${mini && "rotate-[360deg]"}`} />
                     <span className={`${!mini && "hidden"} origin-left duration-200`}>Inbox</span>
    
                     </Link></ul>

            <h1 className="text-gray-300 text-lg"><span className={`${!mini && "hidden"} origin-left duration-200`}>SETTINGS</span></h1>


           <ul className="pt-6">
                
          
           </ul>
     
       </div>
    </div>
    
   
  ) 
}

export default Sidebar