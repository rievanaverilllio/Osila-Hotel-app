## Oasila Booking — Next.js App

Elegant hotel/experience booking UI built with Next.js App Router, TypeScript, and Tailwind CSS. Includes themed landing pages, authentication screens, dashboards (user/admin), and a simulated payment flow (success/failed/pending).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- ESLint (Next + TS config)

## Quick start

1) Install dependencies

```powershell
npm install
```

2) Run dev server

```powershell
npm run dev
```

Open http://localhost:3000

Build and start (production):

```powershell
npm run build ; npm run start
```

Lint:

```powershell
npm run lint
```

## Project structure (key folders)

- `src/app` — App Router pages
	- `landing_page/*` — Home, About, Contact, Dining, Experiences, Packages, Presidential, Reservations, Reviews, Wellness
	- `auth/*` — Login, Register, Forgot Password, Reset Password
	- `payment/*` — Checkout, `[orderid]` processing, `success`, `failed`, `pending`
	- `dashboard/user/*` — Root + Orders, Profile, Settings
	- `dashboard/admin/*` — Root + Payments, Reports, Users
- `src/components` — Layout (Header, Footer), UI (Card)
- `src/hooks` — `useBackgroundSlider`, `useScrollEffect`
- `src/styles` — Global styles (Tailwind v4 + utilities)

TypeScript path alias: `@/*` -> `src/*` (see `tsconfig.json`).

## Features

- Theming
	- Lora font via `next/font/google` in `src/app/layout.tsx`
	- Consistent Header/Footer with scroll-aware styling (`useScrollEffect`)

- Reusable UI
	- `Card` component for image/text blocks (overlay, badge, footer, link)
	- Hooks:
		- `useBackgroundSlider(length, intervalMs?)` → `{ current, setCurrent }`
		- `useScrollEffect(thresholdVh?)` → `{ scrollY, isScrolled }`

- Authentication (UI only)
	- `/auth/login` (with Google button UI), `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`

- Payment flow (demo)
	- `/payment` — choose method and proceed; stores a payment meta object in `sessionStorage` (`oasila_payment`)
	- `/payment/[orderid]` — shows a spinner and simulates routing to success/failed
	- `/payment/success` — reads meta, shows summary, offers “Download Receipt”
	- `/payment/failed` — reads meta, shows failure tips, copy Order ID
	- `/payment/pending` — reads meta or `?orderId=...`, shows method-specific guidance and a refresh stub
	- Admin Payments page links “View” to `/payment/pending?orderId=...` when status is pending; otherwise to `/payment/[orderid]`

- Dashboards
	- User: KPIs, recent activity, and subpages (Orders, Profile, Settings)
	- Admin: KPIs, revenue preview, and subpages (Payments with filters, Reports, Users)

## Card component (quick ref)

Props: `title`, `subtitle`, `description`, `imageSrc`, `href`, `badge`, `footer`, `overlay`, `hoverScale`, `className`, `imageClassName`, `contentClassName`.

Example usage:

```tsx
<Card
	imageSrc="/some.jpg"
	overlay
	title="Presidential Suite"
	subtitle="Popular"
	href="/landing_page/presidential"
	footer={<div className="flex items-center justify-between"><span>$420</span><span>Book →</span></div>}
/>
```

## Hooks (quick ref)

- `useBackgroundSlider(length: number, intervalMs = 15000)`
	- Advances an index on an interval; returns `{ current, setCurrent }`.

- `useScrollEffect(thresholdVh = 0.6)`
	- Tracks `scrollY` and returns `isScrolled` when crossing `thresholdVh * viewport height`.

## Notes & limitations

- No real backend/auth; payment pages use `sessionStorage` for demo data.
- Google login is a UI placeholder; integrate a real provider (e.g., NextAuth) to enable.
- Charts are CSS previews; plug in a chart lib for production.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## License

N/A
