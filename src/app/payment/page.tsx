"use client";

import React, { useMemo, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const router = useRouter();

	const [method, setMethod] = useState<string>("card");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const subtotal = 250;
	const taxes = useMemo(() => +(subtotal * 0.1).toFixed(2), [subtotal]);
	const total = useMemo(() => +(subtotal + taxes).toFixed(2), [subtotal, taxes]);

	const handlePay = () => {
		if (isSubmitting) return;
		setIsSubmitting(true);
		const orderId = `ORD-${Date.now().toString().slice(-8)}`;
			// Persist minimal payment info for the processing + result pages (demo only)
			try {
				const payload = {
					orderId,
					amount: total,
					currency: "USD",
					method,
					room: "Deluxe Ocean View Suite",
					nights: 2,
					guests: 2,
					createdAt: new Date().toISOString(),
				};
				if (typeof window !== "undefined") {
					sessionStorage.setItem("oasila_payment", JSON.stringify(payload));
				}
			} catch {}
			// Navigate to order processing page
		router.push(`/payment/${orderId}`);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[40vh] w-full bg-gradient-hero flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Payment</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Securely complete your reservation</p>
				</div>
			</section>

			{/* Content */}
			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Order Summary */}
					<div className="lg:col-span-2 bg-white rounded-xl shadow-soft border border-gray-100 p-6">
						<h2 className="text-2xl font-lora mb-4">Order Summary</h2>
						<div className="space-y-4">
							<div className="flex items-center justify-between border-b border-gray-100 pb-4">
								<div>
									<p className="font-medium">Deluxe Ocean View Suite</p>
									<p className="text-sm text-gray-500">2 nights · 2 guests · Breakfast included</p>
								</div>
								<span className="font-semibold">$250.00</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600">Taxes & Fees (10%)</span>
								<span className="font-medium">${taxes.toFixed(2)}</span>
							</div>
							<div className="flex items-center justify-between pt-2 border-t border-gray-100">
								<span className="text-lg font-semibold">Total</span>
								<span className="text-lg font-semibold">${total.toFixed(2)}</span>
							</div>
						</div>
					</div>

					{/* Payment Method */}
					<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
						<h2 className="text-2xl font-lora mb-4">Payment Method</h2>

						<div className="space-y-3">
							<label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${method === "card" ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"}`}>
								<span className="flex items-center gap-3">
									<input
										type="radio"
										name="method"
										value="card"
										checked={method === "card"}
										onChange={() => setMethod("card")}
										className="accent-amber-600"
									/>
									Credit/Debit Card
								</span>
								<span className="text-xs text-gray-500">Visa · Mastercard · Amex</span>
							</label>

							<label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${method === "bank" ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"}`}>
								<span className="flex items-center gap-3">
									<input
										type="radio"
										name="method"
										value="bank"
										checked={method === "bank"}
										onChange={() => setMethod("bank")}
										className="accent-amber-600"
									/>
									Bank Transfer
								</span>
								<span className="text-xs text-gray-500">1-2 business days</span>
							</label>

							<label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${method === "qris" ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-gray-300"}`}>
								<span className="flex items-center gap-3">
									<input
										type="radio"
										name="method"
										value="qris"
										checked={method === "qris"}
										onChange={() => setMethod("qris")}
										className="accent-amber-600"
									/>
									QRIS
								</span>
								<span className="text-xs text-gray-500">Pay with supported e-wallets</span>
							</label>
						</div>

						<button
							onClick={handlePay}
							disabled={isSubmitting}
							className={`mt-6 w-full py-3 rounded-lg text-white font-medium transition btn-hover-scale ${
								isSubmitting ? "bg-amber-400 cursor-not-allowed" : "bg-amber-600 hover:bg-amber-700"
							}`}
							aria-label="Proceed to pay"
						>
							{isSubmitting ? "Processing..." : "Proceed to Pay"}
						</button>
						<p className="text-xs text-gray-500 mt-3">
							By proceeding, you agree to our Terms and Privacy Policy.
						</p>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

