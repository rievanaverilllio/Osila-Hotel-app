"use client";

import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const params = useSearchParams();
	const router = useRouter();
	const token = params?.get("token") ?? "";

	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		if (!password || !confirm) {
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
			setSuccess(true);
			setTimeout(() => router.push("/auth/login"), 1000);
		}, 800);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Reset Password</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Enter your new password</p>
				</div>
			</section>

			<section className="max-w-lg mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					{success ? (
						<div className="text-center">
							<div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
								<svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
									<path d="M20 6L9 17l-5-5" />
								</svg>
							</div>
							<h2 className="mt-6 text-2xl font-lora">Password updated</h2>
							<p className="text-gray-600 mt-2">You’ll be redirected to sign in shortly.</p>
						</div>
					) : (
						<form onSubmit={onSubmit} className="space-y-5" noValidate>
							{token && (
								<div className="text-xs text-gray-500">Token: {token.slice(0, 6)}•••</div>
							)}
							{error && (
								<div className="p-3 rounded-lg bg-rose-50 text-rose-700 text-sm border border-rose-200">{error}</div>
							)}
							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
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
								{loading ? "Updating…" : "Update Password"}
							</button>
							<p className="text-sm text-gray-600 text-center">
								Back to{" "}
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

