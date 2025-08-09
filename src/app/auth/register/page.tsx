"use client";

import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		if (!name || !email || !password || !confirm) {
			setError("Please fill in all fields.");
			return;
		}
		if (password !== confirm) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			router.push("/auth/login");
		}, 800);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-cinema flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Create Account</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Join Oasila and start your journey</p>
				</div>
			</section>

			<section className="max-w-lg mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					<form onSubmit={onSubmit} className="space-y-5" noValidate>
						{error && (
							<div className="p-3 rounded-lg bg-rose-50 text-rose-700 text-sm border border-rose-200">{error}</div>
						)}
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
							<input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
								placeholder="John Doe"
							/>
						</div>
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
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
								placeholder="••••••••"
							/>
						</div>
						<div>
							<label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm Password</label>
							<input
								id="confirm"
								type="password"
								value={confirm}
								onChange={(e) => setConfirm(e.target.value)}
								required
								className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
								placeholder="••••••••"
							/>
						</div>

						<button
							type="submit"
							disabled={loading}
							className={`w-full py-3 rounded-lg text-white font-medium btn-hover-scale ${
								loading ? "bg-amber-400 cursor-not-allowed" : "bg-amber-600 hover:bg-amber-700"
							}`}
						>
							{loading ? "Creating account…" : "Create Account"}
						</button>
					</form>

					<p className="mt-6 text-sm text-gray-600 text-center">
						Already have an account?{" "}
						<Link href="/auth/login" className="text-amber-700 hover:text-amber-800 font-medium">Sign in</Link>
					</p>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

