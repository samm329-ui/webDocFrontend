'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Education & Qualifications",
    description: "BDS from WBUHS.",
    detailedDescription: "Dr. Soumyadeep Dutta earned his Bachelor of Dental Surgery (BDS) from the prestigious West Bengal University of Health Sciences (WBUHS), where he graduated with honors. He is committed to lifelong learning and regularly participates in advanced training courses to stay at the forefront of dental innovation and technology.",
    position: "left",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    description: "Top Dentist (2021, 2023) & Patients' Choice Award.",
    detailedDescription: "Dr. Dutta's commitment to excellence has been recognized with multiple accolades, including being named 'Top Dentist' in both 2021 and 2023. He is also a recipient of the 'Patients' Choice Award,' a testament to his compassionate approach and the high level of satisfaction among his patients.",
    position: "right",
  },
];

const cardVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

export default function About() {
  const aboutDoctorImage = PlaceHolderImages.find(p => p.id === 'about-doctor');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-card overflow-hidden"
    >
      {aboutDoctorImage && (
        <Image
          src={aboutDoctorImage.imageUrl}
          alt="Background image of the doctor"
          fill
          className="object-cover z-0"
          data-ai-hint={aboutDoctorImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>

      <div className="container relative z-20 flex justify-center items-center min-h-[500px]">
        <div className="relative pt-24 text-center">

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-full w-64 h-64 p-4 text-center shadow-2xl border-4 border-primary"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-headline tracking-tighter">
              DR. SOUMYADEEP DUTTA
            </h2>
            <p className="mt-2 text-primary font-semibold">
              A Leader in Dental Care
            </p>
          </motion.div>

          {qualifications.map((item, index) => (
            <motion.div
              key={item.title}
              className={`mind-map-item mind-map-${item.position}`}
              variants={cardVariants[item.position as keyof typeof cardVariants]}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.2 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="mind-map-content cursor-pointer transition-transform hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-background/80 backdrop-blur-md border-primary text-foreground">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-foreground">
                      {item.detailedDescription}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <svg className="mind-map-arrow" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q50,0 100,50" stroke="hsl(var(--primary))" fill="transparent" strokeWidth="2" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
