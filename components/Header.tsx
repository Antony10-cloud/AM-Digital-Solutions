import Link from "next/link";
import { services } from "@/lib/services";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AM Digital Solutions home">
        <span className="brand-mark">AM</span>
        <span>AM Digital Solutions</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <div className="nav-dropdown">
          <Link href="/services">Services</Link>
          <div className="dropdown-menu" aria-label="Service pages">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <span>{service.title}</span>
                <small>{service.summary}</small>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Link className="header-link" href="/contact">
        Start a project <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
}
