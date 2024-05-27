'use client'
import React from 'react';

const TenderCard = ({cart}) => {
    return (
        <div className={`p-4 rounded col-span-12 md:col-span-6 lg:col-span-3 text-lg text-white ${cart.bg}`}>
            <div className='flex justify-between'>
                <div className='flex'>
                    {cart.logo}
                    <div className='ml-2 text-xl'>{cart.name}</div>
                </div>
                <div className='text-2xl'>0</div>
            </div>
            <div className={`flex justify-between rounded my-2 p-2 ${cart.small}`}>
                <div>Head Office</div>
                <div className='flex'>
                    <div className='text-xl'>0</div>
                    <svg className='mt-2 ml-1' xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                        <path d="M1.5 8L4.5 4.5L1.5 1" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
            <div className={`flex my-1 justify-between rounded p-2 ${cart.small}`}>
                <div>HCMP-Cox's Bazar</div>
                <div className='flex'>
                    <div className='text-xl'>0</div>
                    <svg className='mt-2 ml-1' xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                        <path d="M1.5 8L4.5 4.5L1.5 1" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TenderCard;