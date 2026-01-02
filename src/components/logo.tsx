import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center font-headline ${className}`}>
    <span className="text-xl font-bold text-foreground">Dr. Dutta's Dental</span>
  </div>
);

export default Logo;
