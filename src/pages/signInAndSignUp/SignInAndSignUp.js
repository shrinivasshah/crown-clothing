import React from 'react';
import './SignInAndSignUp.scss'
import './SignInAndSignUp.scss';

import SignIn from '../../components/signIn/Signin';
import Signup from '../../components/signUp/signUp';
const SignInAndSignUp = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <Signup/>
    </div>
)

export default SignInAndSignUp