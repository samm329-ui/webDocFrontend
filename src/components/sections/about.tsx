'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const qualifications = [
  {
    icon: Briefcase,
    title: "About Doctor",
    subtitle: "10+ Years Experience",
    description: "Trusted by 900+ Patients",
    detailedDescription: "Dr. Soumyadeep Dutta has been practicing dentistry for over 10 years, earning the trust of more than 900 patients. His patient-centered approach ensures that every individual receives personalized care tailored to their unique needs.",
    image: PlaceHolderImages.find(p => p.id === 'about-doctor')
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "BDS + WBUHD",
    description: "Advanced Surgical Training",
    detailedDescription: "Dr. Soumyadeep Dutta earned his Bachelor of Dental Surgery (BDS) from the prestigious West Bengal University of Health Sciences (WBUHS), where he graduated with honors. He is committed to lifelong learning and regularly participates in advanced training courses to stay at the forefront of dental innovation and technology.",
    image: PlaceHolderImages.find(p => p.id === 'education')
  },
  {
    icon: Award,
    title: "Awards",
    subtitle: "Best Dentist 2020",
    description: "Patient's Choice",
    detailedDescription: "Dr. Dutta's commitment to excellence has been recognized with multiple accolades, including being named 'Top Dentist' in both 2021 and 2023. He is also a recipient of the 'Patients' Choice Award,' a testament to his compassionate approach and the high level of satisfaction among his patients.",
    image: PlaceHolderImages.find(p => p.id === 'awards')
  },
];

export default function About() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-32 bg-white dark:bg-card"
    >
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">
            Dr. Soumyadeep Dutta
          </h2>
          <p className="mt-3 md:mt-4 text-primary font-semibold text-sm md:text-lg">
            A Leader in Dental Care
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {qualifications.map((item, index) => (
              <div
                key={item.title}
                className="flex-[0_0_85%] min-w-0"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-white rounded-2xl shadow-lg p-5 cursor-pointer hover:shadow-xl transition-shadow h-full border border-slate-200">
                      {item.image && (
                        <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={item.image.imageUrl}
                            alt={item.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={item.image.imageHint}
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{item.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-background border-primary text-foreground">
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
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {qualifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow h-full border border-slate-200">
                    {item.image && (
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={item.image.imageUrl}
                          alt={item.image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={item.image.imageHint}
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-background border-primary text-foreground">
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
            </motion.div>
          ))}
        </div>

        {/* Carousel dots indicator for mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {qualifications.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-slate-300"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
