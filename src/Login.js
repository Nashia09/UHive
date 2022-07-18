import React, { useContext, useEffect, useRef, useState }  from 'react';
import './Login.css';
import {Helmet} from "react-helmet";
import log from './assets/blogo.png';
import reg from './assets/register.svg';
import { signup } from './firebase';
import Password from 'antd/lib/input/Password';
import { auth, db} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Route, Routes, useNavigate, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import { AuthContext } from './context/AuthContext';
import { addDoc, collection, doc, Firestore, serverTimestamp, setDoc } from "firebase/firestore";


// import l from './log';

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)



    const handleSignup = async (e) => {
       e.preventDefault();

       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredentials) => {
        //  const user = userCredentials.user;

          setDoc(doc(db, "users", userCredentials.user.uid ), {
          email: email,
          timeStamp: serverTimestamp(),
          
        });

       
        
        

        // console.log(userCredentials);
        alert("Success!!!"); 
        // <Redirect to='/' />

       })
       .catch((error) => {
         setError(true);
    });

  }
 
    const handleSignIn = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {

       const user = userCredentials.user;
       dispatch({type: "LOGIN", payload:user})
       console.log(user);
       alert("Success!!!"); 

       navigate(<Profile />);
      //  <Route  path="/" element={ < />} />

     

      })
      .catch((error) => {
        setError(true);
   });
    
    }

      
       
        const signUpBtn = () =>{
           if(sign_in_btn){
          //  sign_up_btn.addEventListener('click', () => {
               container.classList.add("sign-up-mode");
               console.log('touched  hajhajysyh')
          //  });
       }
       }
           
           const signInBtn = () =>{
              if(sign_up_btn){
               sign_in_btn.addEventListener('click', () => {
                   container.classList.remove("sign-up-mode");
                   console.log('touched  sign')

                   
                 }); }
               }
               
               useEffect(() => {
                  signInBtn(); 
                  signUpBtn();
              }, []);

              

  return (

    <body>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">

            <h2 class="title">Sign in</h2>
          {error?  <span>Invalid Details</span> : ""}

            <div class="input-field">
              <i class="fas fa-user"></i>
              <input  type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input  type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
            </div>
            <input disabled={loading} onClick={handleSignIn} type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#"  class="sign-up-form">
          {error?  <span>Wrong Details</span> : ""}
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username"  />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <input type="submit"  onClick={handleSignup} class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={signUpBtn}>
              Sign up
            </button>
          </div>
          <img src={log} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn"  onClick={signInBtn}>
              Sign in
            </button>
          </div>
          <img src={reg} class="image" alt="" />
        </div>
      </div>
    </div>
           
           
           <Helmet>
    
           <script type="text/javascript"  src="./log" charset="utf-8" defer>

           
           </script>
            </Helmet>
  </body>
  
  )
}

export default Login