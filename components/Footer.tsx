import Link from "next/link";
import { services } from "@/lib/services";

const linkedIn = "https://www.linkedin.com/in/antonymugo";

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2.8h3.4l-7.5 8.5 8.8 11.8h-6.9l-5.4-7.1-6.2 7.1H1.7l8-9.2L1.2 2.8h7.1l4.9 6.5 5.7-6.5Zm-1.2 18.2h1.9L7.2 4.8h-2L17.7 21Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm9.9 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4v15h-4V8Zm7.2 0h3.8v2.1h.1c.5-1 1.9-2.5 4.1-2.5 4.4 0 5.2 2.9 5.2 6.7V23h-4v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4.1V23h-4V8Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="footer-logo" href="/">
            AMDIGITAL
          </Link>
          <p>
            Building websites, apps, and practical digital systems for businesses that need to look clear, credible, and ready online.
          </p>
          <div className="social-links">
            <a href="https://twitter.com/" aria-label="AM Digital Solutions on Twitter">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/" aria-label="AM Digital Solutions on Instagram">
              <InstagramIcon />
            </a>
            <a href={linkedIn} aria-label="Antony Mugo on LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div>
          <h3>Services</h3>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Start A Project</h3>
          <p>Send a short brief and I will reply with the right next step.</p>
          <div className="footer-contact">
            <a href="mailto:antonymugo66@gmail.com">antonymugo66@gmail.com</a>
            <a href="https://wa.me/254793505248">WhatsApp: 0793505248</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AM Digital Solutions. All rights reserved.</span>
        <div>
          <Link href="/contact">Privacy</Link>
          <Link href="/contact">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
