'use client'
import React from 'react';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='grid grid-cols-12 py-2 text-gray-500 bg-gray-200 sticky-bottom'>
            <div className='col-span-12 lg:col-span-6 px-10 text-center'>Copyright © 2024 <span className='text-blue-500'>BRAC, BANGLADESH.</span> All rights reserved.</div>
            <div className='col-span-12 lg:col-span-6 flex justify-center'>
                <div>Developed By: </div>
                <Image 
                    className='h-4 ml-2 mt-1'
                    src="/biTS_logo_small.png"
                    width={60}
                    height={5}
                    alt="Brac Logo"
                    />
            </div>           
        </div>
    );
};

export default Footer;