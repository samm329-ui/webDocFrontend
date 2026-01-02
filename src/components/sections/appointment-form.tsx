"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { API_BASE_URL } from "@/config/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ------------------ SCHEMA ------------------ */

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  date: z.string().min(1, "Date is required"),
  type: z.string().min(1, "Appointment type is required"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

/* ------------------ COMPONENT ------------------ */

interface AppointmentFormProps {
  appointmentType?: string | null;
}

export default function AppointmentForm({ appointmentType }: AppointmentFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      date: "",
      type: appointmentType || "Dental Check-Up",
      notes: "",
    },
  });

  useEffect(() => {
    if (appointmentType) {
      form.setValue("type", appointmentType);
    }
  }, [appointmentType, form]);

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Submitting to:", `${API_BASE_URL}/api/appointments`);
      const res = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.phone,
          email: data.email,
          preferred_date: data.date,
          appointment_type: data.type,
          notes: data.notes,
        }),
      });

      const json = await res.json().catch(() => ({})); // Handle empty/non-json responses

      if (res.ok) {
        alert("✅ Success: Appointment Booked!");
        form.reset();
      } else {
        console.error("Server Error:", res.status, json);
        if (res.status === 404) {
          alert("❌ Error 404: Backend URL is wrong. Please check api.js");
        } else {
          // Show the exact message from the backend (e.g. "Backend Error: Credentials not configured")
          alert(`❌ ${json.message || "Failed to create appointment"}`);
        }
      }

    } catch (err) {
      alert("⚠️ Network Error: Could not connect to backend. Check internet or if backend is deployed.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl shadow-lg border border-border">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Dental Check-Up">Dental Check-Up</SelectItem>
                      <SelectItem value="Dental Surgery">Dental Surgery</SelectItem>
                      <SelectItem value="Root Canal">Root Canal</SelectItem>
                      <SelectItem value="Cosmetic">Cosmetic</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem / Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your issue..." className="h-20" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-lg h-12 mt-4">
            Confirm Booking
          </Button>
        </form>
      </Form>
    </div>
  );
}
