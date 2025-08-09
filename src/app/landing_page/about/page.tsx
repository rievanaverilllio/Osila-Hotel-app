'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useBackgroundSlider } from '@/hooks/useBackgroundSlider';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const HomePage = () => {
  // Array of background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  // Replace local state/effects with shared hooks
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-none tracking-wide font-lora drop-shadow-2xl">
            <span className="block text-left -ml-8 md:-ml-12 lg:-ml-16">About Our Lodge</span>
            <span className="block text-right -mr-8 md:-mr-12 lg:-mr-16">Legacy of Luxury</span>
          </h1>
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

    {/* About Section */}
    <section className="py-20 md:py-32 px-6 md:px-20 bg-neutral-50">
    <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Title */}
        <div className="text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide font-lora text-amber-800">
            <span className="block">Where every stay becomes an</span>
            <span className="block">unforgettable experience</span>
        </h2>
        </div>

        {/* Grid: Teks Kiri & Kanan */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Column */}
        <div className="space-y-6">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
            Inspired by nature's beauty and a passion for hospitality, Oasis was created as a sanctuary where luxury meets tranquility. Our vision was to craft an escape that blends refined elegance with the warmth of personalized service, offering guests an unforgettable retreat.
            </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
            From breathtaking landscapes to carefully curated experiences, every detail is designed to provide comfort, relaxation, and adventure. Whether you seek a peaceful getaway or a taste of the extraordinary, Oasila invites you to indulge in the art of luxury.
            </p>
        </div>
        </div>

        {/* Grid: Gambar Kiri & Gambar + Teks Kanan */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Left Column - Gambar panjang */}
        <div className="w-full h-full">
            <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" // ganti path sesuai gambar kamu
            alt="Hotel interior"
            className="w-full h-120 object-cover"
            />
        </div>

        {/* Right Column - Gambar kecil + teks */}
        <div className="space-y-6">
            {/* Gambar kecil di atas teks */}
            <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" // ganti path sesuai gambar kamu
            alt="Experience highlight"
            className="w-full h-68"
            />

            <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
            
