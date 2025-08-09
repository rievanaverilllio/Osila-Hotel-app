'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const ExperiencesPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  // Array of experience background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1539650116574-75c0c6d47a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 15000);
  const { scrollY, isScrolled } = useScrollEffect(0.6);

  const experiences = [
    {
      id: 1,
      category: 'adventure',
      title: 'Ocean Safari & Snorkeling',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-6 hours',
      price: 'From $120',
      description: 'Explore vibrant coral reefs and encounter tropical marine life in crystal-clear waters.',
      highlights: ['Professional guide', 'Equipment included', 'Lunch on beach', 'Photo session']
    },
    {
      id: 2,
      category: 'wellness',
      title: 'Sunrise Yoga & Meditation',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 hours',
      price: 'From $45',
      description: 'Start your day with mindful movement and meditation as the sun rises over the ocean.',
      highlights: ['Certified instructor', 'Yoga mat provided', 'Healthy breakfast', 'Beach location']
    },
    {
      id: 3,
      category: 'cultural',
      title: 'Local Village & Art Workshop',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 hours',
      price: 'From $85',
      description: 'Immerse yourself in local culture and learn traditional crafts from master artisans.',
      highlights: ['Village tour', 'Art workshop', 'Traditional lunch', 'Take home crafts']
    },
    {
      id: 4,
      category: 'adventure',
      title: 'Helicopter Island Tour',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d47a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 hours',
      price: 'From $350',
      description: 'Soar above pristine islands and hidden lagoons with breathtaking aerial views.',
      highlights: ['Professional pilot', 'Island landing', 'Champagne service', 'Photo opportunities']
    },
    {
      id: 5,
      category: 'culinary',
      title: 'Chef\'s Table Experience',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 hours',
      price: 'From $180',
      description: 'Enjoy an exclusive multi-course dinner prepared by our executive chef.',
      highlights: ['7-course tasting', 'Wine pairing', 'Chef interaction', 'Private dining']
    },
    {
      id: 6,
      category: 'wellness',
      title: 'Spa Retreat Day',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8 hours',
      price: 'From $220',
      description: 'Full day of relaxation with signature treatments and wellness activities.',
      highlights: ['Multiple treatments', 'Healthy meals', 'Pool access', 'Relaxation areas']
    },
    {
      id: 7,
      category: 'cultural',
      title: 'Sunset Temple Visit',
      image: 'https://images.unsplash.com/photo-1563887777-8b5e3c3b8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 hours',
      price: 'From $75',
      description: 'Visit ancient temples and witness a spectacular sunset from sacred grounds.',
      highlights: ['Temple tour', 'Cultural guide', 'Sunset viewing', 'Traditional ceremony']
    },
    {
      id: 8,
      category: 'adventure',
      title: 'Private Yacht Charter',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: 'Full day',
      price: 'From $450',
      description: 'Cruise pristine waters on a luxury yacht with personalized service.',
      highlights: ['Luxury yacht', 'Captain & crew', 'Gourmet lunch', 'Water activities']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'culinary', name: 'Culinary' }
  ];

  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

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
            Oasila Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover unforgettable moments through curated adventures, cultural immersions, and luxury experiences
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#experiences-collection" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Experiences
              </a>
              <a href="#custom-experience" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
                Create Custom Experience
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

      {/* Experience Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">Crafted Moments, Lasting Memories</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              At Oasila, we believe every moment should be extraordinary. Our carefully curated experiences blend adventure, culture, wellness, and luxury to create memories that last a lifetime. From sunrise yoga sessions to helicopter tours, each experience is designed to connect you with the natural beauty and rich heritage of our destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Philosophy 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Authentic Adventures</h3>
              <p className="text-gray-700">Every experience is designed to showcase the authentic beauty and culture of our destination, guided by local experts.</p>
            </div>
            
            {/* Philosophy 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-700">Each experience is tailored to your preferences, ensuring every moment reflects your personal style and interests.</p>
            </div>
            
            {/* Philosophy 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Luxury Standards</h3>
              <p className="text-gray-700">From equipment to hospitality, every detail meets the highest standards of luxury and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Categories & Collection */}
      <section id="experiences-collection" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Experience Collection</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Choose from our curated selection of experiences, each designed to create unforgettable memories
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredExperiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {experience.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {experience.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-amber-800 font-medium">{experience.price}</span>
                    <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-sm transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Signature Oasila Experiences</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Exclusive experiences available only to Oasila guests, crafted to showcase the very best of our destination
            </p>
          </div>
          
          {/* Signature Experience 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Private Island Escape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Signature Experience
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Private Island Escape</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Enjoy exclusive access to a pristine private island with personalized service, gourmet dining, and unlimited water activities. This full-day experience includes helicopter transfers and a dedicated island concierge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Helicopter transfers</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Private beach access</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Gourmet picnic lunch</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Water sports equipment</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light text-amber-800">From $850 per person</span>
                <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                  Reserve Experience
                </button>
              </div>
            </div>
          </div>
          
          {/* Signature Experience 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl md:text-4xl font-light text-amber-800">Moonlight Marine Safari</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Embark on a nocturnal adventure to witness bioluminescent plankton and nighttime marine life. This magical experience includes night diving, underwater photography, and a stargazing session on deck.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Night diving guides</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Professional equipment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Astronomy session</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">Midnight refreshments</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light text-amber-800">From $320 per person</span>
                <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                  Reserve Experience
                </button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Moonlight Safari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Experience Section */}
      <section id="custom-experience" className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Create Your Perfect Experience</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Our experience concierge team can create bespoke adventures tailored to your interests, schedule, and preferences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Custom Experience Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-light mb-6">Tell Us About Your Dream Experience</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-100 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div>
                    <label className="block text-amber-100 mb-2">Duration</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                      <option>Half Day (4 hours)</option>
                      <option>Full Day (8 hours)</option>
                      <option>Multi-Day</option>
                      <option>Custom Duration</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Experience Interests</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Adventure Sports</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Cultural Immersion</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Wellness & Spa</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Culinary Arts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Photography</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Private Events</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Describe Your Ideal Experience</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Tell us about your interests, special occasions, or any specific activities you'd like to include..."></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-300 hover:bg-amber-200 text-amber-900 font-medium rounded-sm transition-colors duration-300">
                  Submit Experience Request
                </button>
              </form>
            </div>
            
            {/* Experience Concierge Contact */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4">Experience Concierge</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-amber-200">Direct Line</p>
                      <p className="text-amber-100">+1 (800) 123-4567 Ext. 3</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-amber-200">Email</p>
                      <p className="text-amber-100">experiences@oasila.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-amber-200">Response Time</p>
                      <p className="text-amber-100">Within 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-lg font-medium mb-4">Why Choose Custom Experiences?</h4>
                <ul className="text-amber-100 text-sm space-y-2">
                  <li>• Personalized itineraries based on your interests</li>
                  <li>• Access to exclusive locations and activities</li>
                  <li>• Professional guides and expert knowledge</li>
                  <li>• Flexible scheduling and duration</li>
                  <li>• Special occasion celebrations</li>
                  <li>• Group activities and team building</li>
                  <li>• Photography and videography services</li>
                  <li>• Transportation and logistics handled</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-light text-amber-200 mb-2">24/7</div>
                <p className="text-amber-100">Experience Concierge Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Custom Styles */}
      <style jsx>{`
        .parallax-bg {
          transition: opacity 2s ease-in-out;
          will-change: transform;
        }
        
        .parallax-content {
          will-change: transform;
        }
        
        .smooth-transition {
          transition: all 0.3s ease;
        }
        
        .bg-indicator {
          transition: all 0.3s ease;
        }
        
        .font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>
    </div>
  );
};

export default ExperiencesPage;
