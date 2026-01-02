import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://fmsmyyjfttkkvtcitqox.supabase.co/storage/v1/object/public/asset/ezgif.com-gif-maker%20(1).webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10"></div>
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start text-left md:col-span-2 lg:col-span-1">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            15+ Years of Experience
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            DR. SOUMYADEEP DUTTA
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 font-medium">
            Advanced Dental Surgery & Care
          </p>
          <p className="mt-6 max-w-prose text-primary-foreground/80 md:text-lg leading-relaxed">
            Your smile deserves the best. We provide painless, professional, and premium dental treatments in a sterile environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="#appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
        </div>
      </div>
    </section>
  );
}
