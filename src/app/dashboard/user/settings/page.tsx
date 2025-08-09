"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";

export default function UserSettingsPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [tab, setTab] = useState<"security" | "notifications">("security");
	const [saving, setSaving] = useState(false);

	const onSave = (e: React.FormEvent) => {
		e.preventDefault();
		setSaving(true);
		setTimeout(() => setSaving(false), 800);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80" alt="Settings" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">Settings</h1>
						<p className="mt-2 text-white/90">Security & notifications</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="max-w-4xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					{/* Tabs */}
					<div className="flex gap-3 border-b">
						{(["security", "notifications"] as const).map((t) => (
							<button
								key={t}
								onClick={() => setTab(t)}
								className={`px-4 py-2 -mb-px border-b-2 ${tab === t ? "border-amber-600 text-amber-900" : "border-transparent text-gray-600 hover:text-gray-800"}`}
							>
								{t[0].toUpperCase() + t.slice(1)}
							</button>
						))}
					</div>

					{/* Panels */}
					{tab === "security" ? (
						<form onSubmit={onSave} className="mt-6 grid grid-cols-1 gap-4">
							<div>
								<label className="block text-sm text-gray-600">Current Password</label>
								<input type="password" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm text-gray-600">New Password</label>
									<input type="password" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
								</div>
								<div>
									<label className="block text-sm text-gray-600">Confirm New Password</label>
									<input type="password" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
								</div>
							</div>
							<div className="flex justify-end">
								<button type="submit" disabled={saving} className={`px-5 py-2.5 rounded-lg text-white font-medium ${saving ? "bg-amber-400" : "bg-amber-600 hover:bg-amber-700"}`}>
									{saving ? "Saving…" : "Save Changes"}
								</button>
							</div>
						</form>
					) : (
						<form onSubmit={onSave} className="mt-6 grid grid-cols-1 gap-4">
							{[
								{ id: "emailPromo", label: "Email me promotional offers" },
								{ id: "emailBooking", label: "Email me booking confirmations" },
								{ id: "smsAlerts", label: "Send SMS alerts for check-in/out" },
								{ id: "pushNews", label: "Push notifications for news & updates" },
							].map(item => (
								<label key={item.id} className="flex items-center gap-3">
									<input type="checkbox" className="accent-amber-600" />
									<span>{item.label}</span>
								</label>
							))}
							<div className="flex justify-end">
								<button type="submit" disabled={saving} className={`px-5 py-2.5 rounded-lg text-white font-medium ${saving ? "bg-amber-400" : "bg-amber-600 hover:bg-amber-700"}`}>
									{saving ? "Saving…" : "Save Preferences"}
								</button>
							</div>
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

