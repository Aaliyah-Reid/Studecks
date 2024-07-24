import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const ProfileSetup = () => {


    return (
        <div className="flex flex-col justify-center items-center mt-20 mx-auto">
           <h1 className='text-8xl mb-2 text-mainText font-baloo font-extrabold'>Studecks</h1>
           
           <h2 className='text-3xl mb-2 text-mainText font-baloo font-extrabold'>Choose your avatar</h2>

           <div className="flex items-center justify-center font-baloo">
            <span className='text-placeholderColour underline'>Skip this step</span>
            <a href="/login" className="text-hoverFill ml-1">You’ll be able to choose an avatar later.</a>
            </div>
          
        </div>

    );
}


export default ProfileSetup;

