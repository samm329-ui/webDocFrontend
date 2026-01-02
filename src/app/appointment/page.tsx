'use client';

import { Suspense } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AppointmentForm from '@/components/sections/appointment-form';
import { useSearchParams } from 'next/navigation';
import type { AppointmentType } from '@/app/page';
import { Card, CardContent } from '@/components/ui/card';

function AppointmentPageContent() {
  const searchParams = useSearchParams();
  const appointmentType = searchParams.get('type') as AppointmentType | null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12">
        <AppointmentForm appointmentType={appointmentType} />
      </main>
      <Footer />
    </div>
  );
}

function Fallback() {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <Card>
                <CardContent className="p-8">
                    <p>Loading form...</p>
                </CardContent>
            </Card>
        </main>
        <Footer />
      </div>
    )
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={<Fallback/>}>
      <AppointmentPageContent />
    </Suspense>
  );
}
