import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Comptrolla Outsourcing App',
  description: 'Bookkeepers Registration Form',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
