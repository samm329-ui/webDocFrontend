
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";

const navLinks = [
  { href: "#services", label: "Ailments", className: "w-auto text-center" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ onLoginClick, onSignUpClick, user, onLogout }: { onLoginClick: () => void, onSignUpClick: () => void, user: any, onLogout: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 text-slate-300">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="[&>span]:text-white" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
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

        <div className="hidden md:flex items-center space-x-4">
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

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="text-white border-white/50 hover:bg-slate-700 hover:text-white">
                <span className="sr-only">Open menu</span>
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-800 text-slate-300 border-l-slate-700">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                   <Link href="/" onClick={() => setIsOpen(false)}>
                     <Logo className="[&>span]:text-white"/>
                   </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-slate-700">
                    <span className="sr-only">Close menu</span>
                    X
                  </Button>
                </div>
                <nav className="flex flex-col items-start space-y-4 p-4">
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
                <div className="mt-auto p-4 border-t border-slate-700 space-y-4">
                  {user ? (
                    <>
                       <div className="text-center text-white">Welcome!</div>
                       <Button onClick={() => { onLogout(); setIsOpen(false); }} className="w-full bg-primary hover:bg-primary/90">Logout</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" onClick={() => { onLoginClick(); setIsOpen(false); }} className="w-full text-white hover:bg-slate-700">Login</Button>
                      <Button onClick={() => { onSignUpClick(); setIsOpen(false);}} className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
