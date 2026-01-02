
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
  onLogin: (credentials: any) => void;
  onSignUp: (credentials: any) => void;
}

export default function AuthDialog({
  isOpen,
  onOpenChange,
  mode,
  onModeChange,
  onLogin,
  onSignUp,
}: AuthDialogProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }
      onSignUp({ email, phone, password });
    } else {
      onLogin({ email, phone, password });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === 'login' ? 'Login' : 'Sign Up'}</DialogTitle>
          <DialogDescription>
            {mode === 'login'
              ? 'Access your account to book an appointment.'
              : 'Create an account to get started.'}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="phone">Phone</TabsTrigger>
          </TabsList>
          <form onSubmit={handleSubmit}>
            <TabsContent value="email">
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  {mode === 'signup' && (
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                  )}
                </div>
            </TabsContent>
            <TabsContent value="phone">
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                   <div className="grid gap-2">
                    <Label htmlFor="password-phone">Password</Label>
                    <Input id="password-phone" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  {mode === 'signup' && (
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password-phone">Confirm Password</Label>
                      <Input id="confirm-password-phone" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                  )}
                </div>
            </TabsContent>

            {error && <p className="text-destructive text-sm text-center mb-4">{error}</p>}
            
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                {mode === 'login' ? 'Login' : 'Sign Up'}
              </Button>
              <Button
                type="button"
                variant="link"
                onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
              >
                {mode === 'login'
                  ? "Don't have an account? Sign Up"
                  : 'Already have an account? Login'}
              </Button>
            </div>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
