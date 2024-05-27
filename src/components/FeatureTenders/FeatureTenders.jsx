'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const FeatureTenders = ({featureTender,leftside}) => {
    return (
        <div className={leftside == featureTender.id-1 ? 'pb-2 rounded bg-white md:mr-4': leftside == featureTender.id-2 ? 'pb-2 rounded bg-white md:ml-4': 'pb-2 rounded bg-white'} >
            <div className='flex justify-end contain'>    
                <Image
                    src="/time_badge.jpg"
                    width={230}
                    height={50}
                    alt="Mail Icon"
                    />
                <div className='add-background text-xl'>2 Days: 1 Hrs: 49Mins</div>
            </div>
            <div className='px-5 lg:px-10 pb-5 text-2xl pt-5 lg:pt-0'>RFQ for the following Items...</div>
            <div className='px-5 lg:px-10 grid grid-cols-12 gap-2 text-gray-400'>
                <div className='col-span-6'>Ref No</div>
                <div className='col-span-6'>Opening Date</div>
            </div>
            <div className='px-5 lg:px-10 grid grid-cols-12 gap-2 text-xl'>
                <div className='col-span-6'>{featureTender.refNo}</div>
                <div className='col-span-6'>{featureTender.openingDate}</div>
            </div>
            <div className='px-5 lg:px-10 grid grid-cols-12 gap-2 text-gray-400 mt-10 lg:mt-5'>
                <div className='col-span-6'>Last Submission</div>
                <div className='col-span-6'>Published Date</div>
            </div>
            <div className='px-5 lg:px-10 grid grid-cols-12 gap-2 text-xl'>
                <div className='col-span-6'>{featureTender.lastSubmission}</div>
                <div className='col-span-6'>{featureTender.pulishedDate}</div>
            </div>
            <div className='text-right pr-5 my-5'>
                <Link href="/"><button className="bg-transparent hover:text-teal-500 border-green font-semibold py-2 px-4 text-teal-600 round-100px">read more...</button></Link>
            </div>
        </div>
    );
};

export default FeatureTenders;