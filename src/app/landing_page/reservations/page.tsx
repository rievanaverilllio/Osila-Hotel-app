'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const ReservationsPage = () => {
  const [activeTab, setActiveTab] = React.useState('rooms');
  const [formData, setFormData] = React.useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: 'deluxe-ocean',
    specialRequests: '',
    guestInfo: { firstName: '', lastName: '', email: '', phone: '', country: '' },
    experiences: [],
    dining: [],
    spa: []
  } as any);

  // Array of reservation background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 15000);
  const { scrollY, isScrolled } = useScrollEffect(0.6);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('guest.')) {
      const guestField = name.split('.')[1];
      setFormData((prev: any) => ({
        ...prev,
        guestInfo: {
          ...prev.guestInfo,
          [guestField]: value
        }
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const roomTypes = [
    {
      id: 'deluxe-ocean',
      name: 'Deluxe Ocean View',
      price: '$280',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Ocean view', 'King bed', 'Private balcony', 'Marble bathroom']
    },
    {
      id: 'suite-premium',
      name: 'Premium Suite',
      price: '$420',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Separate living area', 'Ocean view', 'Butler service', 'Private terrace']
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: '$650',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['2500 sq ft', 'Private pool', 'Helicopter access', 'Personal butler']
    }
  ];

  const experiences = [
    { id: 'ocean-safari', name: 'Ocean Safari & Snorkeling', price: '$120' },
    { id: 'helicopter-tour', name: 'Helicopter Island Tour', price: '$350' },
    { id: 'spa-retreat', name: 'Full Day Spa Retreat', price: '$220' },
    { id: 'private-island', name: 'Private Island Escape', price: '$850' },
    { id: 'sunset-yoga', name: 'Sunrise Yoga & Meditation', price: '$45' },
    { id: 'chef-table', name: 'Chef\'s Table Experience', price: '$180' }
  ];

  const diningOptions = [
    { id: 'ambrosia', name: 'Ambrosia Fine Dining', time: 'Dinner Reservation' },
    { id: 'coastal-grill', name: 'Coastal Grill', time: 'Lunch/Dinner' },
    { id: 'cafe-solarium', name: 'Café Solarium', time: 'Breakfast/Brunch' },
    { id: 'private-dining', name: 'Private Beach Dining', time: 'Any Time' }
  ];

  const spaServices = [
    { id: 'signature-massage', name: 'Oasila Signature Massage', duration: '90 min', price: '$180' },
    { id: 'couples-retreat', name: 'Couples Spa Retreat', duration: '3 hours', price: '$320' },
    { id: 'wellness-package', name: 'Complete Wellness Package', duration: 'Full Day', price: '$450' },
    { id: 'beauty-treatment', name: 'Luxury Beauty Treatment', duration: '2 hours', price: '$220' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission
  };

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
            Reservations
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Begin your extraordinary journey at Oasila - where luxury meets paradise
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#reservation-form" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
                Book Your Stay
              </a>
              <a href="#special-offers" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
                View Special Offers
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

      {/* Quick Availability Check */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-neutral-50 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-medium text-amber-800 mb-4 text-center">Quick Availability Check</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Check-in</label>
                <input 
                  type="date" 
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Check-out</label>
                <input 
                  type="date" 
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Adults</label>
                <select 
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4 Adults</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">Children</label>
                <select 
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value={0}>0 Children</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                  <option value={3}>3 Children</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation-form" className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">Complete Your Reservation</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Customize your perfect stay with our comprehensive reservation system
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Reservation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab('rooms')}
                    className={`flex-1 px-6 py-4 font-medium transition-colors duration-300 ${
                      activeTab === 'rooms' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Rooms & Suites
                  </button>
                  <button
                    onClick={() => setActiveTab('experiences')}
                    className={`flex-1 px-6 py-4 font-medium transition-colors duration-300 ${
                      activeTab === 'experiences' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Experiences
                  </button>
                  <button
                    onClick={() => setActiveTab('dining')}
                    className={`flex-1 px-6 py-4 font-medium transition-colors duration-300 ${
                      activeTab === 'dining' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Dining & Spa
                  </button>
                  <button
                    onClick={() => setActiveTab('guest')}
                    className={`flex-1 px-6 py-4 font-medium transition-colors duration-300 ${
                      activeTab === 'guest' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Guest Info
                  </button>
                </div>

                <div className="p-8">
                  {/* Rooms & Suites Tab */}
                  {activeTab === 'rooms' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-amber-800 mb-6">Select Your Room</h3>
                      <div className="space-y-6">
                        {roomTypes.map((room) => (
                          <div key={room.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                              <div className="md:w-48 h-32 overflow-hidden rounded-lg">
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <h4 className="text-xl font-medium text-gray-900 mb-2">{room.name}</h4>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {room.features.map((feature, index) => (
                                        <span key={index} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                                          {feature}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-light text-amber-800">{room.price}</div>
                                    <div className="text-sm text-gray-600">per night</div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id={room.id}
                                    name="roomType"
                                    value={room.id}
                                    checked={formData.roomType === room.id}
                                    onChange={handleInputChange}
                                    className="mr-3 text-amber-600 focus:ring-amber-500"
                                  />
                                  <label htmlFor={room.id} className="text-sm text-gray-700 cursor-pointer">
                                    Select this room
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Experiences Tab */}
                  {activeTab === 'experiences' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-amber-800 mb-6">Add Experiences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {experiences.map((experience) => (
                          <div key={experience.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 mb-1">{experience.name}</h4>
                                <div className="text-amber-800 font-medium">{experience.price}</div>
                              </div>
                              <input
                                type="checkbox"
                                value={experience.id}
                                className="ml-3 text-amber-600 focus:ring-amber-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dining & Spa Tab */}
                  {activeTab === 'dining' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-light text-amber-800 mb-6">Dining Reservations</h3>
                        <div className="space-y-4">
                          {diningOptions.map((dining) => (
                            <div key={dining.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
                              <div>
                                <h4 className="font-medium text-gray-900">{dining.name}</h4>
                                <p className="text-sm text-gray-600">{dining.time}</p>
                              </div>
                              <input
                                type="checkbox"
                                value={dining.id}
                                className="text-amber-600 focus:ring-amber-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-light text-amber-800 mb-6">Spa Services</h3>
                        <div className="space-y-4">
                          {spaServices.map((spa) => (
                            <div key={spa.id} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-1">{spa.name}</h4>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span>{spa.duration}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-amber-800 font-medium">{spa.price}</span>
                                  </div>
                                </div>
                                <input
                                  type="checkbox"
                                  value={spa.id}
                                  className="text-amber-600 focus:ring-amber-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Guest Information Tab */}
                  {activeTab === 'guest' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-amber-800 mb-6">Guest Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            name="guest.firstName"
                            value={formData.guestInfo.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            name="guest.lastName"
                            value={formData.guestInfo.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="guest.email"
                            value={formData.guestInfo.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="guest.phone"
                            value={formData.guestInfo.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2">Country *</label>
                          <select
                            name="guest.country"
                            value={formData.guestInfo.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                          >
                            <option value="">Select Country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="au">Australia</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="jp">Japan</option>
                            <option value="sg">Singapore</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2">Special Requests</label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Please share any special occasions, dietary requirements, or preferences..."
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Reservation Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-medium text-amber-800 mb-6">Reservation Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Check-in</span>
                    <span className="font-medium">{formData.checkIn || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Check-out</span>
                    <span className="font-medium">{formData.checkOut || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Guests</span>
                    <span className="font-medium">{formData.adults} Adults, {formData.children} Children</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Room Type</span>
                    <span className="font-medium">
                      {roomTypes.find(room => room.id === formData.roomType)?.name || 'Not selected'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Room Rate (per night)</span>
                    <span className="font-medium">
                      {roomTypes.find(room => room.id === formData.roomType)?.price || '$0'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Taxes & Fees</span>
                    <span className="font-medium">$45</span>
                  </div>
                  <div className="h-px bg-gray-300 my-3"></div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-gray-900">Total (per night)</span>
                    <span className="font-medium text-amber-800">
                      {roomTypes.find(room => room.id === formData.roomType) 
                        ? `$${parseInt(roomTypes.find(room => room.id === formData.roomType)?.price.replace('$', '') || '0') + 45}`
                        : '$45'
                      }
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 mb-4"
                >
                  Complete Reservation
                </button>
                
                <div className="text-xs text-gray-600 text-center">
                  <p className="mb-2">By proceeding, you agree to our Terms & Conditions</p>
                  <p>Free cancellation up to 48 hours before check-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="special-offers" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Special Offers</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Enhance your stay with our exclusive packages and seasonal promotions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Limited Time
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-2">Early Bird Special</h3>
                <div className="text-3xl font-light text-amber-900 mb-2">25% OFF</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• Book 60 days in advance</li>
                <li>• Valid for stays until December 2025</li>
                <li>• Includes complimentary breakfast</li>
                <li>• Free room upgrade (subject to availability)</li>
              </ul>
              <button className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                Book Now
              </button>
            </div>
            
            {/* Offer 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Romantic Package
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-2">Honeymoon Bliss</h3>
                <div className="text-lg font-light text-amber-900 mb-2">From $450/night</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• Private sunset dinner on beach</li>
                <li>• Couples spa treatment</li>
                <li>• Champagne and rose petals</li>
                <li>• Late checkout and VIP amenities</li>
              </ul>
              <button className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                Learn More
              </button>
            </div>
            
            {/* Offer 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Extended Stay
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-2">Stay Longer, Save More</h3>
                <div className="text-lg font-light text-amber-900 mb-2">7+ nights</div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• 15% discount for 7+ night stays</li>
                <li>• Complimentary airport transfers</li>
                <li>• Daily breakfast and dinner</li>
                <li>• Access to exclusive experiences</li>
              </ul>
              <button className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                Calculate Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Support Section */}
      <section className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Reservation Support</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Our dedicated team is here to assist you with your reservation 24/7
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Method 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Phone Reservations</h3>
              <p className="text-amber-100 text-sm mb-3">+1 (800) 123-4567</p>
              <p className="text-amber-200 text-xs">Available 24/7</p>
            </div>
            
            {/* Contact Method 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Email Support</h3>
              <p className="text-amber-100 text-sm mb-3">reservations@oasila.com</p>
              <p className="text-amber-200 text-xs">Response within 2 hours</p>
            </div>
            
            {/* Contact Method 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-amber-100 text-sm mb-3">Instant assistance</p>
              <button className="text-amber-200 text-xs hover:text-white transition-colors duration-300">
                Start Chat Now
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block">
              <h3 className="text-lg font-medium mb-2">Group Reservations & Events</h3>
              <p className="text-amber-100 text-sm mb-3">Planning a wedding, conference, or special celebration?</p>
              <button className="px-6 py-2 bg-amber-300 hover:bg-amber-200 text-amber-900 font-medium rounded-sm transition-colors duration-300">
                Contact Group Sales
              </button>
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

export default ReservationsPage;
