import { Suspense } from "react";
import { BookingForm } from "./booking-form";

export const metadata = { title: "Book an appointment — Aurelia Salon & Spa" };

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookingForm />
    </Suspense>
  );
}
