// app/randevu/RandevuContent.tsx
"use client";
import AppointmentForm from "@/components/Appointment";

export default function RandevuContent() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            <AppointmentForm />
        </main>
    );
}