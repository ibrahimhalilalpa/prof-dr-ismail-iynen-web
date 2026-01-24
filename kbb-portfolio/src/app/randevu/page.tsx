"use client";
import AppointmentForm from "@/components/Appointment";

export default function RandevuPage() {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-32">
            {/* max-w-3xl gibi kısıtlamaları kaldırdık, bileşen kendi genişliğini yönetsin */}
            <AppointmentForm />
        </main>
    );
}