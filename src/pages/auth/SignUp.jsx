import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo  from '../../assets/studecks-logo.gif';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 mx-auto">
    {/* <h1 className='text-8xl mb-2 text-mainText font-baloo font-extrabold'>Studecks</h1> */}
    <img 
                src={logo} 
                alt="Studecks Logo" 
                className="w-64 md:w-72 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] h-auto mb-6"
            />
    <h2 className='text-3xl mb-2 text-mainText font-baloo font-extrabold'>Create your account</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            className='inputFieldStyle'
            type="text"
            name="firstName"
            placeholder='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className='inputFieldStyle'
            type="text"
            name="lastName"
            placeholder='Last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        
        <input
          className='inputFieldStyle mb-4'
          type="email"
          name="email"
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="inputFieldStyle mb-4"
          type="password"
          name='password'
          placeholder='Create password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <input
          className="inputFieldStyle mb-4"
          type="password"
          name='confirmPassword'
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}
        <button type="submit" className="buttonStyle mb-4">Sign up</button>
        <h5 className="mb-4 text-mainText text-center">or</h5>
        <button type="button" className="buttonStyle flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#FFFFF0", marginRight: '8px' }} />
          Sign up with your Google Account
        </button>
      </form>
      <div className="flex items-center justify-center">
            <span className='text-placeholderColour opacity-80'>Not a user?</span>
            <a href="/login" className="text-hoverFill underline ml-1 transition-all duration-300 ease-in-out hover:scale-110 inline-block hover:font-bold">Login</a>
        </div>
    </div>
  )
}

export default SignUp;