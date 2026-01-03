'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import useEmblaCarousel from 'embla-carousel-react';

const diseases = [
  {
    id: "cavities",
    name: "Cavities (Caries)",
    description: "Cavities are small holes in your teeth caused by tooth decay. This happens when sugary foods are left on teeth, allowing bacteria to produce acid that eats away at the tooth enamel.",
    treatment: "Treatment includes fluoride, fillings, crowns, or root canals if severe. Prevention is key with good hygiene."
  },
  {
    id: "gum-disease",
    name: "Gum Disease (Gingivitis)",
    description: "Gingivitis is the earliest stage of gum disease, an inflammation of the gums usually caused by plaque buildup. Your gums might be red, swollen, and bleed easily.",
    treatment: "Professional cleaning (scaling and root planing) and improved oral hygiene. In advanced cases, surgery may be required."
  },
  {
    id: "tooth-sensitivity",
    name: "Tooth Sensitivity",
    description: "If you feel a short, sharp pain in your teeth when eating or drinking something hot, cold, sweet, or sour, you may have sensitive teeth.",
    treatment: "Desensitizing toothpaste, fluoride gel, or in-office treatments like bonding or sealants can help."
  },
  {
    id: "bad-breath",
    name: "Bad Breath (Halitosis)",
    description: "Halitosis, or chronic bad breath, is more than just morning breath. It's a persistent odor that can be caused by food, poor dental hygiene, or underlying health issues.",
    treatment: "Improved oral hygiene, professional cleaning, and treating underlying dental or medical conditions."
  },
  {
    id: "tooth-erosion",
    name: "Tooth Erosion",
    description: "This is the gradual wearing away of the hard, outer layer of your teeth (enamel) by acids from food and drink, or from stomach acid.",
    treatment: "Treatment involves bonding, veneers, or crowns to protect the tooth and restore its appearance. Limiting acidic foods is crucial."
  },
  {
    id: "oral-cancer",
    name: "Oral Cancer",
    description: "This is a serious condition, but regular dental check-ups are key for early detection. We look for any signs of abnormal cells in your mouth.",
    treatment: "Early detection is vital. Treatment typically involves surgery, radiation therapy, and/or chemotherapy."
  },
];

export default function Treatments() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });
  const diseaseImages = Object.fromEntries(
    PlaceHolderImages.map(p => [p.id, p])
  );

  return (
    <section id="services" className="w-full py-12 md:py-24 bg-white dark:bg-card">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">Common Dental Issues</h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-xl">
            Awareness is the first step towards prevention and treatment.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {diseases.map((disease) => {
              const image = diseaseImages[disease.id];
              return (
                <div key={disease.id} className="flex-[0_0_75%] min-w-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] group">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 className="font-headline text-xl font-bold text-white mb-2">{disease.name}</h3>
                      <p className="text-xs text-white/90 leading-relaxed">{disease.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {diseases.map((disease) => {
            const image = diseaseImages[disease.id];
            return (
              <div key={disease.id} className="group relative overflow-hidden aspect-square">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-headline text-2xl font-bold text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-2">{disease.name}</h3>
                  <div className="opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 max-h-0 group-hover:max-h-full overflow-hidden">
                    <p className="text-sm text-primary-foreground/80 mt-2">{disease.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm text-white">Treatment</h4>
                      <p className="text-sm text-primary-foreground/80">{disease.treatment}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel dots indicator for mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {diseases.slice(0, 4).map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-slate-300"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
