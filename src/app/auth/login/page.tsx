"use client";

import React, { useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleGoogleLogin = () => {
		// TODO: Integrate real Google OAuth flow
		router.push("/landing_page/home");
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		if (!email || !password) {
			setError("Please fill in all fields.");
			return;
		}
		setLoading(true);
		// Simulate login
		setTimeout(() => {
			setLoading(false);
			router.push("/landing_page/home");
		}, 800);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[40vh] w-full bg-gradient-hero flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Sign In</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Welcome back to Oasila</p>
				</div>
			</section>

			{/* Form Card */}
					<section className="max-w-lg mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
						<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
							{/* Social Login */}
							<button
								type="button"
								onClick={handleGoogleLogin}
								className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 btn-hover-scale"
								aria-label="Sign in with Google"
							>
								{/* Google 'G' icon */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5" aria-hidden>
									<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.155 7.961 3.039l5.657-5.657C33.64 6.053 29.084 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
									<path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.357 16.087 18.809 14 24 14c3.059 0 5.842 1.155 7.961 3.039l5.657-5.657C33.64 6.053 29.084 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
									<path fill="#4CAF50" d="M24 44c5.137 0 9.63-1.977 13.053-5.197l-6.023-4.987C28.994 35.953 26.612 37 24 37c-5.193 0-9.632-3.317-11.287-7.957l-6.54 5.036C9.474 39.556 16.197 44 24 44z"/>
									<path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.236-2.231 4.166-4.25 5.616.001-.001 6.023 4.987 6.023 4.987l.417.03C40.508 35.676 44 30.333 44 24c0-1.341-.138-2.651-.389-3.917z"/>
								</svg>
								Continue with Google
							</button>

							{/* Divider */}
							<div className="flex items-center my-6">
								<span className="h-px bg-gray-200 flex-1" />
								<span className="px-3 text-xs text-gray-500 uppercase tracking-widest">or</span>
								<span className="h-px bg-gray-200 flex-1" />
							</div>

							<form onSubmit={onSubmit} className="space-y-5" noValidate>
						{error && (
							<div className="p-3 rounded-lg bg-rose-50 text-rose-700 text-sm border border-rose-200">{error}</div>
						)}
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
						<div className="flex items-center justify-between text-sm">
							<label className="flex items-center gap-2">
								<input type="checkbox" className="accent-amber-600" />
								Remember me
							</label>
							<Link href="/auth/forgot-password" className="text-amber-700 hover:text-amber-800">Forgot password?</Link>
						</div>
						<button
							type="submit"
							disabled={loading}
							className={`w-full py-3 rounded-lg text-white font-medium btn-hover-scale ${
								loading ? "bg-amber-400 cursor-not-allowed" : "bg-amber-600 hover:bg-amber-700"
							}`}
						>
							{loading ? "Signing in…" : "Sign In"}
						</button>
					</form>

					<p className="mt-6 text-sm text-gray-600 text-center">
						Don’t have an account?{" "}
						<Link href="/auth/register" className="text-amber-700 hover:text-amber-800 font-medium">Create one</Link>
					</p>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

