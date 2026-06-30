import Link from "next/link";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services",
  description: "Website development, mobile app development, and digital systems by AM Digital Studio."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow"><span /> Services</p>
        <h1>Digital products built for the way your business actually works.</h1>
        <p>
          Pick the service that matches what you need now. Each service page explains the outcome, the process, and gives you a
          focused enquiry form for that request.
        </p>
      </section>

      <section className="service-list">
        {services.map((service) => (
          <Link key={service.slug} className="wide-card" href={`/services/${service.slug}`}>
            <span>{service.eyebrow}</span>
            <h2>{service.headline}</h2>
            <p>{service.summary}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
