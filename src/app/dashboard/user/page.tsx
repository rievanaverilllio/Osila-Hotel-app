"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { Card } from "@/components/ui/Card";

export default function UserDashboardPage() {
	const { isScrolled } = useScrollEffect(0.1);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[40vh] w-full overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
					alt="Hero"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-4xl md:text-5xl font-lora font-light">Welcome back</h1>
						<p className="mt-3 text-white/90">Manage your bookings, profile, and preferences</p>
						<div className="mt-5 h-0.5 w-24 bg-white mx-auto" />
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				{/* Stats */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{[
						{ label: "Upcoming Stay", value: "2 nights", icon: (
							<svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M5 11h14M7 15h10"/></svg>
						) },
						{ label: "Reward Points", value: "1,250", icon: (
							<svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17l-5 3 1.9-5.9L4 9h6l2-6 2 6h6l-4.9 5.1L17 20z"/></svg>
						) },
						{ label: "Last Booking", value: "Jul 22", icon: (
							<svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3M3 11h18M5 20h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"/></svg>
						) },
						{ label: "Messages", value: "3", icon: (
							<svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 01-4 4H7l-4 4V5a4 4 0 014-4h10a4 4 0 014 4z"/></svg>
						) },
					].map((s, i) => (
						<div key={i} className="bg-white rounded-xl shadow-soft border border-gray-100 p-5 flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-500">{s.label}</p>
								<p className="text-xl font-semibold mt-1 text-amber-900">{s.value}</p>
							</div>
							<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
								{s.icon}
							</div>
						</div>
					))}
				</div>

				{/* Quick Actions */}
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					<Card
						href="/dashboard/user/orders"
						title={<span className="text-2xl font-light">My Orders</span>}
						subtitle={<span className="text-white/80 text-sm">View and manage bookings</span>}
						imageSrc="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/dashboard/user/profile"
						title={<span className="text-2xl font-light">Profile</span>}
						subtitle={<span className="text-white/80 text-sm">Personal info & preferences</span>}
						imageSrc="https://images.unsplash.com/photo-1520975922284-9f0b171fe3f5?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/dashboard/user/settings"
						title={<span className="text-2xl font-light">Settings</span>}
						subtitle={<span className="text-white/80 text-sm">Security & notifications</span>}
						imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/landing_page/reservations"
						title={<span className="text-2xl font-light">Make Reservation</span>}
						subtitle={<span className="text-white/80 text-sm">Find your next stay</span>}
						imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
				</div>

				{/* Recent Activity */}
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 bg-white rounded-xl shadow-soft border border-gray-100 p-6">
						<h3 className="text-xl font-lora mb-4">Recent Activity</h3>
						<ul className="divide-y divide-gray-100">
							{[
								{ title: "Booking confirmed", time: "2 days ago", desc: "Deluxe Ocean View Suite" },
								{ title: "Profile updated", time: "5 days ago", desc: "Changed phone number" },
								{ title: "Password changed", time: "1 week ago", desc: "Security update" },
							].map((item, idx) => (
								<li key={idx} className="py-4 flex items-start justify-between">
									<div>
										<p className="font-medium text-gray-800">{item.title}</p>
										<p className="text-sm text-gray-500">{item.desc}</p>
									</div>
									<span className="text-xs text-gray-400">{item.time}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
						<h3 className="text-xl font-lora text-amber-900">Tips</h3>
						<p className="text-amber-900/80 mt-2">
							Complete your profile to receive personalized recommendations and offers.
						</p>
						<a href="/dashboard/user/profile" className="inline-block mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm">
							Update Profile
						</a>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

