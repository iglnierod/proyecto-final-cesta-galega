import UserHeader from '@/app/components/UserHeader';

export default async function BusinessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <UserHeader />
      {children}
    </div>
  );
}
