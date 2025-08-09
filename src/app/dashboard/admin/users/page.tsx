"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useScrollEffect } from "@/hooks/useScrollEffect";

type Role = "admin" | "user";
type User = { id: string; name: string; email: string; role: Role; joined: string; status: "active" | "blocked" };

const seed: User[] = [
	{ id: "USR-1001", name: "Adi Putra", email: "adi@example.com", role: "admin", joined: "2024-02-10", status: "active" },
	{ id: "USR-1002", name: "Siti Dewi", email: "siti@example.com", role: "user", joined: "2024-05-03", status: "active" },
	{ id: "USR-1003", name: "Rama Wijaya", email: "rama@example.com", role: "user", joined: "2024-09-22", status: "blocked" },
	{ id: "USR-1004", name: "Dewi Lestari", email: "dewi@example.com", role: "user", joined: "2025-03-18", status: "active" },
];

export default function AdminUsersPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const [query, setQuery] = useState("");
	const [role, setRole] = useState<"all" | Role>("all");
	const [status, setStatus] = useState<"all" | User["status"]>("all");

	const filtered = useMemo(() => {
		const q = query.toLowerCase();
		return seed.filter(u =>
			(role === "all" || u.role === role) &&
			(status === "all" || u.status === status) &&
			(u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q))
		);
	}, [query, role, status]);

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			{/* Hero */}
			<section className="relative h-[30vh] w-full overflow-hidden">
				<img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=2070&q=80" alt="Users" className="absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
					<div>
						<h1 className="text-3xl md:text-4xl font-lora font-light">Users</h1>
						<p className="mt-2 text-white/90">Manage user accounts</p>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
					{/* Filters */}
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
						<div className="flex gap-2">
							{(["all", "admin", "user"] as const).map(r => (
								<button key={r} onClick={() => setRole(r)} className={`px-3 py-1.5 rounded-full text-sm border ${role === r ? "bg-amber-50 text-amber-900 border-amber-200" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>{r[0].toUpperCase() + r.slice(1)}</button>
							))}
						</div>
						<div className="flex gap-2">
							{(["all", "active", "blocked"] as const).map(s => (
								<button key={s} onClick={() => setStatus(s)} className={`px-3 py-1.5 rounded-full text-sm border ${status === s ? "bg-amber-600 text-white border-amber-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}>{s[0].toUpperCase() + s.slice(1)}</button>
							))}
						</div>
						<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search id, name, or email" className="w-full lg:w-72 rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-500" />
					</div>

					{/* Table */}
					<div className="mt-6 overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead>
								<tr className="text-left text-gray-500 border-b">
									<th className="py-3 pr-4">User</th>
									<th className="py-3 pr-4">Email</th>
									<th className="py-3 pr-4">Role</th>
									<th className="py-3 pr-4">Joined</th>
									<th className="py-3 pr-4">Status</th>
									<th className="py-3 pr-4 text-right">Action</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map(u => (
									<tr key={u.id} className="border-b last:border-0">
										<td className="py-3 pr-4 font-medium text-gray-800">{u.name} <span className="text-gray-400">({u.id})</span></td>
										<td className="py-3 pr-4">{u.email}</td>
										<td className="py-3 pr-4 capitalize">{u.role}</td>
										<td className="py-3 pr-4">{new Date(u.joined).toLocaleDateString()}</td>
										<td className="py-3 pr-4">
											<span className={`px-2 py-0.5 rounded-full text-xs border ${
												u.status === "active" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-rose-50 text-rose-800 border-rose-200"
											}`}>
												{u.status}
											</span>
										</td>
										<td className="py-3 pr-4 text-right space-x-3">
											<button className="text-amber-700 hover:text-amber-800">Edit</button>
											<button className="text-rose-600 hover:text-rose-700">Block</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

