"use client";

import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";

export default function ForgotPasswordPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [email, setEmail] = useState("");
	const [sent, setSent] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		setTimeout(() => setSent(true), 700);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Forgot Password</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">We’ll send you a reset link</p>
				</div>
			</section>

			<section className="max-w-lg mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					{sent ? (
						<div className="text-center">
							<div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
								<svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
									<path d="M20 6L9 17l-5-5" />
								</svg>
							</div>
							<h2 className="mt-6 text-2xl font-lora">Check your email</h2>
							<p className="text-gray-600 mt-2">If an account exists for {email}, you’ll receive a reset link shortly.</p>
							<div className="mt-6">
								<Link href="/auth/login" className="px-5 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium btn-hover-scale">Back to Sign In</Link>
							</div>
						</div>
					) : (
						<form onSubmit={onSubmit} className="space-y-5" noValidate>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
								<input
									id="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
									placeholder="you@example.com"
								/>
							</div>
							<button type="submit" className="w-full py-3 rounded-lg text-white font-medium btn-hover-scale bg-amber-600 hover:bg-amber-700">Send Reset Link</button>
							<p className="text-sm text-gray-600 text-center">
								Remembered your password?{" "}
								<Link href="/auth/login" className="text-amber-700 hover:text-amber-800 font-medium">Sign in</Link>
							</p>
						</form>
					)}
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

