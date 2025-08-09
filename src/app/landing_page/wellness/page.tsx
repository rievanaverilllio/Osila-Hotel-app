'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const WellnessPage = () => {
  // Array of wellness background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 18000);
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
            Wellness at Oasila
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Rejuvenate your mind, body and soul through our holistic wellness journey
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#spa" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
              Explore Spa
            </a>
            <a href="#book-treatment" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
              Book Treatment
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

      {/* Wellness Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">Holistic Wellness Philosophy</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              At Oasila Wellness Center, we believe in nurturing the complete harmony of mind, body, and spirit through ancient wisdom and modern therapeutic techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Philosophy Card 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Mind Balance</h3>
              <p className="text-gray-700">Achieve mental clarity and inner peace through meditation, mindfulness practices, and therapeutic relaxation techniques.</p>
            </div>
            
            {/* Philosophy Card 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Body Renewal</h3>
              <p className="text-gray-700">Revitalize your physical being with therapeutic massage, body treatments, and healing therapies using natural ingredients.</p>
            </div>
            
            {/* Philosophy Card 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Spirit Connection</h3>
              <p className="text-gray-700">Reconnect with your inner essence through spiritual practices, energy healing, and transformative wellness rituals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Services Section */}
      <section id="spa" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Signature Spa Services</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Experience our carefully curated collection of therapeutic treatments designed to restore balance and vitality
            </p>
          </div>
          
          {/* Massage Therapies */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Massage Therapy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Massage Therapies</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert therapists combine traditional techniques with modern wellness practices to create deeply therapeutic massage experiences tailored to your individual needs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Oasila Signature Massage (90 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Full-body therapeutic massage combining Swedish and deep tissue techniques</p>
                  <span className="text-amber-800 font-medium">$180</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Hot Stone Therapy (75 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Heated volcanic stones melt away tension and stress</p>
                  <span className="text-amber-800 font-medium">$165</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Aromatherapy Massage (60 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Essential oil-infused massage for relaxation and rejuvenation</p>
                  <span className="text-amber-800 font-medium">$145</span>
                </div>
              </div>
              <a href="#book-treatment" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                Book Massage
              </a>
            </div>
          </div>
          
          {/* Facial Treatments */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Facial Treatments</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Revitalize your skin with our advanced facial treatments using premium organic products and cutting-edge techniques for radiant, healthy-looking skin.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Diamond Glow Facial (75 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Microdermabrasion treatment for luminous, youthful skin</p>
                  <span className="text-amber-800 font-medium">$195</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Hydrating Botanical Facial (60 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Deeply moisturizing treatment with natural botanical extracts</p>
                  <span className="text-amber-800 font-medium">$150</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Anti-Aging Collagen Facial (90 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Advanced anti-aging treatment to restore skin elasticity</p>
                  <span className="text-amber-800 font-medium">$220</span>
                </div>
              </div>
              <a href="#book-treatment" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                Book Facial
              </a>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Facial Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Body Treatments */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Body Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Body Treatments</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Indulge in luxurious body treatments that exfoliate, nourish, and rejuvenate your skin while providing deep relaxation and therapeutic benefits.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Sea Salt Body Scrub (45 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Exfoliating treatment with mineral-rich sea salts and essential oils</p>
                  <span className="text-amber-800 font-medium">$125</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Hydrating Body Wrap (60 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Nourishing wrap with natural ingredients to soften and moisturize</p>
                  <span className="text-amber-800 font-medium">$155</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Detox Mud Wrap (75 min)</h4>
                  <p className="text-gray-700 text-sm mb-2">Purifying treatment to eliminate toxins and revitalize skin</p>
                  <span className="text-amber-800 font-medium">$175</span>
                </div>
              </div>
              <a href="#book-treatment" className="inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                Book Treatment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs Section */}
      <section className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Wellness Programs</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Immerse yourself in comprehensive wellness journeys designed to transform your well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Daily Wellness Ritual</h3>
                <p className="text-amber-100 text-sm mb-4">Start each day with intention through guided practices</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Morning meditation sessions
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sunrise yoga classes
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Breathwork workshops
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Mindfulness practices
                </li>
              </ul>
              <a href="#programs" className="text-amber-300 hover:text-amber-100 font-medium text-sm">
                Learn More →
              </a>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Detox & Renewal</h3>
                <p className="text-amber-100 text-sm mb-4">Cleanse and rejuvenate your entire system</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Detoxifying body treatments
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Nutritional cleanse menus
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Lymphatic drainage massage
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sauna and steam sessions
                </li>
              </ul>
              <a href="#programs" className="text-amber-300 hover:text-amber-100 font-medium text-sm">
                Learn More →
              </a>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Energy Restoration</h3>
                <p className="text-amber-100 text-sm mb-4">Rebalance your energy and vitality</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Energy healing sessions
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Chakra balancing treatments
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sound therapy sessions
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-amber-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Crystal healing rituals
                </li>
              </ul>
              <a href="#programs" className="text-amber-300 hover:text-amber-100 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Facilities Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Wellness Facilities</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              State-of-the-art facilities designed to support your wellness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Facility 1 */}
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Treatment Rooms" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Private Treatment Rooms</h3>
              <p className="text-gray-700 text-sm">Luxuriously appointed rooms for personalized spa experiences</p>
            </div>
            
            {/* Facility 2 */}
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Relaxation Lounge" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Relaxation Lounge</h3>
              <p className="text-gray-700 text-sm">Tranquil space for meditation and quiet reflection</p>
            </div>
            
            {/* Facility 3 */}
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sauna & Steam" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sauna & Steam</h3>
              <p className="text-gray-700 text-sm">Traditional Finnish sauna and eucalyptus steam rooms</p>
            </div>
            
            {/* Facility 4 */}
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Yoga Pavilion" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Yoga Pavilion</h3>
              <p className="text-gray-700 text-sm">Open-air studio overlooking serene natural landscapes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-treatment" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Book Your Wellness Experience</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Schedule your personalized wellness journey with our expert therapists
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-light text-amber-800 mb-6">Treatment Reservation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Time</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Treatment Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>Massage Therapy</option>
                    <option>Facial Treatment</option>
                    <option>Body Treatment</option>
                    <option>Wellness Program</option>
                    <option>Couples Treatment</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Number of Guests</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>1 guest</option>
                    <option>2 guests (Couples)</option>
                    <option>3+ guests (Group)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Special Requests or Health Considerations</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Please let us know about any allergies, health conditions, or special preferences..."></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-sm transition-colors duration-300">
                  Book Treatment
                </button>
              </form>
            </div>
            
            {/* Contact & Policies */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-medium text-amber-800 mb-4">Spa Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Spa Hours</p>
                      <p className="text-gray-700">Daily: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Spa Reservations</p>
                      <p className="text-gray-700">+1 (800) 123-4567 Ext. 2</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">spa@oasila.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-amber-800 mb-4">Spa Policies</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Please arrive 30 minutes before your appointment</li>
                  <li>• 24-hour cancellation policy applies</li>
                  <li>• Late arrivals may result in shortened treatment time</li>
                  <li>• Spa facilities are available to treatment guests</li>
                  <li>• Minimum age for spa treatments is 16 years</li>
                  <li>• Please inform us of any allergies or health conditions</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-medium text-amber-800 mb-4">Spa Packages</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Looking for a complete wellness experience? Ask about our half-day and full-day spa packages that combine multiple treatments.
                </p>
                <a href="/packages" className="text-amber-800 hover:text-amber-600 font-medium text-sm">
                  View Spa Packages →
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

export default WellnessPage;