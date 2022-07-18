import React, { useState, useContext, useEffect } from 'react'
import ContentHeader from './ContentHeader';
import { addDoc, collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import {   createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage} from '../firebase';

import { AuthContext } from '../context/AuthContext';

import {   ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { async } from '@firebase/util';

const Profile = () => {
   
  const [file, setFile] = useState();
  const [per, setPer] = useState(null);
  

  const [data, setData] = useState({ intro:"",
  country:"", city:"", skills:"", skillsNeeded:"",
  technical:"", goal:"", file: ""
});

const {currentUser} = useContext(AuthContext);

     useEffect(() => {
         const uploadFile = () => {

           const name= new Date().getTime() + file.name

           const storageRef = ref(storage, file.name);

           const uploadTask = uploadBytesResumable(storageRef, file);

         
           uploadTask.on(
            'state_changed', 
             (snapshot) => {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
                setPer(progress);
               switch (snapshot.state) {
                 case 'paused':
                   console.log('Upload is paused');
                   break;
                 case 'running':
                   console.log('Upload is running');
                   break;

                   default :
                   break
               }
             }, 
             (error) => {
              console.log(error)
             }, 
             () => {
               // Handle successful uploads on complete
               // For instance, get the download URL: https://firebasestorage.googleapis.com/...
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  setData((prev) => ({...prev, img:downloadURL}))
                console.log('File available at', downloadURL);
               });
             }
           


     )}
       file && uploadFile();   
     }, [file])
     
     

  const handleChange = (e) => {
    e.preventDefault();

    const id= e.target.id;
    const value = e.target.value;


     setData({ ...data, [id]: value });
      
      
  

  };

    const handleAdd = async (e) => {
      e.preventDefault();
      try{

         await setDoc(doc(db, "users", currentUser.uid ), {
          ...data,
          timeStamp: serverTimestamp(),
          
        });

        alert("Profile Updated Succesfully")

        console.log(currentUser);

      } catch (err){
        console.log(err);
      }


    }
  console.log(data);


  return (

   // 
   <div className="">

   
      <ContentHeader />
      <div>
  <div class="md:grid md:grid-cols-3 md:gap-6 bg-gray-200 w-screen">
  
    <div class="mt-5 md:mt-0 md:col-span-2 ml-10  ">
    <div class="px-4 sm:px-0 ">
        <h3 class="text-lg font-medium leading-6 text-gray-900 ">Profile</h3>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
    
        </p>
      </div>
      <form action="#" onSubmit={handleAdd} method="POST" className="px-4 ">
        <div class="shadow sm:rounded-md sm:overflow-hidden w-800 ">
          <div class="px-0 py-10 bg-white space-y-6 sm:p-6 w-full">
           

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Intro
              </label>
              <div class="mt-1">
              <textarea value={data.intro} onChange={handleChange} class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="intro"></textarea>

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
          <select onChange={handleChange} value={data.country} class="form-select form-select-lg mb-3
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="country" aria-label=".form-select-lg example">
        <option selected>Please select a country</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="Egypt">Egypt</option>
    </select>

          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            City
          </label>
          {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" /> */}
          <select id="city" onChange={handleChange} value={data.city} class="form-select form-select-lg mb-3
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
        <option value="Abuja">Abuja</option>
        <option value="Kaduna">Kaduna</option>
        <option value="Lagos">Lagos</option>
    </select>

        </div>
      </div>
      <div class="flex flex-wrap -mx-3 ">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-mono" for="grid-password">
            What Is Your Skillset
          </label>
          
          <input id="skills" onChange={handleChange} value={data.skills} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text"/>
          {/* <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}

          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-mono" for="grid-password">
            What Skillset Do You Need 
          </label>
          <input id="skillsNeeded" onChange={handleChange} value={data.skillsNeeded} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text"/>
        
        
        </div>
        <label class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2 md:ml-40" for="grid-first-name" >
            Are You A Technical Person?
          </label>



          <div class="form-check form-check-inline">
    <input id="technical" onChange={handleChange} value="Yes" class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions"   />
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
  </div>
  <div class="form-check form-check-inline">
    <input id="technical" onChange={handleChange} value="No" class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions"   />
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
  </div>
      
   
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:ml-20" for="grid-password">
            What are you looking for? 
          </label>
    
          <div class="form-check form-check-inline">
    <input id="goal" onChange={handleChange} value="Technical" class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions"   />
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Technical</label>
  </div>
  <div class="form-check form-check-inline">
    <input id="goal" onChange={handleChange} value="Non-Technical" class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions"   />
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Non-Technical</label>
  </div>
    
          </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                {/* <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span> */}
                <input 
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                 class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
                  Change
                {/* </button> */}
              </div>
            </div>

           
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button disabled={per !=null && per < 100} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
