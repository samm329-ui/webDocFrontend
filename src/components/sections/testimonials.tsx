"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            text: "Treatment was painless and explained clearly. I finally found a dentist I trust.",
            author: "Priya S.",
            role: "Patient"
        },
        {
            text: "Dr. Dutta is extremely professional. The clinic is spotless and the staff is very kind.",
            author: "Rahul M.",
            role: "Patient"
        },
        {
            text: "My root canal was done so smoothly, I didn't feel a thing. Highly recommended!",
            author: "Anjali K.",
            role: "Patient"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-headline mb-4">What Our Patients Say</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="border-none shadow-lg bg-card/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={80} />
                            </div>
                            <CardContent className="p-8 flex flex-col h-full justify-between relative z-10">
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-lg text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{review.author}</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{review.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
