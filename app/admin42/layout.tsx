'use client';
import { Nav } from '../components';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Nav />
      <span>Admin Page</span>
      {children}
    </section>
  );
}
