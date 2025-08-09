import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect ke halaman home
  redirect('/landing_page/home');
}
