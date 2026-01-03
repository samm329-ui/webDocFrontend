import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] min-h-[600px] md:min-h-[600px] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://fmsmyyjfttkkvtcitqox.supabase.co/storage/v1/object/public/asset/ezgif.com-gif-maker%20(1).webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center px-4 md:px-8">
        <div className="flex flex-col items-start text-left md:col-span-2 lg:col-span-1">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs md:text-sm text-primary mb-4 md:mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            15+ Years of Experience
          </div>
          <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            DR. SOUMYADEEP DUTTA
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl text-white/90 font-medium">
            Advanced Dental Surgery & Care
          </p>
          <p className="mt-4 md:mt-6 max-w-prose text-white/80 text-sm md:text-lg leading-relaxed">
            Premium, painless dental care in a sterile & modern clinic
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="h-11 md:h-12 px-6 md:px-8 text-base md:text-lg shadow-lg hover:shadow-xl transition-all" asChild>
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
