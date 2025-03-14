import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUpload } from 'react-icons/fa';
import Lottie from 'react-lottie-player';
import signupAnimation from '../../assets/authLotties/signup-animation.json';

const SignUp = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
            <Link to="/" className='flex gap-1 items-center justify-center'>
                <FaHome className='text-red-600'/>
                <h1 className="text-red-600 font-medium">Back to home</h1>
            </Link>
                <div className="text-center">
                    <Lottie
                        loop
                        animationData={signupAnimation}
                        play
                        style={{ width: 150, height: 150, margin: '0 auto' }}
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join FastBite and start ordering delicious food
                    </p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-red-500 transition-colors">
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                            <label htmlFor="image" className="cursor-pointer text-center">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-full mx-auto object-cover" />
                                ) : (
                                    <>
                                        <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <span className="mt-2 block text-sm font-medium text-gray-600">
                                            Upload your photo
                                        </span>
                                    </>
                                )}
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;