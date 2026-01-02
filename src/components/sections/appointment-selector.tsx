"use client";

import type { AppointmentType } from "@/app/page";

interface AppointmentSelectorProps {
  onSelect: (type: AppointmentType) => void;
}

const appointmentOptions = [
  {
    type: "Dental Check-Up" as AppointmentType,
    title: "Dental Check-Up",
    date: "Routine & Preventive",
    description: "A comprehensive review of your oral health, including cleaning, X-rays if needed, and a consultation with the dentist.",
  },
  {
    type: "Dental Surgery" as AppointmentType,
    title: "Dental Surgery",
    date: "Advanced Treatments",
    description: "For procedures like implants, extractions, or root canals. Requires a preliminary consultation to determine the best course of action.",
  },
];

export default function AppointmentSelector({ onSelect }: AppointmentSelectorProps) {
  return (
    <section id="appointment" className="w-full py-16 md:py-24 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Book Your Appointment</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Please select the type of appointment you need.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
            {appointmentOptions.map((option) => (
                <div
                key={option.type}
                onClick={() => onSelect(option.type)}
                className="appointment-card"
                >
                <h3 className="card__title">{option.title}</h3>
                <p className="card__date">{option.date}</p>
                <p className="card__content">{option.description}</p>
                <div className="card__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-white">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
