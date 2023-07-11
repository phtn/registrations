'use client';
import { Nav } from '../components';

export default function NextStepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Nav />
      {children}
    </section>
  );
}
