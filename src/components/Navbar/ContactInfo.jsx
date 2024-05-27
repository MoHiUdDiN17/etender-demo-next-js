'use client'
import React from 'react';
import Image from 'next/image';

const ContactInfo = () => {
    return (
        <div className='h-10 bg-slate-900 text-slate-200 flex flex-row-reverse'>
                <div className='flex mx-lg-2'>
                    <Image className='py-1'  
                        src="/call_icon.png"
                        width={35}
                        height={8}
                        alt="Mail Icon"
                        />          
                    <div className='px-2 py-3 lg:py-2'>
                        <p className='text-xs lg:text-lg'>096-77-444-888</p> 
                    </div>
                </div>
                <div className='flex mx-lg-2'>
                    <Image 
                    className='py-1'
                    src="/email_icon.png"
                    width={35}
                    height={8}
                    alt="Telephone Icon"
                    />
                    <div className='px-2 py-3 lg:py-2'>
                        <p className='text-xs lg:text-lg'> brac.erpsupport@bracits.com</p> 
                    </div>
                </div>
            </div>
    );
};

export default ContactInfo;