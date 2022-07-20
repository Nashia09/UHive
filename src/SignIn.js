
import { Link, Navigate } from 'react-router-dom'
import blogo from './assets/unlock.svg'
import React, { useContext, useEffect, useRef, useState }  from 'react';
import './Login.css';

import { auth, db} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Route, Routes, useNavigate, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import { AuthContext } from './context/AuthContext';
import { addDoc, collection, doc, Firestore, serverTimestamp, setDoc } from "firebase/firestore";


const SignIn = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

   

    const handleSignIn = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {

       const user = userCredentials.user;
       dispatch({type: "LOGIN", payload:user})
       console.log(user);
       alert("Success!!!"); 
      
      //  <Route  path="/" element={ < />} />

    //   <Navigate to="/profile" replace={true} />
       
    navigate('/profile', { replace: true });


     
    })
    .catch((error) => {
      setError(true);
 });

}

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block'>

        <img className='w-full h-full object-cover' src={blogo} alt="logo" />
    </div>

    <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
            {error?  <span className='text-red-400' >Invalid Details</span> : ""}
            <div className='flex flex-col text-gray-400 py-2 '>
                <label>Email</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none '  onChange={e=>setEmail(e.target.value)}  type='email'/>
            </div>

            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ' onChange={e=>setPassword(e.target.value)}  type='password'/>
            </div>

            <div className='flex justify-between text-gray-400 py-2'>
                
                <p>New Here? </p>
                <Link to='/signup' replace={true} > SignUp</Link>
                
            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-white font-semibol rounded  '  onClick={handleSignIn}>Sign In</button>
        </form>
    </div>
        

   </div>
  )
}

export default SignIn
