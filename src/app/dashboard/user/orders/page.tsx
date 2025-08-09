"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import Link from "next/link";

type Order = {
	id: string;
	room: string;
	nights: number;
	guests: number;
	date: string; // ISO or pretty
	total: number;
	status: "upcoming" | "completed" | "cancelled";
};

const seed: Order[] = [
	{ id: "ORD-10231", room: "Deluxe Ocean View", nights: 2, guests: 2, date: "2025-08-19", total: 420, status: "upcoming" },
	{ id: "ORD-10212", room: "Presidential Suite", nights: 1, guests: 2, date: "2025-07-22", total: 650, status: "completed" },
	{ id: "ORD-10198", room: "Garden Terrace", nights: 3, guests: 3, date: "2025-06-10", total: 780, status: "completed" },
	{ id: "ORD-10177", room: "Hillside Retreat", nights: 2, guests: 2, date: "2025-05-02", total: 360, status: "cancelled" },
];

export default function UserOrdersPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<"all" | Order["status"]>("all");

	const filtered = useMemo(() => {
		const q = query.toLowerCase();
		return seed.filter(o =>
			(filter === "all" || o.status === filter) &&
			(o.id.toLowerCase().includes(q) || o.room.toLowerCase().includes(q))
		);
	}, [query, filter]);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80" alt="Orders" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">My Orders</h1>
						<p className="mt-2 text-white/90">View and manage your bookings</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					{/* Filters */}
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
						<div className="flex gap-2">
							{(["all", "upcoming", "completed", "cancelled"] as const).map((f) => (
								<button
									key={f}
									onClick={() => setFilter(f)}
									className={`px-3 py-1.5 rounded-full text-sm border ${filter === f ? "bg-amber-600 text-white border-amber-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
								>
									{f[0].toUpperCase() + f.slice(1)}
								</button>
							))}
						</div>
						<div>
							<input
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search order ID or room"
								className="w-full md:w-64 rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
							/>
						</div>
					</div>

					{/* Table */}
					<div className="mt-6 overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead>
								<tr className="text-left text-gray-500 border-b">
									<th className="py-3 pr-4">Order</th>
									<th className="py-3 pr-4">Room</th>
									<th className="py-3 pr-4">Nights</th>
									<th className="py-3 pr-4">Guests</th>
									<th className="py-3 pr-4">Date</th>
									<th className="py-3 pr-4">Total</th>
									<th className="py-3 pr-4">Status</th>
									<th className="py-3 pr-4 text-right">Action</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map((o) => (
									<tr key={o.id} className="border-b last:border-0">
										<td className="py-3 pr-4 font-medium text-gray-800">{o.id}</td>
										<td className="py-3 pr-4">{o.room}</td>
										<td className="py-3 pr-4">{o.nights}</td>
										<td className="py-3 pr-4">{o.guests}</td>
										<td className="py-3 pr-4">{new Date(o.date).toLocaleDateString()}</td>
										<td className="py-3 pr-4">${o.total.toFixed(2)}</td>
										<td className="py-3 pr-4">
											<span className={`px-2 py-0.5 rounded-full text-xs border ${
												o.status === "upcoming" ? "bg-amber-50 text-amber-800 border-amber-200" :
												o.status === "completed" ? "bg-emerald-50 text-emerald-800 border-emerald-200" :
												"bg-rose-50 text-rose-800 border-rose-200"
											}`}>
												{o.status}
											</span>
										</td>
										<td className="py-3 pr-4 text-right">
											<Link href={`/payment/${o.id}`} className="text-amber-700 hover:text-amber-800">View</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

