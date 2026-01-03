import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:block hidden"
          style={{ backgroundImage: "url('https://fmsmyyjfttkkvtcitqox.supabase.co/storage/v1/object/public/asset/ezgif.com-gif-maker%20(1).webp')" }}
        />
        {/* Mobile: Lighter background */}
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 md:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:from-black/60 md:to-black/20"></div>
      </div>

      <div className="container relative z-10 h-full flex items-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center w-full">
          {/* Text Content - Left Side */}
          <div className="flex flex-col items-start text-left md:pr-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs md:text-sm text-primary mb-3 md:mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              15+ Years of Experience
            </div>
            <h1 className="font-headline text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              DR. SOUMYADEEP DUTTA
            </h1>
            <p className="mt-2 md:mt-4 text-base md:text-2xl text-white/90 font-medium">
              Advanced Dental Surgery & Care
            </p>
            <p className="mt-3 md:mt-6 max-w-prose text-white/80 text-xs md:text-lg leading-relaxed">
              Premium, painless dental care in a sterile & modern clinic
            </p>
            <div className="mt-5 md:mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="h-10 md:h-12 px-5 md:px-8 text-sm md:text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="#appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>

          {/* Doctor Image - Right Side - Visible on Mobile */}
          <div className="flex justify-end items-end h-full">
            <div className="relative w-full max-w-[280px] md:max-w-md h-[300px] md:h-[500px]">
              <Image
                src="https://fmsmyyjfttkkvtcitqox.supabase.co/storage/v1/object/public/asset/ezgif.com-gif-maker%20(1).webp"
                alt="Dr. Soumyadeep Dutta"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
