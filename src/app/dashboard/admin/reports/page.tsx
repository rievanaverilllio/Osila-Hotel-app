"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";

export default function AdminReportsPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [range, setRange] = useState<"7d" | "30d" | "90d">("30d");

	const data = useMemo(() => {
		// Dummy sequence heights for bar chart by range
		const base = range === "7d" ? [44, 61, 52, 70, 66, 72, 68] : range === "30d" ? Array.from({ length: 12 }, (_, i) => 35 + ((i * 7) % 45)) : Array.from({ length: 12 }, (_, i) => 25 + ((i * 5) % 55));
		return base;
	}, [range]);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=2070&q=80" alt="Reports" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">Reports</h1>
						<p className="mt-2 text-white/90">Insights & analytics</p>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				{/* Range Filter */}
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					<div className="flex items-center gap-2">
						{(["7d", "30d", "90d"] as const).map(r => (
							<button key={r} onClick={() => setRange(r)} className={`px-3 py-1.5 rounded-full text-sm border ${range === r ? "bg-amber-600 text-white border-amber-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>{r.toUpperCase()}</button>
						))}
					</div>

					{/* Cards */}
					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{[
							{ label: "Revenue", value: "$124,200" },
							{ label: "Bookings", value: "1,254" },
							{ label: "Avg. Stay", value: "2.3 nights" },
							{ label: "Occupancy", value: "82%" },
						].map((c, i) => (
							<div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
								<p className="text-sm text-gray-500">{c.label}</p>
								<p className="text-2xl font-semibold text-gray-800 mt-1">{c.value}</p>
							</div>
						))}
					</div>

					{/* Charts */}
					<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
							<h3 className="text-lg font-lora mb-3">Revenue Trend</h3>
							<div className="h-56 grid grid-cols-12 gap-2 items-end">
								{data.map((h, idx) => (
									<div key={idx} className="bg-amber-600/80 hover:bg-amber-600 transition-colors rounded" style={{ height: `${h}%` }} />
								))}
							</div>
							<p className="text-xs text-gray-500 mt-2">Preview only</p>
						</div>
						<div className="bg-white border border-gray-200 rounded-xl p-6">
							<h3 className="text-lg font-lora mb-3">Booking Status</h3>
							<ul className="space-y-3">
								<li className="flex items-center justify-between"><span className="text-gray-600">Completed</span><span className="font-medium">68%</span></li>
								<li className="flex items-center justify-between"><span className="text-gray-600">Upcoming</span><span className="font-medium">22%</span></li>
								<li className="flex items-center justify-between"><span className="text-gray-600">Cancelled</span><span className="font-medium">10%</span></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

