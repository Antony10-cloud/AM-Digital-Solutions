import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Selected websites and digital products by AM Digital Solutions."
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero compact-hero projects-hero">
        <p className="eyebrow"><span /> Selected work</p>
        <h1>Built for the business behind the brief.</h1>
      </section>

      <section className="projects-showcase" aria-label="Selected projects">
        <article className="featured-project">
          <a
            className="project-preview"
            href="https://smi-premium-demo.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the SMI website"
          >
            <div className="project-browser">
              <div className="project-browser-bar">
                <span />
                <span />
                <span />
                <small>Project preview</small>
              </div>
              <div className="smi-preview">
                <div className="smi-preview-nav">
                  <strong>SMI</strong>
                  <span>ABOUT&nbsp;&nbsp;&nbsp; SERVICES&nbsp;&nbsp;&nbsp; PROJECTS</span>
                </div>
                <p>NAIROBI, KENYA</p>
                <h2>Building infrastructure<br />that moves Kenya <em>forward.</em></h2>
                <span className="smi-preview-link">VIEW OUR WORK&nbsp; ↗</span>
              </div>
            </div>
          </a>

          <div className="project-details">
            <div>
              <p className="project-number">01 / SMI</p>
              <h2>Stratlux Merchants &amp; Investment Company</h2>
            </div>
            <div className="project-summary">
              <p>
                A complete digital presence for a Kenyan civil engineering and construction company,
                bringing its capabilities, project experience, careers, and enquiries into one clear website.
              </p>
              <ul aria-label="Project scope">
                <li>Strategy &amp; structure</li>
                <li>Web design</li>
                <li>Development</li>
              </ul>
              <a href="https://smi-premium-demo.vercel.app" target="_blank" rel="noreferrer">
                View live website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>

        <article className="featured-project">
          <a
            className="project-preview stema-project-preview"
            href="https://stema-piustu-advent.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Stema Piustu Advent website"
          >
            <div className="project-browser">
              <div className="project-browser-bar">
                <span />
                <span />
                <span />
                <small>Project preview</small>
              </div>
              <div className="stema-preview">
                <div className="stema-preview-nav">
                  <strong>STEMA PIISTU ADVENT</strong>
                  <span>TRIPS&nbsp;&nbsp;&nbsp; TRANSPORT&nbsp;&nbsp;&nbsp; MOVING</span>
                </div>
                <p>DELIVERING BEYOND DISTANCE</p>
                <h2>Tours, transport and moving<br />handled with <em>calm precision.</em></h2>
                <span className="stema-preview-link">BOOK OR REQUEST A QUOTE&nbsp; ↗</span>
              </div>
            </div>
          </a>

          <div className="project-details">
            <div>
              <p className="project-number">02 / Stema Piustu Advent</p>
              <h2>A complete booking and operations platform.</h2>
            </div>
            <div className="project-summary">
              <p>
                A connected customer website, booking system, administration backend, and Android
                application for a Kenyan tours, transport, and moving company.
              </p>
              <ul aria-label="Project scope">
                <li>Booking website</li>
                <li>Admin backend</li>
                <li>Mobile application</li>
              </ul>
              <a href="https://stema-piustu-advent.vercel.app" target="_blank" rel="noreferrer">
                View live website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>

        <div className="projects-cta">
          <p>Have a project in mind?</p>
          <Link className="button button-primary" href="/contact">
            Start a conversation <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
