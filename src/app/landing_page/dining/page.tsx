'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const DiningPage = () => {
  // Array of dining background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1587899897387-091bb8551773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 15000);
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
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%), url(${bg})`,
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
            Dining at Oasila
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Experience culinary excellence where every meal is a journey of flavor and sophistication
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#restaurants" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
              Our Restaurants
            </a>
            <a href="#reservations" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
              Make Reservation
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

      {/* Dining Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">Culinary Philosophy</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              At Oasila, we believe dining is an art form that celebrates the finest ingredients, innovative techniques, and the rich cultural heritage of our region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Philosophy Card 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2m0 0V5.5A2.5 2.5 0 109.5 8H12m-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Farm to Table</h3>
              <p className="text-gray-700">We source the freshest ingredients from local farms and artisanal producers to create authentic, sustainable cuisine.</p>
            </div>
            
            {/* Philosophy Card 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Michelin Standards</h3>
              <p className="text-gray-700">Our executive chefs bring world-class expertise and innovative techniques to every dish we create.</p>
            </div>
            
            {/* Philosophy Card 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Passion for Excellence</h3>
              <p className="text-gray-700">Every meal is prepared with love and attention to detail, creating memorable experiences for our guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Our Restaurants</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover our diverse collection of dining venues, each offering a unique culinary experience
            </p>
          </div>
          
          {/* Restaurant 1 - Signature Restaurant */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Ambrosia Restaurant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Signature Restaurant
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Ambrosia</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our flagship restaurant offers contemporary international cuisine with a focus on seasonal ingredients and innovative presentation. Led by Executive Chef Maria Santos, Ambrosia has earned recognition for its creative interpretation of classic dishes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cuisine Type</h4>
                  <p className="text-gray-700">Contemporary International</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Dress Code</h4>
                  <p className="text-gray-700">Smart Casual</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Service Hours</h4>
                  <p className="text-gray-700">6:00 PM - 11:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Reservations</h4>
                  <p className="text-gray-700">Required</p>
                </div>
              </div>
              <a href="#reservations" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                Make Reservation
              </a>
            </div>
          </div>
          
          {/* Restaurant 2 - Coastal Grill */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Coastal Grill</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience the freshest seafood and prime cuts in our oceanfront grill restaurant. With panoramic views of the coastline, Coastal Grill specializes in wood-fired cooking and Mediterranean-inspired flavors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cuisine Type</h4>
                  <p className="text-gray-700">Seafood & Grills</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Dress Code</h4>
                  <p className="text-gray-700">Resort Casual</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Service Hours</h4>
                  <p className="text-gray-700">12:00 PM - 10:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Seating</h4>
                  <p className="text-gray-700">Outdoor Terrace</p>
                </div>
              </div>
              <a href="#reservations" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                Make Reservation
              </a>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Coastal Grill Restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Restaurant 3 - Café Solarium */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587899897387-091bb8551773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Café Solarium" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Café Solarium</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A relaxed all-day dining venue perfect for breakfast, light lunches, and afternoon treats. Featuring freshly baked pastries, artisanal coffee, and healthy options in a bright, airy setting with garden views.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cuisine Type</h4>
                  <p className="text-gray-700">Café & Bakery</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Dress Code</h4>
                  <p className="text-gray-700">Casual</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Service Hours</h4>
                  <p className="text-gray-700">6:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Reservations</h4>
                  <p className="text-gray-700">Walk-ins Welcome</p>
                </div>
              </div>
              <a href="#menu" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Spotlight Section */}
      <section className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Meet Our Executive Chef</h2>
              <div className="h-0.5 w-16 bg-amber-300 mb-8"></div>
              <p className="text-xl font-light text-amber-100 mb-6">
                Chef Maria Santos brings over 15 years of culinary excellence from renowned restaurants across Europe and Asia.
              </p>
              <p className="text-amber-100 mb-8 leading-relaxed">
                With a passion for sustainable cuisine and innovative flavor combinations, Chef Santos has earned multiple culinary awards and has been featured in prestigious food publications. Her philosophy centers on respecting ingredients and creating memorable dining experiences that celebrate both tradition and creativity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>James Beard Award Nominee</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Featured in Michelin Guide</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Sustainable Cuisine Advocate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Chef Maria Santos" 
                className="rounded-lg shadow-xl h-96 w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-amber-800 italic text-sm">"Cooking is about creating moments of joy and bringing people together through the universal language of food."</p>
                <p className="text-amber-800 font-medium text-sm mt-2">- Chef Maria Santos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine & Beverage Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Wine & Beverages</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover our carefully curated selection of wines, spirits, and artisanal beverages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wine Cellar */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Wine Cellar</h3>
              <p className="text-gray-700 mb-4">Over 500 carefully selected wines from renowned vineyards worldwide</p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Rare vintage collections</li>
                <li>• Local and international varietals</li>
                <li>• Sommelier recommendations</li>
                <li>• Wine tasting experiences</li>
              </ul>
              <a href="#wine-menu" className="text-amber-800 hover:text-amber-600 font-medium">
                Explore Wine List
              </a>
            </div>
            
            {/* Craft Cocktails */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Craft Cocktails</h3>
              <p className="text-gray-700 mb-4">Handcrafted cocktails using premium spirits and fresh ingredients</p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Signature Oasila cocktails</li>
                <li>• Classic cocktails reimagined</li>
                <li>• Fresh herb garnishes</li>
                <li>• Non-alcoholic alternatives</li>
              </ul>
              <a href="#cocktail-menu" className="text-amber-800 hover:text-amber-600 font-medium">
                View Cocktail Menu
              </a>
            </div>
            
            {/* Specialty Beverages */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Specialty Beverages</h3>
              <p className="text-gray-700 mb-4">Artisanal coffee, teas, and unique non-alcoholic creations</p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Single-origin coffee beans</li>
                <li>• Premium tea collections</li>
                <li>• Fresh juice blends</li>
                <li>• Seasonal specialty drinks</li>
              </ul>
              <a href="#beverage-menu" className="text-amber-800 hover:text-amber-600 font-medium">
                See Full Selection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Make a Reservation</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Reserve your table and let us create an unforgettable dining experience for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-light text-amber-800 mb-6">Reservation Details</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Restaurant</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>Ambrosia</option>
                      <option>Coastal Grill</option>
                      <option>Café Solarium</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Party Size</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5 guests</option>
                      <option>6+ guests</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Special Requests</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Any dietary restrictions, special occasions, or seating preferences..."></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                  Make Reservation
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-medium text-amber-800 mb-4">Reservation Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone Reservations</p>
                      <p className="text-gray-700">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">dining@oasila.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-amber-800 mb-4">Reservation Policies</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Reservations recommended for dinner service</li>
                  <li>• 24-hour cancellation policy</li>
                  <li>• Smart casual dress code for Ambrosia</li>
                  <li>• Children's menu available upon request</li>
                  <li>• Dietary restrictions accommodated with advance notice</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-medium text-amber-800 mb-4">Private Dining</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Planning a special event or celebration? Our private dining rooms can accommodate groups of 8-50 guests.
                </p>
                <a href="/contact" className="text-amber-800 hover:text-amber-600 font-medium text-sm">
                  Contact Events Team →
                </a>
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

export default DiningPage;