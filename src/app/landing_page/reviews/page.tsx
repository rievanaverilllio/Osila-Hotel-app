'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

interface Review {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  review: string;
  images?: string[];
  verified: boolean;
  stayType: string;
  category: string;
  helpful: number;
}

const ReviewsPage = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('recent');
  const [selectedReview, setSelectedReview] = React.useState<Review | null>(null);

  // Array of review background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const { current, setCurrent } = useBackgroundSlider(backgrounds.length, 15000);
  const { scrollY, isScrolled } = useScrollEffect(0.6);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah & Michael Thompson',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-12-15',
      title: 'Perfect Honeymoon Destination',
      review: 'Our honeymoon at Oasila was absolutely magical! The Presidential Suite exceeded all expectations with its private infinity pool and butler service. The sunset dinners on the beach were incredibly romantic, and the staff made every moment special. We especially loved the couples spa treatment and the private yacht cruise. This place is pure paradise and worth every penny.',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      verified: true,
      stayType: 'Presidential Suite',
      category: 'romantic',
      helpful: 24
    },
    {
      id: 2,
      name: 'James Harrison',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-11-28',
      title: 'Adventure Paradise',
      review: 'Stayed here for the Island Explorer package and had the time of my life! The helicopter tour was breathtaking, snorkeling with marine life was incredible, and the cultural village experience was so authentic. The adventure guides were professional and made sure everyone felt safe while having maximum fun. Already planning my next visit!',
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      verified: true,
      stayType: 'Deluxe Ocean View',
      category: 'adventure',
      helpful: 18
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Singapore',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-11-20',
      title: 'Wellness Sanctuary Indeed',
      review: 'The Wellness Sanctuary package was exactly what I needed after a stressful year. Daily yoga sessions at sunrise, incredible spa treatments, and the mindfulness workshops really helped me reconnect with myself. The healthy cuisine was delicious and the wellness consultants were so knowledgeable. I left feeling completely rejuvenated.',
      verified: true,
      stayType: 'Spa Suite',
      category: 'wellness',
      helpful: 15
    },
    {
      id: 4,
      name: 'Roberto & Maria Santos',
      location: 'São Paulo, Brazil',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-11-10',
      title: 'Perfect Family Vacation',
      review: 'Our family had an amazing week at Oasila! The kids club was fantastic - our children made friends and had so much fun while we enjoyed some adult time. The family excursions were well-organized and suitable for all ages. The photography session captured beautiful memories. Highly recommend for families!',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      verified: true,
      stayType: 'Family Suite',
      category: 'family',
      helpful: 22
    },
    {
      id: 5,
      name: 'David Kim',
      location: 'Seoul, South Korea',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-10-25',
      title: 'Culinary Excellence',
      review: 'As a food enthusiast, the Gastronomic Journey package blew me away! The chef\'s table experiences were world-class, cooking classes with the executive chef were inspiring, and the wine pairings were perfect. The local market tours gave great insights into local ingredients. Absolutely outstanding culinary adventure!',
      verified: true,
      stayType: 'Premium Suite',
      category: 'culinary',
      helpful: 19
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      location: 'Toronto, Canada',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 4,
      date: '2024-10-15',
      title: 'Luxurious but Minor Issues',
      review: 'Overall, a fantastic stay at Oasila. The Presidential Suite was stunning and the butler service was exceptional. The private beach access and yacht charter were highlights. However, there was a small delay with room service one evening, and the spa booking system could be more efficient. Still, would definitely return!',
      verified: true,
      stayType: 'Presidential Suite',
      category: 'luxury',
      helpful: 12
    },
    {
      id: 7,
      name: 'Ahmed Al-Rashid',
      location: 'Dubai, UAE',
      avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-09-30',
      title: 'Cultural Immersion at Its Best',
      review: 'The Heritage & Culture package provided an incredible insight into local traditions. The guided tours of cultural sites were informative, and the traditional art workshops were hands-on and engaging. The cultural performances in the evenings were spectacular. Great way to learn about the local heritage while enjoying luxury.',
      verified: true,
      stayType: 'Deluxe Room',
      category: 'cultural',
      helpful: 16
    },
    {
      id: 8,
      name: 'Jennifer & Mark Wilson',
      location: 'Sydney, Australia',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-09-20',
      title: 'Marine Discovery Adventure',
      review: 'The Marine Discovery package was incredible! Getting our diving certification with professional instructors, exploring underwater with marine biologist guides, and the underwater photography course were unforgettable experiences. The marine life here is so diverse and beautiful. Perfect for ocean lovers!',
      images: [
        'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      verified: true,
      stayType: 'Ocean View Suite',
      category: 'adventure',
      helpful: 21
    },
    {
      id: 9,
      name: 'Catherine Dubois',
      location: 'Paris, France',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: '2024-08-15',
      title: 'Exceptional Service & Luxury',
      review: 'Every detail at Oasila speaks luxury and refinement. From the moment we arrived, the staff anticipated our needs perfectly. The concierge helped plan amazing excursions, the housekeeping was impeccable, and the dining experiences were Michelin-star quality. This is hospitality at its finest.',
      verified: true,
      stayType: 'Premium Suite',
      category: 'luxury',
      helpful: 27
    },
    {
      id: 10,
      name: 'Tom Richards',
      location: 'Chicago, USA',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 4,
      date: '2024-08-05',
      title: 'Great Value Package',
      review: 'Booked the early bird special and got amazing value. The Deluxe Ocean View room was comfortable with stunning views. The complimentary breakfast was excellent with great variety. The free room upgrade was a nice surprise. Some activities were weather-dependent, but overall a great experience for the price.',
      verified: true,
      stayType: 'Deluxe Ocean View',
      category: 'value',
      helpful: 14
    }
  ];

  const filterOptions = [
    { id: 'all', name: 'All Reviews' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'romantic', name: 'Romantic' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'family', name: 'Family' },
    { id: 'culinary', name: 'Culinary' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'value', name: 'Value' }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'helpful', name: 'Most Helpful' }
  ];

  // Filter and sort reviews
  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === activeFilter);

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      case 'recent':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Calculate overall statistics
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-amber-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
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
            Guest Reviews
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover what our guests are saying about their extraordinary experiences at Oasila
          </p>
          <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-8"></div>
          
          {/* Rating Overview */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-light text-amber-200">{averageRating.toFixed(1)}</span>
            </div>
            <div className="text-amber-200">
              <span className="text-3xl font-light">{totalReviews}</span> verified reviews
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#reviews-section" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
              Read Reviews
            </a>
            <a href="#write-review" className="px-10 py-4 bg-transparent border border-white text-white hover:bg-white/10 font-medium rounded-sm transition-colors duration-300">
              Write a Review
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

      {/* Rating Statistics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide font-lora text-amber-800 mb-4">What Our Guests Say</h2>
            <div className="h-0.5 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Over {totalReviews} verified reviews from guests who have experienced the magic of Oasila, with an average rating of {averageRating.toFixed(1)} out of 5 stars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Overall Rating */}
            <div className="text-center bg-amber-50 rounded-lg p-8">
              <div className="text-5xl font-light text-amber-800 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
              <div className="text-gray-600">Overall Rating</div>
              <div className="text-sm text-gray-500 mt-2">{totalReviews} verified reviews</div>
            </div>
            
            {/* Rating Distribution */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Rating Distribution</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center text-sm">
                    <span className="w-8">{star}</span>
                    <svg className="w-4 h-4 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-amber-400 h-2 rounded-full" 
                        style={{ width: `${(ratingDistribution[star as keyof typeof ratingDistribution] / totalReviews) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right">{ratingDistribution[star as keyof typeof ratingDistribution]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center bg-green-50 rounded-lg p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-light text-green-800 mb-2">100%</div>
              <div className="text-gray-600">Verified Reviews</div>
              <div className="text-sm text-gray-500 mt-2">All reviews from actual guests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews-section" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-amber-800 mb-2">Guest Reviews</h2>
              <div className="h-0.5 w-16 bg-amber-600 mb-4"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              {/* Filter Dropdown */}
              <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {filterOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
              
              {/* Sort Dropdown */}
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Reviewer Info */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900 mr-2">{review.name}</h3>
                          {review.verified && (
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Verified
                            </div>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                        <p className="text-gray-500 text-xs">{review.stayType}</p>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">{renderStars(review.rating)}</div>
                      <div className="text-gray-500 text-xs mb-2">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{review.category}</div>
                    </div>
                  </div>
                  
                  {/* Review Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">{review.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                    
                    {/* Review Images */}
                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {review.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`Review image ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setSelectedReview(review)}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Helpful Votes */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center text-gray-500 hover:text-amber-600 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span className="text-sm">Helpful ({review.helpful})</span>
                      </button>
                      
                      <button 
                        onClick={() => setSelectedReview(review)}
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-200"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Write Review Section */}
      <section id="write-review" className="py-16 md:py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-2">Share Your Experience</h2>
            <div className="h-0.5 w-24 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-amber-100 max-w-3xl mx-auto">
              Help future guests by sharing your Oasila experience. Your feedback helps us maintain our high standards of service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Review Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-light mb-6">Write Your Review</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-100 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-100 mb-2">Location</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Stay Type</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                    <option value="">Select room type</option>
                    <option>Presidential Suite</option>
                    <option>Premium Suite</option>
                    <option>Deluxe Ocean View</option>
                    <option>Family Suite</option>
                    <option>Spa Suite</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Overall Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-2xl hover:text-amber-300 transition-colors duration-200"
                      >
                        <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Review Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Summarize your experience"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Your Review</label>
                  <textarea 
                    rows={6} 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300" 
                    placeholder="Tell us about your experience at Oasila..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full px-8 py-4 bg-amber-300 hover:bg-amber-200 text-amber-900 font-medium rounded-sm transition-colors duration-300">
                  Submit Review
                </button>
              </form>
            </div>
            
            {/* Review Guidelines */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4">Review Guidelines</h4>
                <ul className="text-amber-100 text-sm space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Be honest and detailed about your experience
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Focus on specific services and amenities
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Include both positive and constructive feedback
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Avoid personal information of staff members
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Keep language respectful and appropriate
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4">What Makes a Great Review?</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-amber-200 mb-2">Be Specific</h5>
                    <p className="text-amber-100 text-sm">Mention specific rooms, restaurants, activities, and staff interactions</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-amber-200 mb-2">Share Context</h5>
                    <p className="text-amber-100 text-sm">Let others know the purpose of your visit and your expectations</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-amber-200 mb-2">Include Photos</h5>
                    <p className="text-amber-100 text-sm">Visual memories help other guests understand your experience</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-amber-200 mb-2">Offer Tips</h5>
                    <p className="text-amber-100 text-sm">Share recommendations for future guests based on your experience</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-light text-amber-200 mb-2">24-48 Hours</div>
                <p className="text-amber-100">Review processing time</p>
                <p className="text-amber-200 text-sm mt-2">All reviews are verified before publication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img 
                    src={selectedReview.avatar} 
                    alt={selectedReview.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-light text-amber-800 mb-1">{selectedReview.title}</h2>
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-gray-900 mr-2">{selectedReview.name}</h3>
                      {selectedReview.verified && (
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{selectedReview.location}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex mr-3">{renderStars(selectedReview.rating)}</div>
                      <span className="text-gray-500 text-sm">
                        {new Date(selectedReview.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Stay Type: <span className="font-medium text-gray-900">{selectedReview.stayType}</span></span>
                    <span className="text-gray-600 capitalize">Category: <span className="font-medium text-gray-900">{selectedReview.category}</span></span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{selectedReview.review}</p>
              </div>
              
              {selectedReview.images && selectedReview.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Photos from this stay</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedReview.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Review image ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{selectedReview.helpful} people found this helpful</span>
                </div>
                <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-colors duration-300">
                  Mark as Helpful
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
      `}</style>
    </div>
  );
};

export default ReviewsPage;