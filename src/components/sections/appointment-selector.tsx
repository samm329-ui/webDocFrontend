"use client";

import type { AppointmentType } from "@/app/page";
import { Stethoscope, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AppointmentSelectorProps {
  onSelect: (type: AppointmentType) => void;
}

const appointmentOptions = [
  {
    type: "Dental Check-Up" as AppointmentType,
    title: "Dental Check-Up",
    subtitle: "Routine & Preventive Care",
    description: "A comprehensive review of your oral health, including cleaning, X-rays if needed, and a consultation with the dentist.",
    icon: Activity,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    type: "Dental Surgery" as AppointmentType,
    title: "Dental Surgery",
    subtitle: "Advanced Treatments",
    description: "For procedures like implants, extractions, or root canals. Requires a preliminary consultation to determine the best course of action.",
    icon: Stethoscope,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
];

export default function AppointmentSelector({ onSelect }: AppointmentSelectorProps) {
  return (
    <section id="appointment" className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-card">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">Book Your Appointment</h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-xl">
            Select appointment type
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 max-w-4xl mx-auto">
          {appointmentOptions.map((option) => (
            <Card
              key={option.type}
              onClick={() => onSelect(option.type)}
              className="flex-1 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group bg-white"
            >
              <CardContent className="p-5 md:p-6 flex flex-col h-full">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${option.iconBg} flex items-center justify-center mb-4`}>
                  <option.icon className={`w-6 h-6 md:w-7 md:h-7 ${option.iconColor}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{option.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-medium mb-3">{option.subtitle}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-grow hidden md:block">{option.description}</p>
                <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Select</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
