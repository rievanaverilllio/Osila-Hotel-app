"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";

type Payment = {
	id: string;
	orderId: string;
	method: "card" | "bank" | "qris";
	amount: number;
	date: string;
	status: "paid" | "pending" | "failed";
};

const seed: Payment[] = [
	{ id: "PAY-22031", orderId: "ORD-10231", method: "card", amount: 420, date: "2025-08-01", status: "paid" },
	{ id: "PAY-22021", orderId: "ORD-10212", method: "qris", amount: 650, date: "2025-07-22", status: "paid" },
	{ id: "PAY-21988", orderId: "ORD-10198", method: "bank", amount: 780, date: "2025-06-10", status: "pending" },
	{ id: "PAY-21977", orderId: "ORD-10177", method: "card", amount: 360, date: "2025-05-02", status: "failed" },
];

export default function AdminPaymentsPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [query, setQuery] = useState("");
	const [status, setStatus] = useState<"all" | Payment["status"]>("all");
	const [method, setMethod] = useState<"all" | Payment["method"]>("all");

	const filtered = useMemo(() => {
		const q = query.toLowerCase();
		return seed.filter(p =>
			(status === "all" || p.status === status) &&
			(method === "all" || p.method === method) &&
			(p.id.toLowerCase().includes(q) || p.orderId.toLowerCase().includes(q))
		);
	}, [query, status, method]);

	const totalPaid = useMemo(() => filtered.filter(f => f.status === "paid").reduce((s, x) => s + x.amount, 0), [filtered]);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1621416894569-0f39d84e6f2d?auto=format&fit=crop&w=2070&q=80" alt="Payments" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">Payments</h1>
						<p className="mt-2 text-white/90">Transactions & payouts</p>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					{/* Filters */}
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
						<div className="flex gap-2">
							{(["all", "paid", "pending", "failed"] as const).map(s => (
								<button key={s} onClick={() => setStatus(s)} className={`px-3 py-1.5 rounded-full text-sm border ${status === s ? "bg-amber-600 text-white border-amber-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>{s[0].toUpperCase() + s.slice(1)}</button>
							))}
						</div>
						<div className="flex gap-2">
							{(["all", "card", "bank", "qris"] as const).map(m => (
								<button key={m} onClick={() => setMethod(m)} className={`px-3 py-1.5 rounded-full text-sm border ${method === m ? "bg-amber-50 text-amber-900 border-amber-200" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>{m[0].toUpperCase() + m.slice(1)}</button>
							))}
						</div>
						<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search payment or order" className="w-full lg:w-72 rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
					</div>

					{/* Summary */}
					<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
							<p className="text-sm text-amber-900/80">Total Paid</p>
							<p className="text-2xl font-semibold text-amber-900 mt-1">${totalPaid.toFixed(2)}</p>
						</div>
						<div className="bg-white border border-gray-200 rounded-xl p-4">
							<p className="text-sm text-gray-500">Transactions</p>
							<p className="text-2xl font-semibold text-gray-800 mt-1">{filtered.length}</p>
						</div>
						<div className="bg-white border border-gray-200 rounded-xl p-4">
							<p className="text-sm text-gray-500">Filters</p>
							<p className="text-sm text-gray-700 mt-1">{status} · {method}</p>
						</div>
					</div>

					{/* Table */}
					<div className="mt-6 overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead>
								<tr className="text-left text-gray-500 border-b">
									<th className="py-3 pr-4">Payment</th>
									<th className="py-3 pr-4">Order</th>
									<th className="py-3 pr-4">Method</th>
									<th className="py-3 pr-4">Date</th>
									<th className="py-3 pr-4">Amount</th>
									<th className="py-3 pr-4">Status</th>
									<th className="py-3 pr-4 text-right">Action</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map(p => (
									<tr key={p.id} className="border-b last:border-0">
										<td className="py-3 pr-4 font-medium text-gray-800">{p.id}</td>
										<td className="py-3 pr-4">{p.orderId}</td>
										<td className="py-3 pr-4 uppercase">{p.method}</td>
										<td className="py-3 pr-4">{new Date(p.date).toLocaleDateString()}</td>
										<td className="py-3 pr-4">${p.amount.toFixed(2)}</td>
										<td className="py-3 pr-4">
											<span className={`px-2 py-0.5 rounded-full text-xs border ${
												p.status === "paid" ? "bg-emerald-50 text-emerald-800 border-emerald-200" :
												p.status === "pending" ? "bg-amber-50 text-amber-800 border-amber-200" :
												"bg-rose-50 text-rose-800 border-rose-200"
											}`}>
												{p.status}
											</span>
										</td>
										<td className="py-3 pr-4 text-right">
											<a
												href={p.status === "pending" ? `/payment/pending?orderId=${p.orderId}` : `/payment/${p.orderId}`}
												className="text-amber-700 hover:text-amber-800"
											>
												View
											</a>
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

