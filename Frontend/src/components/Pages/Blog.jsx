import React from 'react'
import announcement from './../../assets/announcements.png';
import cityStudy from './../../assets/f-insight.png';
import companyLife from './../../assets/com-culture.png';
import techInno from './../../assets/techy.png';
import update from './../../assets/update.png';
import offer from './../../assets/offer.png';
import Header from '../Layouts/Header';

const Blog = () => {
  return (
    <section className="bg-bgColor">
  <Header />
  <div className="container mx-auto px-4 pt-8 md:pt-16 lg:pt-40 lg:pb-2 pb-8">
    {/* Header Section */}
    <div className="flex flex-col items-center mb-8 md:mb-16 space-y-6">
      {/* Title and Description */}
      <div className="w-full sm:w-10/12 md:w-full lg:w-11/12 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headerFont">BLOG</h1>
        <p className="text-sm md:text-xl lg:text-2xl font-medium mt-4 font-bodyFont">
          Discover expert insights, practical tips, and the latest financial trends. Explore everything from expense management strategies to budgeting techniques and financial well-being. Stay informed with success stories, actionable advice, and cutting-edge financial tools to help you take control of your finances.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
        {["Announcements", "Financial Insights", "Company Culture", "Tech & Innovation", "Product Updates", "Exclusive Offers"].map((category) => (
          <button key={category} className="bg-indigo-900 px-2 md:px-3 lg:px-4 py-1 md:py-2 text-xs md:text-base lg:text-lg font-bodyFont rounded-xl text-white">
            {category}
          </button>
        ))}
      </div>
    </div>

    {/* Blog Posts */}
    <div className="space-y-6 md:space-y-8 lg:space-y-12">
      {[
        { title: "Announcements", image: announcement, text: "Stay informed with our latest company announcements, including new feature rollouts, partnerships, and important updates to our services that will help you stay ahead in managing your finances." },
        { title: "Financial Insights", image: cityStudy, text: "Unlock expert financial advice and insights tailored to help you optimize your expenses, understand market trends, and make data-driven financial decisions with confidence." },
        { title: "Company Culture", image: companyLife, text: "Get an inside look at our company values, work culture, and the amazing people behind our innovative financial solutions that drive our mission forward." },
        { title: "Tech & Innovation", image: techInno, text: "Explore the latest advancements in financial technology, learn how we incorporate cutting-edge solutions to improve your experience, and stay ahead with industry innovations." },
        { title: "Product Updates", image: update, text: "Stay up-to-date with our newest product features, enhancements, and updates designed to provide you with an even better expense management experience." },
        { title: "Exclusive Offers", image: offer, text: "Take advantage of our limited-time promotions and special offers that are exclusively available to our valued users to help you save more." }
      ].map((post, index) => (
        <div
          key={post.title}
          className={`flex flex-col items-center gap-12 md:gap-16 lg:gap-24 text-white
            ${index % 2 === 0 
              ? 'xxs:flex-col-reverse md:flex-row' 
              : 'xxs:flex-col md:flex-row'}
            justify-center`}
        >
          {index % 2 !== 0 && (
            <div>
              <img 
                src={post.image} 
                alt={post.title}
                className="h-48 md:h-60 lg:h-72 w-auto object-cover" 
              />
            </div>
          )}
          
          <div className="flex flex-col w-full sm:w-9/12 md:w-8/12 lg:w-5/12 space-y-4 md:space-y-4 lg:space-y-6">
            <h2 className="font-headerFont text-xl md:text-3xl lg:text-4xl font-bold">
              {post.title}
            </h2>
            <p className="font-bodyFont text-base md:text-base lg:text-xl">
              {post.text}
            </p>
          </div>
          
          {index % 2 === 0 && (
            <div>
              <img 
                src={post.image} 
                alt={post.title}
                className="h-48 md:h-60 lg:h-72 w-auto object-cover" 
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Blog