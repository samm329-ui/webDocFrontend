"use client";

import { CheckCircle2, Award, Clock, Heart } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

export default function WhyChoose() {
    const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

    const reasons = [
        {
            icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            title: "Extremely Clean Clinic",
            description: "We follow strict sterilization protocols for your safety."
        },
        {
            icon: <Award className="w-10 h-10 text-primary" />,
            title: "Modern Equipment",
            description: "State-of-the-art technology for painless treatments."
        },
        {
            icon: <Clock className="w-10 h-10 text-primary" />,
            title: "Experienced Doctor",
            description: "10+ Years of trust and thousands of happy smiles."
        },
        {
            icon: <Heart className="w-10 h-10 text-primary" />,
            title: "Patient-First Approach",
            description: "We listen to your fears and care for your comfort."
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Why Choose Us?</h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                        We combine expert care with a comforting environment.
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex-[0_0_75%] min-w-0">
                                <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow h-full">
                                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                        >
                            <div className="mb-4 p-3 bg-primary/10 rounded-full">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                            <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Carousel dots indicator for mobile */}
                <div className="flex md:hidden justify-center gap-2 mt-6">
                    {reasons.map((_, index) => (
                        <div key={index} className="w-2 h-2 rounded-full bg-slate-300"></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
