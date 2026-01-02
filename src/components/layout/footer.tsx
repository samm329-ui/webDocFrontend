import Link from 'next/link';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="[&>span]:text-white" />
            <p className="mt-4 text-sm max-w-md">
              Providing compassionate and comprehensive dental care for you and your family.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#appointment" className="text-sm hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Dutta's Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
