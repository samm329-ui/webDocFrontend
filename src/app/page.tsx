"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import AppointmentSelector from "@/components/sections/appointment-selector";
import About from "@/components/sections/about";
import Treatments from "@/components/sections/treatments";
import Contact from "@/components/sections/contact";
import WhyChoose from "@/components/sections/why-choose";
import Testimonials from "@/components/sections/testimonials";
import LoadingScreen from "@/components/loading-screen";
import AuthDialog from "@/components/auth-dialog";

export type AppointmentType = "Dental Check-Up" | "Dental Surgery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentType, setAppointmentType] = useState<AppointmentType | null>(null);

  // Mock user state with persistence
  const [user, setUser] = useState<any>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    // Check for persisted user
    const storedUser = localStorage.getItem('webDoctor_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }
  }, []);

  const handleSelectAppointment = (type: AppointmentType) => {
    if (user) {
      setAppointmentType(type);
      setIsLoading(true);
      setTimeout(() => {
        const url = `/appointment?type=${encodeURIComponent(type)}`;
        // Pass user data to the new window via query param or local storage (shared domain)
        window.open(url, "_blank");
        setIsLoading(false);
        setAppointmentType(null);
      }, 1500);
    } else {
      setAppointmentType(type);
      setAuthMode('login');
      setIsAuthDialogOpen(true);
    }
  };

  const handleLogin = (credentials: any) => {
    console.log("Logging in...", credentials);
    const fakeUser = { ...credentials, id: '123' };
    setUser(fakeUser);
    localStorage.setItem('webDoctor_user', JSON.stringify(fakeUser));

    setIsAuthDialogOpen(false);
    if (appointmentType) {
      handleSelectAppointment(appointmentType);
    }
  };

  const handleSignUp = (credentials: any) => {
    console.log("Signing up...", credentials);
    const fakeUser = { ...credentials, id: '123' };
    setUser(fakeUser);
    localStorage.setItem('webDoctor_user', JSON.stringify(fakeUser));

    setIsAuthDialogOpen(false);
    if (appointmentType) {
      handleSelectAppointment(appointmentType);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('webDoctor_user');
    console.log("Logged out");
  };

  if (isLoading && !isAuthDialogOpen) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header
        user={user}
        onLoginClick={() => { setAuthMode('login'); setIsAuthDialogOpen(true); }}
        onSignUpClick={() => { setAuthMode('signup'); setIsAuthDialogOpen(true); }}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        <Hero />
        <AppointmentSelector onSelect={handleSelectAppointment} />
        <About />
        <Treatments />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AuthDialog
        isOpen={isAuthDialogOpen}
        onOpenChange={setIsAuthDialogOpen}
        mode={authMode}
        onModeChange={setAuthMode}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
    </div>
  );
}
