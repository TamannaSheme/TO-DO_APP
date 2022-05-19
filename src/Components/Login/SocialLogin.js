import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    /*<===========================================================================>
    <=======================error handle=========================>
    <===========================================================================>
    */
    const location =useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then( ()=>{
            navigate(from, {replace:true})
        })
    }
    const handleGithubSignIn = ()=>{
        signInWithGithub()
        .then( ()=>{
            navigate(from, {replace:true})
        })
    }

    let errorElement;
    if (error1) {
        errorElement =
            <div>
                <p>Error: {error1.message}</p>
            </div>
    }
    else if (error2) {
        errorElement =
            <div>
                <p>Error: {error2.message}</p>
            </div>
    }



    /*<===========================================================================>
        <=======================error loading=========================>
        <===========================================================================>
        */
    let loadingElement;
    if (loading1 || loading2) {
        loadingElement =
        <progress className="progress progress-warning w-56" value="70" max="100"></progress>
    }

    return (
        <div className='social-login'>
            <p className="errorHandle"> {errorElement} </p>
            <p className='loadingHandle'> {loadingElement} </p>
            <button onClick={handleGoogleSignIn} className='google-login'> Login with Google </button>
            <button onClick={handleGithubSignIn} className='github-login'>  Login with Github </button>

        </div>
    );
};

export default SocialLogin;