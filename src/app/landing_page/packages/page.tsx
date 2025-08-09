'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

interface PackageType {
  id: number;
  category: string;
  title: string;
  duration: string;
  price: string;
  originalPrice: string;
  image: string;
  featured: boolean;
  description: string;
  includes: string[];
  highlights: string[];
}

const PackagesPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedPackage, setSelectedPackage] = React.useState<PackageType | null>(null);

  // Array of package background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 15000);
  const { scrollY, isScrolled } = useScrollEffect(0.6);

  const packages: PackageType[] = [
    {
      id: 1,
      category: 'romantic',
      title: 'Honeymoon Paradise',
      duration: '5 Days 4 Nights',
      price: 'From $2,850',
      originalPrice: '$3,200',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      description: 'Perfect romantic getaway with luxury accommodations and intimate experiences',
      includes: [
        'Premium Ocean Suite for 4 nights',
        'Private sunset dinner on beach',
        'Couples spa treatment (3 hours)',
        'Champagne welcome & daily breakfast',
        'Private yacht sunset cruise',
        'Airport transfers in luxury vehicle'
      ],
      highlights: ['Private beach dinner', 'Couples massage', 'Yacht cruise', 'VIP treatment']
    },
    {
      id: 2,
      category: 'adventure',
      title: 'Island Explorer',
      duration: '7 Days 6 Nights',
      price: 'From $3,450',
      originalPrice: '$3,890',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Thrilling adventures and cultural experiences across pristine islands',
      includes: [
        'Deluxe Ocean View room for 6 nights',
        'Helicopter island tour',
        'Ocean safari & snorkeling',
        'Cultural village experience',
        'All meals and beverages',
        'Professional adventure guide'
      ],
      highlights: ['Helicopter tour', 'Island hopping', 'Snorkeling', 'Cultural tours']
    },
    {
      id: 3,
      category: 'wellness',
      title: 'Wellness Sanctuary',
      duration: '6 Days 5 Nights',
      price: 'From $2,980',
      originalPrice: '$3,350',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Complete wellness retreat focusing on mind, body, and soul rejuvenation',
      includes: [
        'Spa Suite accommodation for 5 nights',
        'Daily yoga & meditation sessions',
        'Wellness consultation & treatments',
        'Detox meals & healthy cuisine',
        'Mindfulness workshops',
        'Wellness amenity kit'
      ],
      highlights: ['Daily yoga', 'Spa treatments', 'Wellness meals', 'Mindfulness']
    },
    {
      id: 4,
      category: 'luxury',
      title: 'Presidential Luxury',
      duration: '4 Days 3 Nights',
      price: 'From $5,250',
      originalPrice: '$6,000',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      description: 'Ultimate luxury experience with presidential suite and exclusive services',
      includes: [
        'Presidential Suite for 3 nights',
        '24/7 personal butler service',
        'Private jet airport transfers',
        'Exclusive dining experiences',
        'VIP spa treatments',
        'Private beach access'
      ],
      highlights: ['Presidential suite', 'Butler service', 'Private jet', 'VIP access']
    },
    {
      id: 5,
      category: 'family',
      title: 'Family Paradise',
      duration: '8 Days 7 Nights',
      price: 'From $4,200',
      originalPrice: '$4,750',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Perfect family vacation with activities for all ages and family-friendly amenities',
      includes: [
        'Family Suite (2 bedrooms) for 7 nights',
        'Kids club activities & supervision',
        'Family adventure excursions',
        'All meals with kids menu',
        'Beach & pool activities',
        'Family photography session'
      ],
      highlights: ['Kids club', 'Family excursions', 'Photography', 'All meals']
    },
    {
      id: 6,
      category: 'culinary',
      title: 'Gastronomic Journey',
      duration: '5 Days 4 Nights',
      price: 'From $3,180',
      originalPrice: '$3,580',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Culinary adventure featuring world-class dining and cooking experiences',
      includes: [
        'Premium Suite for 4 nights',
        'Chef\'s table dining experiences',
        'Cooking classes with executive chef',
        'Wine tasting & pairing sessions',
        'Local market & fishing tours',
        'Recipe collection & cookbook'
      ],
      highlights: ['Chef experiences', 'Cooking classes', 'Wine tasting', 'Market tours']
    },
    {
      id: 7,
      category: 'adventure',
      title: 'Marine Discovery',
      duration: '6 Days 5 Nights',
      price: 'From $2,750',
      originalPrice: '$3,100',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Deep dive into marine life with expert guides and underwater adventures',
      includes: [
        'Ocean View Suite for 5 nights',
        'Professional diving certification',
        'Daily diving & snorkeling trips',
        'Underwater photography course',
        'Marine biologist guide',
        'Equipment & gear included'
      ],
      highlights: ['Dive certification', 'Marine guides', 'Photography', 'Equipment']
    },
    {
      id: 8,
      category: 'cultural',
      title: 'Heritage & Culture',
      duration: '7 Days 6 Nights',
      price: 'From $2,650',
      originalPrice: '$2,980',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      description: 'Immersive cultural journey exploring local traditions and heritage sites',
      includes: [
        'Deluxe Room for 6 nights',
        'Cultural site guided tours',
        'Traditional art workshops',
        'Local community experiences',
        'Cultural performances',
        'Artisan craft souvenirs'
      ],
      highlights: ['Cultural tours', 'Art workshops', 'Performances', 'Local crafts']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'romantic', name: 'Romantic' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'family', name: 'Family' },
    { id: 'culinary', name: 'Culinary' },
    { id: 'cultural', name: 'Culural' }
  ];

  const filteredPackages = activeCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  const featuredPackages = packages.filter(pkg => pkg.featured);

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
            Oasila Packages
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Carefully curated vacation packages combining luxury accommodation with unforgettable experiences
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center text-amber-200 mb-6">
              <div className="text-lg font-light">Starting from</div>
              <div className="text-4xl font-light">$2,650</div>
              <div className="text-sm">per package</div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#featured-packages" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
                View Packages
              </a>
              <a href="#custom-package" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
                Create Custom Package
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

      {/* Package Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">Why Choose Our Packages</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Our expertly designed packages offer exceptional value, combining luxury accommodation with curated experiences to create the perfect vacation tailored to your interests and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Best Value</h3>
              <p className="text-gray-700">Save up to 25% compared to booking individually. Our packages offer exceptional value with premium inclusions.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">All-Inclusive</h3>
              <p className="text-gray-700">Everything is taken care of - accommodation, meals, experiences, and transfers all included in one price.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Expert Curation</h3>
              <p className="text-gray-700">Each package is carefully designed by travel experts to ensure perfect balance of relaxation and adventure.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-700">Dedicated concierge service ensures your package is customized to your preferences and special requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section id="featured-packages" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Featured Packages</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our most popular vacation packages, specially designed for unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-light text-amber-800">{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save {Math.round(((parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, ''))) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Package Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                      Book Package
                    </button>
                    <button 
                      onClick={() => setSelectedPackage(pkg)}
                      className="px-4 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium rounded-sm transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">All Vacation Packages</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore our complete collection of vacation packages designed for every type of traveler
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {pkg.featured && (
                    <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {pkg.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-light text-amber-800">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-1">{pkg.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {pkg.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-sm transition-colors duration-300">
                      Book Now
                    </button>
                    <button 
                      onClick={() => setSelectedPackage(pkg)}
                      className="px-3 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-sm transition-colors duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section id="custom-package" className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Create Your Custom Package</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Can't find the perfect package? Let us create a bespoke vacation experience tailored specifically to your dreams and preferences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Custom Package Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-light mb-6">Tell Us About Your Dream Vacation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-100 mb-2">Duration</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                      <option>3-4 Days</option>
                      <option>5-7 Days</option>
                      <option>8-10 Days</option>
                      <option>10+ Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-amber-100 mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                      <option>$2,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000 - $8,000</option>
                      <option>$8,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Interests & Activities</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Adventure Sports</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Spa & Wellness</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Cultural Experiences</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Fine Dining</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Marine Activities</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-amber-600" />
                      <span className="text-amber-100 text-sm">Photography</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Special Occasions</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                    <option>None</option>
                    <option>Honeymoon</option>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>Family Reunion</option>
                    <option>Corporate Retreat</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Additional Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Tell us about any special requirements, accessibility needs, dietary restrictions, or specific experiences you'd like to include..."></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-300 hover:bg-amber-200 text-amber-900 font-medium rounded-sm transition-colors duration-300">
                  Create My Custom Package
                </button>
              </form>
            </div>
            
            {/* Package Planning Benefits */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4">Why Choose Custom Packages?</h4>
                <ul className="text-amber-100 text-sm space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tailored specifically to your interests and preferences
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Flexible dates and duration to fit your schedule
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access to exclusive experiences not available in standard packages
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personal travel consultant throughout the planning process
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Special arrangements for celebrations and occasions
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4">Package Planning Process</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-300 text-amber-900 rounded-full flex items-center justify-center text-sm font-medium mr-4">1</div>
                    <div>
                      <h5 className="font-medium text-amber-200">Consultation</h5>
                      <p className="text-amber-100 text-sm">Initial discussion about your preferences and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-300 text-amber-900 rounded-full flex items-center justify-center text-sm font-medium mr-4">2</div>
                    <div>
                      <h5 className="font-medium text-amber-200">Design</h5>
                      <p className="text-amber-100 text-sm">Custom itinerary creation with detailed proposals</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-300 text-amber-900 rounded-full flex items-center justify-center text-sm font-medium mr-4">3</div>
                    <div>
                      <h5 className="font-medium text-amber-200">Refinement</h5>
                      <p className="text-amber-100 text-sm">Package adjustments based on your feedback</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-300 text-amber-900 rounded-full flex items-center justify-center text-sm font-medium mr-4">4</div>
                    <div>
                      <h5 className="font-medium text-amber-200">Confirmation</h5>
                      <p className="text-amber-100 text-sm">Final package confirmation and booking</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-light text-amber-200 mb-2">24-48 Hours</div>
                <p className="text-amber-100">Custom package proposal delivery time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Support Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Package Support</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our dedicated package specialists are here to help you choose the perfect vacation package
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Method 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Package Consultation</h3>
              <p className="text-gray-600 text-sm mb-4">+1 (800) 123-4567 Ext. 2</p>
              <p className="text-amber-800 text-xs">Mon-Fri 8AM-10PM, Weekends 9AM-6PM</p>
            </div>
            
            {/* Support Method 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">packages@oasila.com</p>
              <p className="text-amber-800 text-xs">Response within 4 hours</p>
            </div>
            
            {/* Support Method 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a2 2 0 012-2h2a2 2 0 012 2v4m0 0V3a2 2 0 012-2h2a2 2 0 012 2v4m0 0v14l-5-2.5L21 19V5m-3 5H6V3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Request Brochure</h3>
              <p className="text-gray-600 text-sm mb-4">Detailed package information</p>
              <button className="text-amber-800 text-xs hover:text-amber-900 font-medium transition-colors duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedPackage.image} 
                alt={selectedPackage.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-light text-amber-800 mb-2">{selectedPackage.title}</h2>
                  <p className="text-gray-600">{selectedPackage.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light text-amber-800">{selectedPackage.price}</div>
                  <div className="text-lg text-gray-500 line-through">{selectedPackage.originalPrice}</div>
                  <div className="text-sm text-gray-600">{selectedPackage.duration}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Package Includes:</h3>
                  <ul className="space-y-2">
                    {selectedPackage.includes.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Highlights:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <span key={index} className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-center">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                  Book This Package
                </button>
                <button className="px-6 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium rounded-sm transition-colors duration-300">
                  Customize Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PackagesPage;