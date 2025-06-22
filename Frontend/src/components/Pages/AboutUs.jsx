import React, { useState } from 'react';
import about from './../../assets/AboutHero.png';
import phone from './../../assets/laptop.png';
import Header from '../Layouts/Header';
// import rokologo from "./../../assets/Roko-logo.png";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <section className="bg-indigo-200">
  {/* Hero Section */}
  <div className="bg-gradient-to-tl from-indigo-400 to-indigo-950 pb-4 mb-12">
    <Header/>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center pt-4 md:pt-12 lg:pt-48">
        {/* Text Content */}
        <div className="text-white w-full md:w-9/12 px-4 sm:px-6 md:px-2 lg:px-24 text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headerFont leading-relaxed">
            We work together, to work for you
          </h1>
          <p className="text-base md:text-xl font-medium mt-4 font-bodyFont">
            Welcome to SpendSmart, your go-to expense tracker! We help you stay on top of your finances by making it easy to track your spending, control finances and achieve your goals. Whether you're managing personal expenses or tracking business costs, our intuitive interface keeps things simple and organized. Start taking control of your money today!
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-9/12">
          <img src={about} alt="About illustration" className="w-full" />
        </div>
      </div>
    </div>
  </div>

  <div className='flex flex-col items-center gap-8'>
    {/* Phone Image */}
      <div className='space-y-2 text-center'>
        <p className='font-headerFont text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Track. Save. Succeed.</p>
        <p className='font-bodyFont text-base md:text-lg lg:text-xl'>Take control of your finances with SpendSmart-your simple and reliable expense tracking solution.</p>
      </div>

      <div className="w-full md:w-6/12 flex justify-center md:justify-end">
        <img src={phone} alt="Sending Reports Image" className="w-full max-w-md md:max-w-none"/>
      </div>

      {/* <div>

      </div> */}
  </div>

  {/* Who are we section */}
  <div className="container ">
    <div className=" p-4 sm:p-6 md:py-16 md:px-2 lg:p-24 gap-8 md:gap-6 lg:gap-12">
      {/* Text Content */}
      <div className="w-full space-y-2 md:space-y-4 lg:space-y-6">
        <h2 className="font-headerFont text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Who are we?
        </h2>
        <div className="space-y-8">
          <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">1. Our story</p>
          <p className="font-bodyFont text-xs md:text-sm lg:text-base">
           <span className='lg:text-lg md:text-base text-sm font-semibold'>We started SpendSmart with a simple goal:</span> to help people take control of their finances without the hassle. Managing money can be overwhelming, and we wanted to create a tool that makes it easier to track spending and build better financial habits. Whether you're saving for the future or just trying to stay on top of monthly bills, we're here to support you every step of the way.
          </p>
          </div>
          {isExpanded && (
            <div className="space-y-8">
              <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">2. Our mission</p>
          <p className="font-bodyFont text-xs md:text-sm lg:text-base">
            At SpendSmart, we believe that financial freedom starts with understanding where your money goes. Our mission is to provide an easy-to-use platform that helps individuals and businesses manage their finances effortlessly. By offering powerful tools and actionable insights, we empower our users to make informed financial decisions and achieve their goals.
          </p>
          </div>

          <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">3. Our values</p>
            <ul className='font-bodyFont text-xs md:text-sm lg:text-base space-y-2 list-disc pl-5'>
              <li><span className='lg:text-lg md:text-base text-sm font-semibold'>Simplicity:</span> We design tools that are easy to use and understand.</li>
              <li><span className='lg:text-lg md:text-base text-sm font-semibold'>Transparency:</span> Your financial data is yours, and we ensure it's always accessible and clear.</li>
              <li><span className='lg:text-lg md:text-base text-sm font-semibold'>Empowerment:</span> We provide insights and guidance to help you take charge of your money.</li>
              <li><span className='lg:text-lg md:text-base text-sm font-semibold'>Security:</span> Protecting your financial information is our top priority.</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">4. Who we are</p>
          <p className="font-bodyFont text-xs md:text-sm lg:text-base">
            We are a team of finance and technology enthusiasts who believe that everyone deserves financial clarity. Our platform is designed to provide a stress-free way to manage expenses, track spending patterns, and make better financial decisions. With a focus on simplicity and accuracy, we aim to be your trusted partner on your financial journey.
          </p>
          </div>

          <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">5. Why choose us?</p>
          <p className="font-bodyFont text-xs md:text-sm lg:text-base">
            We understand that every dollar counts. That's why SpendSmart offers an intuitive and reliable expense tracking solution tailored to your needs. With a focus on accuracy, security, and user-friendly features, we help you track your spending and achieve financial peace of mind.
          </p>
          </div>

          <div className='space-y-3'>
            <p className="font-headerFont font-bold text-lg md:text-xl lg:text-2xl">6. Our commitment</p>
          <p className="font-bodyFont text-xs md:text-sm lg:text-base">
            At SpendSmart, we are committed to providing a seamless and secure expense tracking experience. We are passionate about helping individuals make smarter financial choices through easy-to-use tools and insightful reports. Your financial well-being is our top priority.
          </p>
          </div>

            </div>
          )}
          <p 
            className="font-bodyFont text-base md:text-lg lg:text-xl text-indigo-700 hover:text-indigo-900 cursor-pointer"
            onClick={handleToggle}
          >
            {isExpanded ? "Show Less..." : "Show More..."}
          </p>
        </div>
        <Link to='/register'><button className="w-full md:w-auto bg-indigo-900 text-white px-24 py-3 rounded-md font-medium font-bodyFont mt-4">
          Sign Up
        </button></Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutUs