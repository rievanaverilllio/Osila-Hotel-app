"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const params = useSearchParams();
	const orderId = useMemo(() => params?.get("orderId") ?? "-", [params]);
	const [meta, setMeta] = useState<any | null>(null);

	useEffect(() => {
		try {
			const raw = typeof window !== "undefined" ? sessionStorage.getItem("oasila_payment") : null;
			if (raw) setMeta(JSON.parse(raw));
		} catch {}
	}, []);

	const downloadReceipt = () => {
		const lines = [
			"Oasila - Payment Receipt",
			`Order ID: ${meta?.orderId ?? orderId}`,
			`Amount: ${meta?.currency ?? "USD"} ${meta?.amount?.toFixed ? meta.amount.toFixed(2) : meta?.amount ?? "-"}`,
			`Method: ${meta?.method ?? "-"}`,
			`Room: ${meta?.room ?? "-"}`,
			`Nights: ${meta?.nights ?? "-"}`,
			`Guests: ${meta?.guests ?? "-"}`,
			`Date: ${meta?.createdAt ? new Date(meta.createdAt).toLocaleString() : new Date().toLocaleString()}`,
			"Status: SUCCESS",
		].join("\n");
		const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${meta?.orderId ?? orderId}-receipt.txt`;
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Payment Successful</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Order {orderId}</p>
				</div>
			</section>

					<section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
						<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					<div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
						<svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
							<path d="M20 6L9 17l-5-5" />
						</svg>
					</div>
							<h2 className="mt-6 text-2xl font-lora text-center">Thank you!</h2>
							<p className="text-gray-600 mt-2 text-center">Your reservation is confirmed. A receipt is available for download below.</p>

							{/* Summary */}
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Order ID</p>
									<p className="font-medium text-gray-800 mt-1">{meta?.orderId ?? orderId}</p>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Amount</p>
									<p className="font-medium text-gray-800 mt-1">{meta ? `${meta.currency} ${meta.amount.toFixed(2)}` : "-"}</p>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Method</p>
									<p className="font-medium text-gray-800 mt-1">{meta?.method ?? "-"}</p>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Reservation</p>
									<p className="font-medium text-gray-800 mt-1">{meta ? `${meta.room} · ${meta.nights} nights · ${meta.guests} guests` : "-"}</p>
								</div>
							</div>

							{/* Next Steps */}
							<div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
								<h3 className="font-lora text-emerald-900">Next steps</h3>
								<ul className="list-disc list-inside text-emerald-900/80 mt-2 text-sm">
									<li>Check your email for the booking confirmation and details.</li>
									<li>Bring a valid ID and your booking code at check-in.</li>
									<li>Manage your booking in the Reservations page if needed.</li>
								</ul>
							</div>

							{/* Actions */}
							<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
								<button onClick={downloadReceipt} className="px-5 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium btn-hover-scale">Download Receipt</button>
								<Link href="/landing_page/reservations" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale text-center">View Reservations</Link>
								<Link href="/landing_page/home" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale text-center">Back to Home</Link>
							</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

