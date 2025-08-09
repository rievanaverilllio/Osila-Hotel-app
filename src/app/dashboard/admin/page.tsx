"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { Card } from "@/components/ui/Card";

export default function AdminDashboardPage() {
	const { isScrolled } = useScrollEffect(0.1);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[40vh] w-full overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=2070&q=80"
					alt="Admin hero"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-4xl md:text-5xl font-lora font-light">Admin Dashboard</h1>
						<p className="mt-3 text-white/90">Monitor performance and manage the platform</p>
						<div className="mt-5 h-0.5 w-24 bg-white mx-auto" />
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				{/* KPIs */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{[
						{ label: "Revenue (MTD)", value: "$24,500", delta: "+8.2%" },
						{ label: "Bookings (MTD)", value: "312", delta: "+3.4%" },
						{ label: "Occupancy", value: "86%", delta: "+2%" },
						{ label: "Cancellations", value: "12", delta: "-1" },
					].map((k, i) => (
						<div key={i} className="bg-white rounded-xl shadow-soft border border-gray-100 p-5">
							<p className="text-sm text-gray-500">{k.label}</p>
							<div className="mt-1 flex items-baseline justify-between">
								<p className="text-2xl font-semibold text-amber-900">{k.value}</p>
								<span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">{k.delta}</span>
							</div>
						</div>
					))}
				</div>

				{/* Management Shortcuts */}
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					<Card
						href="/dashboard/admin/users"
						title={<span className="text-2xl font-light">Users</span>}
						subtitle={<span className="text-white/80 text-sm">Manage user accounts</span>}
						imageSrc="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/dashboard/admin/payments"
						title={<span className="text-2xl font-light">Payments</span>}
						subtitle={<span className="text-white/80 text-sm">Transactions & payouts</span>}
						imageSrc="https://images.unsplash.com/photo-1621416894569-0f39d84e6f2d?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/dashboard/admin/reports"
						title={<span className="text-2xl font-light">Reports</span>}
						subtitle={<span className="text-white/80 text-sm">Insights & analytics</span>}
						imageSrc="https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
					<Card
						href="/landing_page/reservations"
						title={<span className="text-2xl font-light">Create Booking</span>}
						subtitle={<span className="text-white/80 text-sm">Manual reservation</span>}
						imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
						overlay
						className="h-56"
					/>
				</div>

				{/* Reports Preview */}
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 bg-white rounded-xl shadow-soft border border-gray-100 p-6">
						<h3 className="text-xl font-lora mb-4">Revenue by Week</h3>
						<div className="h-56 grid grid-cols-12 gap-2 items-end">
							{[32, 45, 38, 52, 61, 57, 64, 70, 66, 72, 68, 75].map((h, idx) => (
								<div key={idx} className="bg-amber-600/80 hover:bg-amber-600 transition-colors rounded" style={{ height: `${h}%` }} />
							))}
						</div>
						<p className="text-xs text-gray-500 mt-2">Simple preview (replace with chart later)</p>
					</div>

					<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
						<h3 className="text-xl font-lora mb-4">Recent Bookings</h3>
						<ul className="divide-y divide-gray-100">
							{[
								{ id: "ORD-10231", guest: "A. Putra", nights: 2 },
								{ id: "ORD-10229", guest: "S. Dewi", nights: 3 },
								{ id: "ORD-10225", guest: "R. Wijaya", nights: 1 },
							].map((b, i) => (
								<li key={i} className="py-4 flex items-center justify-between">
									<div>
										<p className="font-medium text-gray-800">{b.id}</p>
										<p className="text-sm text-gray-500">{b.guest} · {b.nights} night(s)</p>
									</div>
									<a href={`/payment/${b.id}`} className="text-sm text-amber-700 hover:text-amber-800">View</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

