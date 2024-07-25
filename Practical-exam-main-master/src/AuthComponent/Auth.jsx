import React, { useState } from 'react';
import { app } from './firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function SignIn() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleProvider = new GoogleAuthProvider();  
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Google sign-in success', result);
      })
      .catch((error) => {
        console.error('Google sign-in error', error);
      });
  };

  const handleAuth_SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('Sign-in success', res);
      })
      .catch((err) => {
        console.error('Sign-in error', err);
      });

    e.target.reset();
  };

  return (
    <>
      <h1>Sign In</h1><br />
      <form onSubmit={handleAuth_SignIn}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Sign In</button>
        <br />
        <h2>Google Auth</h2>
        <button type="button" onClick={signWithGoogle}>Sign In with Google</button>
      </form>
    </>
  );
}

export default SignIn;

