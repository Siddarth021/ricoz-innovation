import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampNexus | Pop-Up Summer Camp Operating System (Ricoz Innovation)',
  description:
    'Rents underutilized K-12 school campuses during summer months to operate multi-sport, theater, and robotics day camps. Turnkey asset-light operating platform.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
