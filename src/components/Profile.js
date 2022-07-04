import React from 'react'
import ContentHeader from './ContentHeader'

const Profile = () => {
  return (
   
   //  <div className=''>
   //       <form>
   //           <h2>Sign In</h2>

   //           <div>
   //              <label>Intro</label>
   //              <input type="textArea" />

   //           </div>

             
   //           <div>
   //              <label>Country</label>
   //              <input type="textArea" />

   //           </div>

   //           <div>
   //            <p>Are you Technical?</p>
   //             <p><input type="chekbox" /> Yes </p>

   //             <p>Or</p>
               
   //             <p><input type="chekbox" /> No </p>
   //           </div>
   
    
   //           <div>
   //              <label>What Skillset do you have?</label>
   //              <input type="textArea" />

   //           </div>
   //           <div>
   //            <p>What Are You Looking For?</p>
   //             <p><input type="chekbox" /> Technical </p>

   //             <p>Or</p>
               
   //             <p><input type="chekbox" /> Non Technical </p>
   //           </div>
   //           <div>
   //              <label>What Skillset do you need? </label>
   //              <input type="textArea" />

   //           </div>

   //           <div>
                
   //           </div>
   //           <button>Reset</button>
   //    <button>Submit</button>
   //       </form>


   //  </div>
   <div className=" bg-white-600 ">

   
      <ContentHeader />
      <div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    {/* <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
    </div> */}
    <div class="mt-5 md:mt-0 md:col-span-2 ml-20 ">
    <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      <form action="#" method="POST" className="w-full">
        <div class="shadow sm:rounded-md sm:overflow-hidden w-100">
          <div class="px-0 py-10 bg-white space-y-6 sm:p-6 w-full">
           

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Intro
              </label>
              <div class="mt-1">
              <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile.
              </p>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" >
            Country
          </label>
          {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
          <select class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
        <option selected>Please select a country</option>
        <option value="1">Nigeria</option>
        <option value="2">Ghana</option>
        <option value="3">Egypt</option>
    </select>

          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            City
          </label>
          {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" /> */}
          <select class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
        <option selected>Please select a city</option>
        <option value="1">Abuja</option>
        <option value="2">Kaduna</option>
        <option value="3">Lagos</option>
    </select>

        </div>
      </div>
      <div class="flex flex-wrap -mx-3 ">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-mono" for="grid-password">
            What Is Your Skillset
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
          {/* <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}

          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-mono" for="grid-password">
            What Skillset Do You Need 
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
        </div>

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:ml-40" for="grid-first-name" >
            Are You A Technical Person?
          </label>
          <div class="form-check form-check-inline m-2">
    <label class="form-check-label inline-block text-gray-400 font-mono text-xs" for="inlineRadio10">Yes</label>
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  </div>
  <div class="form-check form-check-inline m-2">
    <label class="form-check-label inline-block text-gray-400 font-mono text-xs" for="inlineRadio20">No</label>
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  </div>
   
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:ml-20" for="grid-password">
            What are you looking for? 
          </label>
          <div class="form-check form-check-inline m-4">
    <label class="form-check-label inline-block text-gray-400 font-mono text-xs  " for="inlineRadio10">Technical</label>
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  </div>
  <div class="form-check form-check-inline m-4">
    <label class="form-check-label inline-block text-gray-400 font-mono text-xs " for="inlineRadio20">Non Technical</label>
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  </div>
 
      </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
            </div>

           
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}


export default Profile





















//  import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import AppBar1 from '../AppBar1';

// export default function Profile() {
  

//   return (
//     <div>
//        <nav className="text-xl  sm:justify-center sm:items-center bg-white  hover:shadow-lg w-screen pt-0  " >
         
        
//          <AppBar1 />
         
   
//     </nav>
//     <Box style={{ margin:'10px '}} sx={{ display: 'flex', flexWrap: 'wrap'  }}>
//       <div>

//         <FormControl fullWidth sx={{ m: 20, ml:10 }} variant="filled">
//           <InputLabel htmlFor="intro">Intro</InputLabel>
//           <FilledInput
//             id="intro"
            
            
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>

//       </div>
//       <div>
        
//         <FormControl fullWidth sx={{ m: 20 }} variant="filled">
//           <InputLabel htmlFor="intro">Intro</InputLabel>
//           <FilledInput
//             id="intro"
            
            
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
                
                
                
            
//       </div>

//       <div>

// <FormControl fullWidth sx={{ m: 20, ml:10 }} variant="filled">
//   <InputLabel htmlFor="intro">Intro</InputLabel>
//   <FilledInput
//     id="intro"
    
    
//     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//   />
// </FormControl>

// </div>
// <div>

// <FormControl fullWidth sx={{ ml: 10 }} variant="filled">
//   <InputLabel htmlFor="intro">Intro1</InputLabel>
//   <FilledInput
//     id="intro"
    
    
//     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//   />
// </FormControl>
       
// </div>

// <div>

// <FormControl fullWidth sx={{ m: 20, ml:10 }} variant="filled">
//   <InputLabel htmlFor="intro">Intro</InputLabel>
//   <FilledInput
//     id="intro"
    
    
//     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//   />
// </FormControl>

// </div>
// <div>

// <FormControl fullWidth sx={{ m: 20 }} variant="filled">
//   <InputLabel htmlFor="intro">Intro</InputLabel>
//   <FilledInput
//     id="intro"
    
    
//     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//   />
// </FormControl>
        
        

// </div>

//     </Box>
//     </div>
//   );
// }
  
  
