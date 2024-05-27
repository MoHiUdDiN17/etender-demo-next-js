'use client'
import React, { useRef, useState } from 'react';
import TenderCard from '../components/TenderCard/TenderCard';
import FeatureTenders from '@/components/FeatureTenders/FeatureTenders';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const page = () => {
  let sliderRef = useRef(null);
  const [leftside, setLeftSide] = useState(0);
  const [rightside, setRightSide] = useState(2);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1
        } 
      }
    ],
  };
  const tenderCart = [
    {
      "id" : 1,
      "bg" : "bg-amber-500",
      "small" : "bg-amber-600",
      "name" : "LIVE TENDER",
      "logo" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 19.9995V21.9996H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8176L13.879 16.9496L12.464 18.3636L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547ZM15.293 4.22155L8.222 11.2915L11.757 14.8276L18.828 7.75755L15.293 4.22155Z" fill="white"/></svg>
    },
    {
      "id" : 2,
      "bg" : "bg-violet-400",
      "small" : "bg-violet-500",
      "name" : "CLOSE TODAY",
      "logo" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM20 11H4V19H20V11ZM6 14H8V16H6V14ZM10 14H18V16H10V14Z" fill="white"/></svg>
    },
    {
      "id" : 3,
      "bg" : "bg-sky-400",
      "small" : "bg-sky-500",
      "name" : "NEW TENDER NOTICE",
      "logo" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.53627 3H21.0013C21.2665 3 21.5208 3.10536 21.7084 3.29289C21.8959 3.48043 22.0013 3.73478 22.0013 4V20C22.0013 20.2652 21.8959 20.5196 21.7084 20.7071C21.5208 20.8946 21.2665 21 21.0013 21H6.53627C6.37168 21 6.20963 20.9594 6.06449 20.8818C5.91935 20.8042 5.79562 20.6919 5.70427 20.555L0.371275 12.555C0.261636 12.3907 0.203125 12.1975 0.203125 12C0.203125 11.8025 0.261636 11.6093 0.371275 11.445L5.70427 3.445C5.79562 3.30808 5.91935 3.19583 6.06449 3.11821C6.20963 3.04058 6.37168 2.99998 6.53627 3ZM7.07127 5L2.40527 12L7.07127 19H20.0013V5H7.07127ZM16.0013 11V13H9.00128V11H16.0013Z" fill="white"/></svg>
    },
    {
      "id" : 4,
      "bg" : "bg-emerald-400",
      "small" : "bg-emerald-500",
      "name" : "AWARD TENDER",
      "logo" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 4.604V13.789C5.00001 14.4475 5.16257 15.0957 5.47326 15.6763C5.78395 16.2568 6.23315 16.7517 6.781 17.117L12 20.597L17.219 17.117C17.7667 16.7518 18.2158 16.2571 18.5265 15.6767C18.8372 15.0964 18.9998 14.4483 19 13.79V4.604L12 3.05L5 4.604ZM3.783 2.826L12 1L20.217 2.826C20.4391 2.87536 20.6377 2.99897 20.78 3.1764C20.9224 3.35384 21 3.57452 21 3.802V13.789C20.9999 14.7767 20.756 15.7492 20.2899 16.62C19.8238 17.4908 19.1499 18.2331 18.328 18.781L12 23L5.672 18.781C4.85027 18.2332 4.17646 17.4911 3.71035 16.6205C3.24424 15.7498 3.00024 14.7776 3 13.79V3.802C3.00004 3.57452 3.07764 3.35384 3.21999 3.1764C3.36234 2.99897 3.56094 2.87536 3.783 2.826ZM12 13.5L9.061 15.045L9.622 11.773L7.245 9.455L10.531 8.977L12 6L13.47 8.977L16.755 9.455L14.378 11.773L14.938 15.045L12 13.5Z" fill="white"/></svg>
    }
  ];
  const news = [
    {
      "sl" : "1",
      "headline" : "BRAC Procurement Guidelines and Implementation Procedures (3rd Revision)",
    },
    {
      "sl" : "2",
      "headline" : "Supplier registration option is now available in E-Tender",
    },
    {
      "sl" : "3",
      "headline" : "Inauguration ceremony of BRAC E-Tender software",
    }
  ];
  const tenderFeatures = [
    {
      "id" : "1",
      "refNo" : "BPD/2024/RFQ-413",
      "openingDate" : "27/03/2024 04:32 PM",
      "lastSubmission" : "27/03/2024 04:32 PM",
      "pulishedDate" : "27/02/2024 04:28 PM",
    },
    {
      "id" : "2",
      "refNo" : "BPD/2024/RFQ-411",
      "openingDate" : "27/03/2024 04:32 PM",
      "lastSubmission" : "27/03/2024 04:32 PM",
      "pulishedDate" : "27/02/2024 04:28 PM",
    },
    {
      "id" : "3",
      "refNo" : "BPD/2024/RFQ-410",
      "openingDate" : "27/03/2024 04:32 PM",
      "lastSubmission" : "27/03/2024 04:32 PM",
      "pulishedDate" : "27/02/2024 04:28 PM",
    }
  ];
  const next = () => {
    sliderRef.slickNext();
    if(rightside != tenderFeatures.length){
      setRightSide(rightside+1);
      setLeftSide(leftside+1);
    }
  };
  const previous = () => {
    sliderRef.slickPrev();
    if(leftside != 0){
      setRightSide(rightside-1);
      setLeftSide(leftside-1);
    }
  };
  return (
    <div className='bg-slate-100 pb-10 w-[100%]'>
      <div>
        <div className='py-7 hidden md:flex justify-end'>
          <button className="flex text-slate-900 font-bold px-4 border rounded-full mr-14 divide-x gap-6 bg-white">
           <div className='py-2 pl-4'>AWARD NOTICE</div>
            <div className='py-2 pl-6'>ARCHIVE</div>
            <div className='py-2 pl-6'> WORKFLOW CHART</div>
            <div className='py-2 pl-6 pr-4'>MANUAL</div>
          </button>
        </div>
        <div className='py-7 px-2 grid grid-cols-12 md:hidden gap-x-3 gap-y-3'>
          <button className="text-slate-900 font-bold border rounded-full col-span-7 py-1">AWARD NOTICE</button>
          <button className="text-slate-900 font-bold border rounded-full col-span-5 py-1">ARCHIVE</button>
          <button className="text-slate-900 font-bold border rounded-full col-span-7 py-1">WORKFLOW CHART</button>
          <button className="text-slate-900 font-bold border rounded-full col-span-5 py-1">MANUAL</button>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 mx-2 lg:mx-12'>
        {
          tenderCart.map( (cart,index) => <TenderCard cart={cart} key={index}></TenderCard>)
        }
      </div>
      <div className='grid grid-cols-12 gap-6 mx-2 lg:mx-12 my-10'>
            <div className='col-span-12 lg:col-span-8 rounded p-5 bg-white'>
                জনাব/ জনাবা,<br/>
                আপনাকে ব্র্যাকের পক্ষ থেকে শুভেচ্ছা। আপনি জেনে আনন্দিত হবেন, যে ব্র্যাক প্রকিউরমেন্টের বিভিন্ন চাহিদার বিপরীতে টেন্ডারে অংশগ্রহণ প্রক্রিয়া আগামীতে (০১ মার্চ ২০২০ থেকে) শুধু মাত্র অনলাইনে কোটেশন জমা দেয়া যাবে। <br/><br/>
                এমতাবস্থায়, অনলাইনে টেন্ডার প্রক্রিয়ায় অংশগ্রহণ করার ধাপ গুলো ও করণীয় সম্পর্কে জানতে সংযুক্ত প্রেজেন্টেশনটি দেখুন এবং ই-টেন্ডারে রেজিস্ট্রেশন করার জন্য নিচের লিঙ্কে ভিজিট করুন। <br/><br/>
                ই- টেন্ডার লিঙ্কঃ  <a className='pink-color' href="https://tender.brac.net/">tender.brac.net</a> <br/><br/>
                <a className='pink-color' href="https://tender.brac.net/">tender.brac.net</a>  ভিজিট করলে Featured Tenders থেকে শুধুমাত্র টেন্ডার গুলো দেখা যাবে। <br/><br/>
                ই-টেন্ডারে ভেন্ডর/ সাপ্লায়ার রেজিস্ট্রেশন সম্পন্ন হওয়া ব্যাতিত টেন্ডার প্রক্রিয়ায় অংশগ্রহণ করা যাবে না। <br/><br/>
                যদি আপনার প্রতিষ্ঠানের নাম ইতিমধ্যে রেজিস্ট্রেশন করা থাকে তাহলে আপনার User ID ও প্রাথমিক password জানার জন্য দ্রুত প্রকিউরমেন্টে যোগাযোগ করুন। এবং প্রাথমিক password পরিবর্তন করে নিজেই অনলাইনে দরপত্র জমাদান প্রক্রিয়া সম্পন্ন  করুন । প্রয়োজনে আমাদের সহযোগিতা নিন। <br/><br/>
                মনে রাখবেন, আগামীতে ই-মেইলে কিংবা বক্সে কোটেশন জমা দেয়া যাবে না। <br/><br/>
                বিষয়টি আপনার অবগতি ও প্রয়োজনীয় করণীয় এর জন্য জানানো হল। <br/><br/>
                সহযোগীতার জন্য যোগাযোগ করুনঃ <br/>
                Cell: 096-77-444-888<br/>
                Telephone: 02-9881265, Extension: 3480<br/>
                brac.erpsupport@bracits.com<br/>
                অথবা প্রকিউরমেন্টের সংশ্লিষ্ট  ব্যাক্তির সাথে যোগাযোগ করুন।<br/>
            </div>
            <div className='col-span-12 lg:col-span-4 rounded p-8 bg-white'>
              <div className='flex justify-between pink-color mb-10'>
                <div className='text-2xl'>News & Events</div>
                <div className='flex text-xl'>
                  <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512" fill='#ff229a'>
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" 
                  /></svg>
                  <div className='ml-1'>view all</div>
                </div>
              </div>
              {
                news.map( (eachnews) => 
                  <div className='flex mb-6'>
                    <div className='text-2xl text-stone-400'>{eachnews.sl}</div>
                    <div className='text-xl pl-6'>{eachnews.headline}</div>
                  </div>
                )
              }
              
            </div>
      </div>
      
      <div className='mx-2 lg:mx-12 '>
            <div className='flex justify-between mb-5'>
              <div className='text-3xl pt-4'>Feature Tenders</div>
              <div className='flex'>
                <div className='text-3xl pt-4 mr-2 text-gray-500 hidden lg:block'>view more...</div>       
                <Image onClick={previous} 
                className={leftside == 0 ? 'mr-2 cursor-not-allowed' : 'mr-2 cursor-pointer'}  
                src="/owl_prev.png" width={50} height={40} alt="Mail Icon"/>
                <Image onClick={next} 
                className={rightside == tenderFeatures?.length  ? 'mr-2 cursor-not-allowed disabled' : 'mr-2 cursor-pointer'}   
                src="/owl_next.png" width={50} height={40} alt="Mail Icon"/>
                </div>
            </div>
            <Slider
            ref={slider => {
              sliderRef = slider;
            }}
            {...settings}>
              {
                tenderFeatures.map( (featureTender,index) => <FeatureTenders leftside={leftside} featureTender={featureTender} key={index}></FeatureTenders>)
              }
            </Slider>
      </div>
      </div>
  );
};

export default page;