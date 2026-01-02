
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.412 3.485 2.242 2.245 3.482 5.23 3.482 8.412-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.5-5.604-1.438l-6.302 1.659zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.07c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    value: "Nalhati, West Bengal",
    href: "https://www.google.com/maps/place/BEST+DENTAL+CLINIC+IN+NALHATI+'DR.+SOUMYADEEP+DUTTA'/@24.2933617,87.835206,17z/data=!4m6!3m5!1s0x39fa191124c646cf:0xe51792f27ad83623!8m2!3d24.2932381!4d87.8378051!16s%2Fg%2F11vjc_y182?entry=ttu",
    isLink: true,
    className: "social-link1",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    isLink: true,
    className: "social-link2",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@mediwell.clinic",
    href: "mailto:contact@mediwell.clinic",
    isLink: true,
    className: "social-link3",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/1234567890",
    isLink: true,
    className: "social-link4",
  },
];


export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We're here to help. Reach out to us or visit our clinic.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="contact-card card">
            {contactDetails.map((detail) => (
              <Link
                key={detail.title}
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className={detail.className}
                aria-label={detail.title}
              >
                <detail.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
