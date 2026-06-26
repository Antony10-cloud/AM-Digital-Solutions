import Link from "next/link";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AM Digital Solutions</p>
          <h1>Build the digital front door your business deserves.</h1>
          <p>
            AM Digital Solutions creates websites, mobile apps, and focused systems that help customers understand what you do,
            trust your business, and reach you without friction.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/services">
              View services
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="AM Digital Solutions service focus">
          <p>Built Around</p>
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="hero-service">
              <span>0{index + 1}</span>
              <strong>{service.title}</strong>
            </Link>
          ))}
          <small>Clear structure, refined design, practical development, and launch support.</small>
        </div>
      </section>

      <section className="studio-note">
        <p className="section-kicker">The Approach</p>
        <h2>First, make the offer clear. Then build the product around it.</h2>
        <p>
          A strong digital product is not just decoration. It should answer the right questions, guide people through the next
          action, and make the business easier to choose.
        </p>
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
