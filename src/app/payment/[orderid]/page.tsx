"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import { useParams, useRouter } from "next/navigation";

export default function OrderProcessingPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const params = useParams();
	const router = useRouter();
	const orderId = useMemo(() => String(params?.orderid ?? ""), [params]);

	const [seconds, setSeconds] = useState(3);

	useEffect(() => {
		const t = setInterval(() => setSeconds((s) => s - 1), 1000);
		const outcome = setTimeout(() => {
			// Simple pseudo-random outcome based on orderId hash
			const code = Array.from(orderId).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
			const isSuccess = code % 2 === 0; // deterministic for demo
			router.replace(`/payment/${isSuccess ? "success" : "failed"}?orderId=${encodeURIComponent(orderId)}`);
		}, 3200);
		return () => {
			clearInterval(t);
			clearTimeout(outcome);
		};
	}, [orderId, router]);

	useEffect(() => {
		if (seconds <= 0) setSeconds(0);
	}, [seconds]);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-cinema flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Processing Payment</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Order {orderId}</p>
				</div>
			</section>

			<section className="max-w-2xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8 text-center">
					<div className="mx-auto w-14 h-14 rounded-full border-4 border-amber-200 border-t-amber-600 animate-spin" aria-hidden />
					<h2 className="mt-6 text-2xl font-lora">Please wait</h2>
					<p className="text-gray-600 mt-2">We're confirming your payment. This won't take long.</p>
					<p className="text-sm text-gray-500 mt-4">Redirecting in {seconds}s…</p>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

