"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaymentFailedPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const params = useSearchParams();
	const router = useRouter();
	const orderId = useMemo(() => params?.get("orderId") ?? "-", [params]);
	const [meta, setMeta] = useState<any | null>(null);

	useEffect(() => {
		try {
			const raw = typeof window !== "undefined" ? sessionStorage.getItem("oasila_payment") : null;
			if (raw) setMeta(JSON.parse(raw));
		} catch {}
	}, []);

	const copyOrderId = async () => {
		try {
			await navigator.clipboard.writeText(String(meta?.orderId ?? orderId));
			alert("Order ID copied");
		} catch {}
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Payment Failed</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Order {orderId}</p>
				</div>
			</section>

					<section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
						<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					<div className="mx-auto w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
						<svg className="w-8 h-8 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
							<circle cx="12" cy="12" r="10" />
							<line x1="15" y1="9" x2="9" y2="15" />
							<line x1="9" y1="9" x2="15" y2="15" />
						</svg>
					</div>
							<h2 className="mt-6 text-2xl font-lora text-center">We couldn't complete your payment</h2>
							<p className="text-gray-600 mt-2 text-center">Please review the details below and try again with another method if needed.</p>

							{/* Summary */}
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Order ID</p>
									<div className="flex items-center justify-between mt-1">
										<p className="font-medium text-gray-800">{meta?.orderId ?? orderId}</p>
										<button onClick={copyOrderId} className="text-xs px-2 py-1 rounded border border-gray-300 hover:bg-gray-50">Copy</button>
									</div>
								</div>
								<div className="bg-white border border-gray-200 rounded-lg p-4">
									<p className="text-sm text-gray-500">Attempted Amount</p>
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

							{/* Help */}
							<div className="mt-6 bg-rose-50 border border-rose-200 rounded-lg p-4">
								<h3 className="font-lora text-rose-900">Common reasons</h3>
								<ul className="list-disc list-inside text-rose-900/80 mt-2 text-sm">
									<li>Card limit exceeded or insufficient funds.</li>
									<li>Bank transfer not confirmed yet (may take 1–2 business days).</li>
									<li>QRIS app timeout or network interruption.</li>
								</ul>
							</div>

							{/* Actions */}
							<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
								<button onClick={() => router.push('/payment')} className="px-5 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium btn-hover-scale">Try Again</button>
								<Link href="/landing_page/contact" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale">Contact Support</Link>
								<Link href="/landing_page/home" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale">Back to Home</Link>
							</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

