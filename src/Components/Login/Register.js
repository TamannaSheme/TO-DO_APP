import React, { useRef } from 'react';

import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
const Register = () => {
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth,{useSendEmailVerification: true});

  const nameRef = useRef()
   const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegisterSubmit = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;   
        const email = emailRef.current.value;
        const passowrd = passwordRef.current.value;
        createUserWithEmailAndPassword(email,passowrd);
        
        
    }


/* <=========================handle error ==========================>
 <=================================================================>
*/
 let errorElement;
 if(error){
     errorElement=
     <div>
         <p>Error:{error.message}</p>
     </div>
 }

 /* <=========================handle loading ==========================>
 <=================================================================>
*/

let loadingElement;
if(loading){

    loadingElement = <progress className="progress progress-warning w-56" value="70" max="100"></progress>
   
}

    return (
        <div className='login-section'>
            <div className="container">
                <div className="login-container">

                    <div className="login-components">
                        <form onSubmit={handleRegisterSubmit}>
                            <h1 className="text-center mt-5 mb-5"> Register </h1>
                            <input ref={nameRef} className='email-field' type="name" name="name" id="2" placeholder='Enter your name' />
                            <input ref={emailRef} className='email-field' type="email" name="email" id="1" placeholder='Enter Email @gmail.com' required/>
                            
                            <input ref={passwordRef} className='password-field' type="password" name="password" id="3" placeholder='Enter Password' required/>

                            <input className='login-btn' type="submit" value="Signup" />
                            <hr className="new1" />
                        </form>
                    </div>

                    <p className='allready-account'> Already have an account     <Link className='text-decoration-none' to="/login"> <span> Login </span> </Link> </p>
                    <hr className="new1" />
                    <p className="errorHandle"> {errorElement} </p>
                     <p className="loadingHandle"> {loadingElement} </p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Register;