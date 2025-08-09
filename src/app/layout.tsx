import '../styles/globals.css'
import { Lora } from 'next/font/google'

// Initialize the Lora font with the desired weights and subsets
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

export const metadata = {
  title: 'Oasila - Reservasi Penginapan',
  description: 'Platform Reservasi Penginapan Oasila Hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${lora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
