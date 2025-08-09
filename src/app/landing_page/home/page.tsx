'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { Card } from '@/components/ui/Card';

const HomePage = () => {
  // Array of background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  // Use shared hooks
  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 20000);
  const { scrollY, isScrolled } = useScrollEffect(0.8);

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
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 100%), url(${bg})`,
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          />
        ))}

        {/* Hero Content */}
        <div 
          className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto parallax-content"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none tracking-wide font-lora drop-shadow-2xl">
            <span className="block text-center">Oasila</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            An exclusive luxury retreat where elegance meets tranquility
          </p>
          <div className="mt-6 w-24 h-1 bg-white mx-auto"></div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/auth/login" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </a>
            <a href="about" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
              About
            </a>
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

      {/* Image Gallery Section */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-2 md:gap-4">
            <div className="col-span-12">
              <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxury suite" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl md:text-3xl font-light p-6 md:p-8">Luxurious Accommodations</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-8">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Fine dining" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl md:text-2xl font-light p-6 md:p-8">Dining</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-4">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Spa experience" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl md:text-2xl font-light p-6 md:p-8">Wellness</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Landscape view" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-lg md:text-xl font-light p-4 md:p-6">Nature</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80" 
                  alt="Pool view" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-lg md:text-xl font-light p-4 md:p-6">Leisure</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80" 
                  alt="Beach view" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-lg md:text-xl font-light p-4 md:p-6">Experiences</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Feature Section */}
      <section className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 max-w-3xl mx-auto text-center text-white rounded-md">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-lora mb-4">Experience Luxury</h2>
            <div className="h-0.5 w-24 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center mt-10">
              <a href="/rooms" className="px-8 py-4 bg-white text-amber-900 font-medium rounded-sm hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content Section - Text & Image Combination */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">The Oasila Experience</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
              Immerse yourself in the perfect blend of luxury, comfort and natural beauty at our exclusive retreat.
            </p>
          </div>
        
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Large Image */}
            <div className="md:col-span-8 relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury accommodation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-light text-white">Luxury Accommodation</h3>
                <p className="text-white/80 mt-2">Elegant rooms with breathtaking views</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our thoughtfully designed accommodations blend sophisticated elegance with the warmth of home. Each room and suite features premium amenities and breathtaking views.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Luxury king-size beds</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Private terraces with views</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Bespoke furnishings</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">24-hour concierge service</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Dining */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Fine dining" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Exquisite Dining</h3>
                <p className="text-white/80 text-sm mt-1">Farm-to-table cuisine with seasonal ingredients</p>
                <a href="/dining" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Wellness */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Spa experience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Wellness Retreat</h3>
                <p className="text-white/80 text-sm mt-1">Rejuvenating treatments for mind and body</p>
                <a href="/wellness" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Activities */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80" 
                alt="Beach activities" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Curated Experiences</h3>
                <p className="text-white/80 text-sm mt-1">Unforgettable adventures in nature</p>
                <a href="/experiences" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Feature Section */}
      <section className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 max-w-3xl mx-auto text-center text-white rounded-md">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-lora mb-4">Experience Luxury</h2>
            <div className="h-0.5 w-24 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center mt-10">
              <a href="/rooms" className="px-8 py-4 bg-white text-amber-900 font-medium rounded-sm hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content Section - Text & Image Combination */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">The Oasila Experience</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
              Immerse yourself in the perfect blend of luxury, comfort and natural beauty at our exclusive retreat.
            </p>
          </div>
        
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Large Image */}
            <div className="md:col-span-8 relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury accommodation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-light text-white">Luxury Accommodation</h3>
                <p className="text-white/80 mt-2">Elegant rooms with breathtaking views</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our thoughtfully designed accommodations blend sophisticated elegance with the warmth of home. Each room and suite features premium amenities and breathtaking views.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Luxury king-size beds</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Private terraces with views</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Bespoke furnishings</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">24-hour concierge service</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Dining */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Fine dining" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Exquisite Dining</h3>
                <p className="text-white/80 text-sm mt-1">Farm-to-table cuisine with seasonal ingredients</p>
                <a href="/dining" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Wellness */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Spa experience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Wellness Retreat</h3>
                <p className="text-white/80 text-sm mt-1">Rejuvenating treatments for mind and body</p>
                <a href="/wellness" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Activities */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80" 
                alt="Beach activities" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Curated Experiences</h3>
                <p className="text-white/80 text-sm mt-1">Unforgettable adventures in nature</p>
                <a href="/experiences" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Feature Section */}
      <section className="relative h-screen bg-fixed bg-center bg-cover overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 max-w-3xl mx-auto text-center text-white rounded-md">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-lora mb-4">Experience Luxury</h2>
            <div className="h-0.5 w-24 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center mt-10">
              <a href="/rooms" className="px-8 py-4 bg-white text-amber-900 font-medium rounded-sm hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content Section - Text & Image Combination */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">The Oasila Experience</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
              Immerse yourself in the perfect blend of luxury, comfort and natural beauty at our exclusive retreat.
            </p>
          </div>
        
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Large Image */}
            <div className="md:col-span-8 relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury accommodation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-light text-white">Luxury Accommodation</h3>
                <p className="text-white/80 mt-2">Elegant rooms with breathtaking views</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our thoughtfully designed accommodations blend sophisticated elegance with the warmth of home. Each room and suite features premium amenities and breathtaking views.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Luxury king-size beds</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Private terraces with views</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Bespoke furnishings</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">24-hour concierge service</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Dining */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Fine dining" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Exquisite Dining</h3>
                <p className="text-white/80 text-sm mt-1">Farm-to-table cuisine with seasonal ingredients</p>
                <a href="/dining" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Wellness */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Spa experience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Wellness Retreat</h3>
                <p className="text-white/80 text-sm mt-1">Rejuvenating treatments for mind and body</p>
                <a href="/wellness" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Activities */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80" 
                alt="Beach activities" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl text-white font-light">Curated Experiences</h3>
                <p className="text-white/80 text-sm mt-1">Unforgettable adventures in nature</p>
                <a href="/experiences" className="mt-4 text-amber-300 text-sm hover:text-amber-100 transition-colors duration-300 flex items-center">
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Showcase Section */}
      <section className="py-10 md:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Luxurious Accommodations</h2>
            <p className="text-gray-700">Select your perfect retreat</p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Room Card 1 */}
            <Card
              overlay
              imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Deluxe Suite"
              className="h-[400px]"
              shadowClassName="shadow-xl"
              title={<span className="text-2xl font-light">Deluxe Suite</span>}
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light">From $350/night</span>
                  <a href="/rooms/deluxe" className="px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300">
                    View
                  </a>
                </div>
              }
            >
              <div className="h-0.5 w-10 bg-amber-600 mb-4" />
            </Card>
            
            {/* Room Card 2 */}
            <Card
              overlay
              imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Executive Suite"
              className="h-[400px]"
              shadowClassName="shadow-xl"
              title={<span className="text-2xl font-light">Executive Suite</span>}
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light">From $450/night</span>
                  <a href="/rooms/executive" className="px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300">
                    View
                  </a>
                </div>
              }
            >
              <div className="h-0.5 w-10 bg-amber-600 mb-4" />
            </Card>
            
            {/* Room Card 3 */}
            <Card
              overlay
              imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              imageAlt="Presidential Suite"
              className="h-[400px]"
              shadowClassName="shadow-xl"
              title={<span className="text-2xl font-light">Presidential Suite</span>}
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light">From $650/night</span>
                  <a href="/rooms/presidential" className="px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300">
                    View
                  </a>
                </div>
              }
            >
              <div className="h-0.5 w-10 bg-amber-600 mb-4" />
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Amenities Section with Map */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-6">Discover Our Location</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nestled in a tranquil setting with breathtaking views, Oasila offers the perfect balance of seclusion and accessibility. Our location provides easy access to major attractions while maintaining a peaceful retreat atmosphere.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Resort Amenities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Infinity Pool</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Luxury Spa</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Fine Dining</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Nearby Attractions</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Beach Access</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Nature Trails</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Historic Sites</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a href="/contact" className="inline-block px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Right Side - Image Map */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Resort Location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs text-center">
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Oasila Resort</h3>
                  <p className="text-gray-700 text-sm mb-4">123 Paradise Road<br/>Coastal Haven, 98765</p>
                  <a href="/location" className="text-amber-800 hover:text-amber-600 font-medium text-sm flex items-center justify-center">
                    View on Map
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Events & Packages Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Special Events & Packages</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Create unforgettable memories with our specially curated packages and seasonal offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1515459961680-c06f82b6d54d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Romantic Getaway" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-amber-800 font-medium mb-2">Romantic Getaway</h3>
                <p className="text-gray-600 mb-4">Perfect for couples celebrating anniversaries or simply enjoying time together</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Luxury accommodation for 2 nights
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Candlelit dinner by the beach
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Couples spa treatment
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-800 font-medium">From $899</span>
                  <a href="/packages/romantic" className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-sm transition-colors duration-300">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Family Vacation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-amber-800 font-medium mb-2">Family Adventure</h3>
                <p className="text-gray-600 mb-4">Create lasting memories with the whole family in our spacious accommodations</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    3-night stay for family of 4
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Kids activities program
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Family beach excursion
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-800 font-medium">From $1,299</span>
                  <a href="/packages/family" className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-sm transition-colors duration-300">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Wellness Retreat" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-amber-800 font-medium mb-2">Wellness Retreat</h3>
                <p className="text-gray-600 mb-4">Revitalize your mind, body and soul with our comprehensive wellness package</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    4-night rejuvenation stay
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Daily yoga and meditation
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Spa treatments & wellness cuisine
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-800 font-medium">From $1,499</span>
                  <a href="/packages/wellness" className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-sm transition-colors duration-300">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/packages" className="inline-block px-8 py-3 border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-medium rounded-sm transition-colors duration-300">
              View All Packages
            </a>
          </div>
        </div>
      </section>
      
      {/* Guest Reviews Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Guest Experiences</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Read what our guests have to say about their experiences at Oasila
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-amber-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-amber-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">"Our honeymoon at Oasila exceeded every expectation. The staff went above and beyond to make our stay memorable. The private beach dinner under the stars was absolutely magical!"</p>
              
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/48.jpg" alt="Guest" />
                <div>
                  <p className="font-medium text-amber-800">Emily & Michael</p>
                  <p className="text-gray-600 text-sm">Honeymoon Package, June 2025</p>
                </div>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-amber-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-amber-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">"As a family of four, we were amazed by how well Oasila catered to both adults and children. The kids club activities kept our children entertained while we enjoyed the spa. Perfect balance!"</p>
              
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Guest" />
                <div>
                  <p className="font-medium text-amber-800">James Wilson</p>
                  <p className="text-gray-600 text-sm">Family Adventure, April 2025</p>
                </div>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-amber-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-amber-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">"The wellness retreat was exactly what I needed. The daily yoga sessions overlooking the ocean and the farm-to-table cuisine completely rejuvenated me. I'll definitely be back next year."</p>
              
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Guest" />
                <div>
                  <p className="font-medium text-amber-800">Lisa Chen</p>
                  <p className="text-gray-600 text-sm">Wellness Retreat, March 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/reviews" className="inline-block px-8 py-3 border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-medium rounded-sm transition-colors duration-300">
              Read More Reviews
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Frequently Asked Questions</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about your stay at Oasila
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">What are the check-in and check-out times?</h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Standard check-in time is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee. Please contact our concierge team prior to your arrival to make special arrangements.</p>
                </div>
              </details>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">Is airport transfer available?</h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Yes, we offer both shared and private airport transfers. Private transfers can be arranged for any time of day, while shared shuttles run on a fixed schedule. Please provide your flight details at least 48 hours prior to arrival so we can arrange your transportation.</p>
                </div>
              </details>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">Do you accommodate special dietary requirements?</h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Absolutely! Our chefs can accommodate various dietary requirements including vegetarian, vegan, gluten-free, dairy-free, and allergies. Please inform us of any special dietary needs when making your reservation or at least 72 hours before your arrival.</p>
                </div>
              </details>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">Are children welcome at the resort?</h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Yes, children of all ages are welcome at Oasila. We offer family-friendly accommodations and a kids club with supervised activities for children aged 4-12. Babysitting services can also be arranged with advance notice for an additional fee.</p>
                </div>
              </details>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-900">What payment methods are accepted?</h3>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as digital payment methods like PayPal and digital wallets. Cash is accepted for on-site purchases, but credit card is required for check-in and room charges.</p>
                </div>
              </details>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">Still have questions? Our team is here to help.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Split CTA Section */}
      <section className="relative h-[60vh] md:h-[50vh] flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Hotel Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 md:bg-black/20 flex items-center justify-center md:justify-end md:pr-12">
            <div className="text-center md:text-right text-white max-w-xs">
              <h3 className="text-2xl md:text-3xl font-light mb-4">Exclusive Offers</h3>
              <p className="text-sm md:text-base mb-6">Discover our special packages and seasonal promotions.</p>
              <a href="/offers" className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
                View Offers
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Hotel Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 md:bg-black/20 flex items-center justify-center md:justify-start md:pl-12">
            <div className="text-center md:text-left text-white max-w-xs">
              <h3 className="text-2xl md:text-3xl font-light mb-4">Make a Reservation</h3>
              <p className="text-sm md:text-base mb-6">Secure your stay at our luxurious resort today.</p>
              <a href="/auth/login" className="inline-block px-6 py-2 bg-amber-800 hover:bg-amber-900 text-white transition-colors duration-300">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Stay Updated with Oasila</h2>
              <p className="mb-8 text-amber-100">
                Subscribe to our newsletter and be the first to know about exclusive offers, seasonal packages, and special events at Oasila.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-sm bg-white/10 border border-amber-200/30 text-white placeholder-amber-200/70 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-64"
                />
                <button className="px-6 py-3 bg-white text-amber-900 font-medium rounded-sm hover:bg-amber-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-amber-200/70">
                By subscribing, you agree to receive marketing communications from Oasila. You can unsubscribe at any time.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Resort view" 
                  className="rounded-md h-24 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Spa view" 
                  className="rounded-md h-24 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Hotel Exterior" 
                  className="rounded-md h-24 w-full object-cover"
                />
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

export default HomePage;
