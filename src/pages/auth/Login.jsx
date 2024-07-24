import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo  from '../../assets/studecks-logo.gif';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle submission logic
        console.log('Email:', email);
        console.log('Password:', password);
    };


    return (
        <div className="flex flex-col justify-center items-center mt-20 mx-auto">
            <img 
                src={logo} 
                alt="Studecks Logo" 
                className="w-64 md:w-72 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] h-auto mb-6"
            />
            <h2 className='text-3xl mb-2 text-mainText font-baloo font-extrabold'>Welcome Back!</h2>

            <h3 className='text-xl mb-6 text-mainText font-baloo font-extrabold'>Ready to get back in the study groove? Login to continue.</h3>

            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input  className='inputFieldStyle'
                    type="text"
                    name="email"
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    
                />
                
                <input  className="inputFieldStyle"
                    type="password"
                    name='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    
                />

                <button type="submit" className="buttonStyle">Login</button>

                <h5 className="mb-6 text-mainText">or</h5>

                <button type="button" className="buttonStyle flex items-center justify-center">
                   <FontAwesomeIcon icon={faGoogle} style={{ color: "#FFFFF0", marginRight: '8px' }} />
                    Login with your Google Account
                </button>
                
            </form>
            <div className="flex items-center justify-center">
            <span className='text-placeholderColour opacity-80'>Not a user?</span>
            <a href="/signup" className="text-hoverFill underline ml-1 transition-all duration-300 ease-in-out hover:scale-110 inline-block hover:font-bold">Sign Up</a>
            </div>

        </div>
    )

}

export default Login;