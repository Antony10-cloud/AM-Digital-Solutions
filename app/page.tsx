import Link from "next/link";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> AM Digital Solutions
          </p>
          <h1>Build a sharper digital presence.</h1>
          <p>Websites, apps, and systems designed to make your business easier to understand, trust, and choose.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a project <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="text-link" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="service-preview">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>Choose the kind of product you need built.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <Link key={service.slug} className="service-card" href={`/services/${service.slug}`}>
              <span>{service.eyebrow}</span>
              <h3>{service.headline}</h3>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
