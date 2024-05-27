import React from 'react';
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import { redirect } from "next/navigation";
import { login } from "@/lib";
const Login = ({openModal,setOpenModal,setOpenModalSignUp}) => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const password = form.password.value;
        const user = {
            username : username,
            password : password
        }
        // fetch("http://localhost:8100/authenticateUser", {
        // method: "POST",
        // headers: {
        //     "content-type": "application/json",
        //     // authorization: `Bearer ${localStorage.getItem('genius-token')}`
        // },
        // body: JSON.stringify(user)})
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data);
        // })
    }
    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
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
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" 
            onSubmit={handleSubmit}
            // action={async(formData) => {
            //     await login(formData);
            //     redirect("/myDashboard");
            // }}
            >
            <div>
                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Username / ID</label>
                <div className="mt-2">
                <input id="name" name="name" type="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                    <a href="#" className="font-semibold pink-color hover:text-red-400">Forgot password?</a>
                </div>
                </div>
                <div className="mt-2">
                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md pink-bg-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
            </form>

            <p className="my-5 text-center text-sm text-gray-500">
            Are you a new user?
            </p>
            <div className='mb-12'>
                <button onClick={() => {
                    setOpenModal(false);
                    setOpenModalSignUp(true);
                  }} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
        </div>
        </div>        
        </Modal.Body>
      </Modal>

    );
};

export default Login;