import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
// <=================password rest =========================> 
const [sendPasswordResetEmail, 
    sending, 
    error2] = useSendPasswordResetEmail(auth);

// <================================================================>
    const emailRef = useRef();
    const passwordRef = useRef();
    const location =useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    
    const handleLoginSubmit = async e =>{
        e.preventDefault();
       
        const email = emailRef.current.value;
        const passowrd = passwordRef.current.value;
       await signInWithEmailAndPassword(email,passowrd);
       
    }



    if(user1){
        navigate(from, {replace:true})

 }








 let errorElement;
 if(error){
     errorElement=
    
         <p> password Not Match or no account found:{error.message}</p>
   
 }
 else if(error2){
     errorElement=
    
         <p>Error:{error2.message}</p>
   
 }





let loadingElement;
if(loading){

    loadingElement = <progress className="progress progress-warning w-56" value="70" max="100"></progress>
   
}
    return (
        <div>
            
            <div className='login-section'>
            <div className="container">
                <div className="login-container">

                    <div className="login-components">
                        <form onSubmit={handleLoginSubmit}>
                            <h1 className="text-center mt-5 mb-5"> Login </h1>
                            <input ref={emailRef} className='email-field' type="email" name="email" id="1" placeholder='Enter Email @gmail.com' required/>
                            <input ref={passwordRef} className='password-field' type="password" name="password" id="2" placeholder='Enter Password' />
                            
                            <p className="errorHandle"> {errorElement} </p>
                            <p className="loadingHandle"> {loadingElement} </p>
                     
                            <input className='login-btn' type="submit" value="Login" />
                            <button className="btn btn-active btn-primary forgot-password"> Forget Password?  </button>
                          
                           
                            <hr className="new1" />
                        </form>
                    </div>

                    <Link className='text-decoration-none allready-account' to="/register">  Create a new account  </Link>
                    <hr className="new1" />

                    <SocialLogin></SocialLogin>
                    <ToastContainer/>

                </div>
            </div>
        </div>


        </div>
    );
};

export default Login;