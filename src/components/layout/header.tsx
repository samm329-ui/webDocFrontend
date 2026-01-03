
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { Menu, UserCircle2 } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Ailments", className: "w-auto text-center" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ onLoginClick, onSignUpClick, user, onLogout }: { onLoginClick: () => void, onSignUpClick: () => void, user: any, onLogout: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 text-slate-300">
      {/* Desktop Header */}
      <div className="container hidden md:flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="[&>span]:text-white" />
        </Link>

        <nav className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-slate-300/80 transition-colors hover:text-white ${link.className || ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-slate-300/80">Welcome!</span>
              <Button variant="outline" onClick={onLogout} className="text-white border-white/50 hover:bg-slate-700 hover:text-white">Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={onLoginClick} className="text-white hover:bg-slate-700 hover:text-white">Login</Button>
              <Button onClick={onSignUpClick} className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden h-16 items-center justify-between px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-slate-800 text-slate-300 border-r-slate-700">
            <div className="flex flex-col h-full pt-6">
              <nav className="flex flex-col items-start space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-slate-300/80 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-6 space-y-4">
                {user ? (
                  <>
                    <div className="text-center text-white">Welcome!</div>
                    <Button onClick={() => { onLogout(); setIsOpen(false); }} className="w-full bg-primary hover:bg-primary/90">Logout</Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={() => { onLoginClick(); setIsOpen(false); }} className="w-full text-white hover:bg-slate-700">Login</Button>
                    <Button onClick={() => { onSignUpClick(); setIsOpen(false); }} className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="absolute left-1/2 -translate-x-1/2 text-white font-semibold text-base">
          Dr. Dutta's Dental
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={user ? onLogout : onLoginClick}
          className="text-white hover:bg-slate-700"
        >
          <UserCircle2 className="h-6 w-6" />
          <span className="sr-only">{user ? 'Logout' : 'Login'}</span>
        </Button>
      </div>
    </header>
  );
}
