"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";

export default function UserProfilePage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [name, setName] = useState("A. Guest");
	const [email, setEmail] = useState("guest@example.com");
	const [phone, setPhone] = useState("");
	const [bio, setBio] = useState("");
	const [saving, setSaving] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSaving(true);
		setTimeout(() => setSaving(false), 800);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1520975922284-9f0b171fe3f5?auto=format&fit=crop&w=2070&q=80" alt="Profile" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">Profile</h1>
						<p className="mt-2 text-white/90">Personal information & preferences</p>
					</div>
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					<div className="flex flex-col md:flex-row gap-6">
						{/* Avatar */}
						<div className="md:w-64 flex flex-col items-center">
							<div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-strong">
								<img src="https://i.pravatar.cc/160?img=13" alt="Avatar" className="w-full h-full object-cover" />
							</div>
							<button className="mt-3 text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Change</button>
						</div>

						{/* Form */}
						<div className="flex-1">
							<form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm text-gray-600">Full Name</label>
									<input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
								</div>
								<div>
									<label className="block text-sm text-gray-600">Email</label>
									<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
								</div>
								<div>
									<label className="block text-sm text-gray-600">Phone</label>
									<input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
								</div>
								<div className="md:col-span-2">
									<label className="block text-sm text-gray-600">Bio</label>
									<textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
								</div>
								<div className="md:col-span-2 flex justify-end">
									<button type="submit" disabled={saving} className={`px-5 py-2.5 rounded-lg text-white font-medium ${saving ? "bg-amber-400" : "bg-amber-600 hover:bg-amber-700"}`}>
										{saving ? "Saving…" : "Save Changes"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

