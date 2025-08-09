'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const PresidentialSuitePage = () => {
  // Array of presidential suite background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 20000);
  const { scrollY, isScrolled } = useScrollEffect(0.6);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Parallax */}
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center parallax-bg smooth-transition ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 100%), url(${bg})`,
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          />
        ))}

        {/* Hero Content */}
        <div 
          className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto parallax-content"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide font-lora drop-shadow-2xl mb-6">
            Presidential Suite
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            The pinnacle of luxury accommodation - where presidential elegance meets unparalleled comfort
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl md:text-3xl font-light text-amber-200">
              From $650 per night
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#book-suite" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
                Book Now
              </a>
              <a href="#suite-details" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
                Explore Suite
              </a>
            </div>
          </div>
        </div>

        {/* Background Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full bg-indicator ${
                index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Suite Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">The Ultimate Presidential Experience</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Spanning 2,500 square feet of pure luxury, our Presidential Suite offers an unmatched level of sophistication and personalized service for the most discerning guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">2,500 sq ft Living Space</h3>
              <p className="text-gray-700">Expansive suite featuring separate living, dining, and bedroom areas with panoramic ocean views.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Dedicated Butler Service</h3>
              <p className="text-gray-700">Personal butler available 24/7 to cater to your every need and preference throughout your stay.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">VIP Amenities</h3>
              <p className="text-gray-700">Exclusive access to premium services including private beach area, yacht charter, and helicopter transfers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Suite Details Section */}
      <section id="suite-details" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Master Bedroom */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Master Bedroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Master Suite
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Master Bedroom & Bath</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The master bedroom features a king-size bed with premium linens, while the marble bathroom includes a deep soaking tub, separate rain shower, and dual vanities.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">California King bed with Egyptian cotton linens</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Walk-in closet with personal styling service</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Marble bathroom with soaking tub and steam shower</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Private balcony with panoramic ocean views</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Living & Dining Areas */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Living & Dining Areas</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elegant living spaces designed for both relaxation and entertaining, featuring handcrafted furniture, original artwork, and a formal dining area for intimate gatherings.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Grand piano for private performances</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Formal dining table for 8 guests</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Premium entertainment system with surround sound</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Private bar with premium spirits collection</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Living Area" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Private Terrace */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Private Terrace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Private Terrace & Infinity Pool</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                An expansive private terrace featuring your own infinity pool, outdoor dining area, and sun loungers, offering complete privacy and breathtaking sunset views.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Private infinity pool with ocean views</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Outdoor dining pavilion with kitchen access</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Luxury sun loungers and day beds</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Private helipad access for arrivals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Exclusive Presidential Services</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Experience unparalleled luxury with our signature services designed exclusively for Presidential Suite guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Personal Butler</h3>
              <p className="text-amber-100 text-sm">Dedicated butler service available 24/7 for all your needs</p>
            </div>
            
            {/* Service 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Private Jet Service</h3>
              <p className="text-amber-100 text-sm">Helicopter and private jet arrangements for seamless travel</p>
            </div>
            
            {/* Service 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">VIP Experiences</h3>
              <p className="text-amber-100 text-sm">Curated exclusive experiences and private events</p>
            </div>
            
            {/* Service 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2m0 0V5.5A2.5 2.5 0 109.5 8H12m-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Private Chef</h3>
              <p className="text-amber-100 text-sm">Personal chef available for in-suite dining experiences</p>
            </div>
          </div>
          
          {/* Additional Services List */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-lg p-8">
            <h3 className="text-2xl font-light mb-8 text-center">Additional Exclusive Benefits</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Airport transfers in luxury vehicles</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Daily fresh flower arrangements</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Complimentary laundry and pressing service</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Priority spa and restaurant reservations</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Private beach cabana with service</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Yacht charter arrangements</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">Personal shopping and styling services</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">24/7 medical concierge service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Presidential Suite Gallery</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Take a visual journey through our most luxurious accommodation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Suite Overview" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="relative h-40 md:h-48 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bedroom" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-48 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Living Room" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-48 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bathroom" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-48 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Terrace" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-suite" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Reserve Your Presidential Suite</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Experience the pinnacle of luxury accommodation at Oasila
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-light text-amber-800 mb-6">Reservation Details</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Check-in Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Check-out Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Adults</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Children</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>0 Children</option>
                      <option>1 Child</option>
                      <option>2 Children</option>
                      <option>3 Children</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Special Services</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-gray-700 text-sm">Airport Transfer (Private Jet)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-gray-700 text-sm">Personal Chef Service</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-gray-700 text-sm">Yacht Charter</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-gray-700 text-sm">Private Event Planning</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Special Requests</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Please share any special occasions, dietary requirements, or preferences..."></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                  Reserve Presidential Suite
                </button>
              </form>
            </div>
            
            {/* Suite Information & Pricing */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-medium text-amber-800 mb-4">Suite Details & Pricing</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Suite Size</span>
                    <span className="font-medium">2,500 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Maximum Occupancy</span>
                    <span className="font-medium">4 Adults + 2 Children</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Base Rate (per night)</span>
                    <span className="font-medium text-amber-800">$650</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Total (including taxes)</span>
                    <span className="font-medium text-xl text-amber-800">$750</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-amber-800 mb-4">What's Included</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• 24/7 dedicated butler service</li>
                  <li>• Private infinity pool and terrace</li>
                  <li>• Complimentary airport transfers</li>
                  <li>• Daily fresh flower arrangements</li>
                  <li>• Premium minibar and champagne</li>
                  <li>• Priority dining and spa reservations</li>
                  <li>• Private beach cabana access</li>
                  <li>• Concierge and lifestyle services</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-medium text-amber-800 mb-4">Contact Presidential Services</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Presidential Desk</p>
                      <p className="text-gray-700">+1 (800) 123-4567 Ext. 1</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">presidential@oasila.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PresidentialSuitePage;