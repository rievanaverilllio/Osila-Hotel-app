"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { useScrollEffect } from "../../../hooks/useScrollEffect";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentPendingPage() {
	const { isScrolled } = useScrollEffect(0.1);
	const params = useSearchParams();
	const orderIdFromQuery = useMemo(() => params?.get("orderId") ?? "-", [params]);
	const [meta, setMeta] = useState<any | null>(null);
	const [checking, setChecking] = useState(false);

	useEffect(() => {
		try {
			const raw = typeof window !== "undefined" ? sessionStorage.getItem("oasila_payment") : null;
			if (raw) setMeta(JSON.parse(raw));
		} catch {}
	}, []);

	const orderId = meta?.orderId ?? orderIdFromQuery;

	const copyOrderId = async () => {
		try {
			await navigator.clipboard.writeText(String(orderId));
			alert("Order ID copied");
		} catch {}
	};

	const refreshStatus = async () => {
		setChecking(true);
		// Placeholder: in real app, call backend to check payment status
		setTimeout(() => setChecking(false), 800);
	};

	const MethodTips = () => {
		const method: string = meta?.method ?? "";
		if (method === "bank") {
			return (
				<ul className="list-disc list-inside text-amber-900/80 mt-2 text-sm">
					<li>Transfer sesuai jumlah yang tertera dan cantumkan Order ID sebagai berita.</li>
					<li>Konfirmasi dapat memerlukan 1–2 hari kerja.</li>
					<li>Simpan bukti transfer untuk verifikasi bila diminta.</li>
				</ul>
			);
		}
		if (method === "qris") {
			return (
				<ul className="list-disc list-inside text-amber-900/80 mt-2 text-sm">
					<li>Buka aplikasi e-wallet Anda dan selesaikan pembayaran QRIS.</li>
					<li>Proses konfirmasi dapat memerlukan hingga 10 menit.</li>
					<li>Jangan tutup halaman sampai status terbarui.</li>
				</ul>
			);
		}
		return (
			<ul className="list-disc list-inside text-amber-900/80 mt-2 text-sm">
				<li>Menunggu verifikasi bank/issuer (3D Secure atau proses otorisasi).</li>
				<li>Jangan tutup halaman ini; coba refresh status setelah beberapa menit.</li>
			</ul>
		);
	};

	return (
		<main className="min-h-screen bg-white text-gray-900">
			<Header isScrolled={isScrolled} />

			<section className="relative h-[40vh] w-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative z-10 text-center text-white px-6">
					<h1 className="text-4xl md:text-5xl font-lora font-semibold tracking-wide">Payment Pending</h1>
					<p className="mt-4 text-base md:text-lg text-gray-100/90">Order {orderId}</p>
				</div>
			</section>

			<section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 md:-mt-16 relative z-10">
				<div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 rounded-full border-4 border-amber-200 border-t-amber-600 animate-spin" aria-hidden />
						<div>
							<h2 className="text-xl font-lora">Menunggu konfirmasi pembayaran</h2>
							<p className="text-gray-600 text-sm">Kami akan memperbarui status Anda segera setelah pembayaran terverifikasi.</p>
						</div>
					</div>

					{/* Summary */}
					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="bg-white border border-gray-200 rounded-lg p-4">
							<p className="text-sm text-gray-500">Order ID</p>
							<div className="flex items-center justify-between mt-1">
								<p className="font-medium text-gray-800">{orderId}</p>
								<button onClick={copyOrderId} className="text-xs px-2 py-1 rounded border border-gray-300 hover:bg-gray-50">Copy</button>
							</div>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg p-4">
							<p className="text-sm text-gray-500">Amount</p>
							<p className="font-medium text-gray-800 mt-1">{meta ? `${meta.currency} ${meta.amount.toFixed(2)}` : "-"}</p>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg p-4">
							<p className="text-sm text-gray-500">Method</p>
							<p className="font-medium text-gray-800 mt-1 capitalize">{meta?.method ?? "-"}</p>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg p-4">
							<p className="text-sm text-gray-500">Reservation</p>
							<p className="font-medium text-gray-800 mt-1">{meta ? `${meta.room} · ${meta.nights} nights · ${meta.guests} guests` : "-"}</p>
						</div>
					</div>

					{/* Instructions */}
					<div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
						<h3 className="font-lora text-amber-900">Cara menyelesaikan pembayaran</h3>
						<MethodTips />
					</div>

					{/* Actions */}
					<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
						<button onClick={refreshStatus} className={`px-5 py-3 rounded-lg text-white font-medium btn-hover-scale ${checking ? "bg-amber-400" : "bg-amber-600 hover:bg-amber-700"}`}>{checking ? "Checking…" : "Refresh Status"}</button>
						<Link href="/landing_page/reservations" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale text-center">View Reservations</Link>
						<Link href="/landing_page/contact" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium btn-hover-scale text-center">Contact Support</Link>
					</div>
				</div>
			</section>

			<div className="mt-16">
				<Footer />
			</div>
		</main>
	);
}

