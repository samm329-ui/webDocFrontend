import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import MobileActionBar from "@/components/layout/mobile-action-bar";

export const metadata: Metadata = {
  title: 'DR. SOUMYADEEP DUTTA | Dental Clinic',
  description: 'Your trusted partner in dental health. Book an appointment today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <MobileActionBar />
      </body>
    </html>
  );
}
