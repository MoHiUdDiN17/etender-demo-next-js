'use client'
import React from 'react';
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
const SignUp = ({setOpenModal,openModalSignUp,setOpenModalSignUp}) => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        if(password === confirmPassword){
            const user = {
                username : username,
                password : confirmPassword,
                email : email,
                mobile : mobile
            }
            fetch("http://localhost:8100/addUser", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(user)})
            .then((response) => {
                if(response.status == 200){
                    setOpenModalSignUp(false);
                    setOpenModal(true);
                    alert('Registered Successfully');
                }
                else{
                    alert('Registration is not Successful')
                }
            })
            
        }
        else{
            alert('password and confirm password are not matched')
        }
    }
    return (
        <Modal show={openModalSignUp} onClose={() => setOpenModalSignUp(false)}>
        <Modal.Header className='border-b-0 p-2'></Modal.Header>
        <Modal.Body className='p-0'>
         <div className='text-right'>   
            <Image 
                className='h-10 lg:h-auto  ml-[30%] md:ml-[38%]'
                src="/logo-pink.png"
                width={150}
                height={30}
                alt="Brac Logo"
            />
        </div>
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" 
            onSubmit={handleSubmit}
            >
            <div>
                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Username / ID</label>
                <div className="mt-2">
                <input id="username" name="username" type="username" required placeholder=' Enter username / ID' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                <input id="password" name="password" type="password" required placeholder='Enter password' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                <div className="mt-2">
                <input id="confirmPassword" name="confirmPassword" type="password" placeholder='Confirm password' required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                <input id="email" name="email" type="email" required placeholder='Enter Email' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
                <label for="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                <div className="mt-2">
                <input id="mobile" name="mobile" type="mobile" required placeholder=' Phone Number' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md pink-bg-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
            </form>

            <p className="my-5 text-center text-sm text-gray-500">
            Already have an account?
            </p>
            <div className='mb-12'>
                <button onClick={() => {
                    setOpenModal(true);
                    setOpenModalSignUp(false);
                  }} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
        </div>
        </div>        
        </Modal.Body>
      </Modal>
    );
};

export default SignUp;