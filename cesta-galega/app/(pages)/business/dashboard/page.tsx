import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function BusinessDashboard() {
  const loggedIn = await isCookieValid();
  if (!loggedIn) redirect('/business/login');
  return <h1>Dashboard</h1>;
}