Our mission is to provide a luxurious and serene retreat where nature, comfort, and personalized hospitality come together for an unforgettable experience.
            </p>
        </div>
        </div>

    </div>
    </section>

    {/* Statistics Section */}
    <section className="px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
          
          {/* Years of Experience */}
          <div className="space-y-4 py-8">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-800 font-lora">
              20<sup className="text-3xl md:text-4xl">+</sup>
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-light">
              Years of experience
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 top-8 bottom-8 w-px bg-gray-300"></div>
            <div className="space-y-4 py-8 px-8">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-800 font-lora">
                12<sup className="text-3xl md:text-4xl">+</sup>
              </h3>
              <p className="text-base md:text-lg text-gray-600 font-light">
                Countries Serving
              </p>
            </div>
            <div className="absolute right-0 top-8 bottom-8 w-px bg-gray-300"></div>
          </div>

          {/* Countries Serving - Mobile Only */}
          <div className="md:hidden space-y-4 py-8">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-800 font-lora">
              12<sup className="text-3xl md:text-4xl">+</sup>
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-light">
              Countries Serving
            </p>
          </div>

          {/* Satisfied Guest */}
          <div className="space-y-4 py-8">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-800 font-lora">
              10<sup className="text-3xl md:text-4xl">m</sup>
            </h3>
            <p className="text-base md:text-lg text-gray-600 font-light">
              Satisfied Guest
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* Estate Section */}
    <section className="py-20 md:py-32 px-6 md:px-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-5xl font-light leading-tight tracking-wide font-lora text-amber-800">
                <span className="block">140 acres of pure bliss. With endless reasons to return to our lodge.</span>
              </h2>
            </div>
            
            <div className="space-y-6 mt-8">
              <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
                Oasila, alongside Blue heaven winery, is a serene oasis nestled within a sprawling 140-hectare estate, embodying the natural luxury of The Living Circle. Surrounded by lush landscapes and the breathtaking beauty of Ticino, it offers a seamless retreat where nature and tranquility take center stage.
              </p>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed font-light">
                With a bird sanctuary, botanical garden, and orchard along the shores of Lake Maggiore, it is a haven for unforgettable moments. Our "from our farm to your table" philosophy ensures that guests enjoy the freshest rice, corn, fruits, vegetables, and wines, harvested directly from our fields and gardens.
              </p>
            </div>
          </div>
          
          {/* Right Column - Features List */}
          <div className="space-y-2">
            {/* Feature Items */}
            <div className="border-t border-gray-300 py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                140-acres Estate- A vast retreat immersed in nature.
              </p>
            </div>
            
            <div className="border-t border-gray-300 py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Farm-to-Table Dining – Fresh ingredients from fields.
              </p>
            </div>
            
            <div className="border-t border-gray-300 py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Scenic Surroundings – Gardens, a bird sanctuary.
              </p>
            </div>
            
            <div className="border-t border-gray-300 py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Seamless Luxury – Open spaces blending nature.
              </p>
            </div>
            
            <div className="border-t border-gray-300 py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Exclusive Winery – Fine wines from Oasis Winery.
              </p>
            </div>
            
            <div className="border-t border-gray-300 border-b py-6">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                Lakeside Serenity – Stunning views and tranquility.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    {/* Guest Experience Section */}
    <section className="relative min-h-[60vh] md:min-h-[120vh] bg-cover bg-center flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Countryside landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Column - Quote */}
          <div className="text-white space-y-6">
            <div className="text-6xl font-serif">"</div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed font-lora">
              Every guest will find their own personal haven of peace, a retreat that is uniquely.
            </h3>
          </div>
          
          {/* Right Column - Images */}
          <div className="relative">
            {/* Top Image */}
            <div className="absolute top-0 right-0 w-64 md:w-70 shadow-xl rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="Woman looking out window" 
                className="w-full h-auto rounded-md"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="ml-4 mt-32 w-40 md:w-56 lg:w-64 rotate-[-5deg] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="Bedroom interior" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>

    {/* Roadmap Section */}
    <section className="py-20 md:py-32 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide font-lora text-amber-800">
            Our roots go back to<br/>the 20th century
          </h2>
        </div>

        {/* First Timeline Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20">
          {/* Left Column - Image */}
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Historical building" 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Column - Timeline connector and text */}
          <div className="relative flex items-center">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-1/2 left-0 w-16 h-px bg-amber-800"></div>
            <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-16 w-8 h-8 rounded-full border-2 border-amber-800"></div>
            
            {/* Content */}
            <div className="md:pl-32">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight font-lora text-amber-800 mb-4">
                Oasila started from 20th century
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Founded in the early 20th century, our retreat became a serene, sustainable haven of vineyards and orchards—
                offering timeless hospitality, refined luxury, and an
                immersive escape into nature's beauty and tranquility.
              </p>
            </div>
          </div>
        </div>

        {/* Second Timeline Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20">
          {/* Left Column - Timeline connector and text */}
          <div className="relative flex items-center md:order-1">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-1/2 right-0 w-16 h-px bg-amber-800"></div>
            <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-16 w-8 h-8 rounded-full border-2 border-amber-800"></div>
            
            {/* Content */}
            <div className="md:pr-32 md:text-right">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight font-lora text-amber-800 mb-4">
                Honoring the past, embrace future
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                For generations, our oasis has reflected elegance, nature,
                and hospitality—honoring tradition, embracing modern
                comforts, and showcasing our legacy through sustainable
                vineyards, orchards, and a deep commitment.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern interior" 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>

        {/* Third Timeline Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Image */}
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Luxury accommodation" 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Column - Timeline connector and text */}
          <div className="relative flex items-center">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-1/2 left-0 w-16 h-px bg-amber-800"></div>
            <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-16 w-8 h-8 rounded-full border-2 border-amber-800"></div>
            
            {/* Content */}
            <div className="md:pl-32">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight font-lora text-amber-800 mb-4">
                Timeless luxury boutique lodge
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                As a family-owned luxury lodge, we offer a warm,
                personalized experience with bespoke details and tailored
                hospitality—blending refined elegance and intimacy amid
                nature's splendor.
              </p>
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
