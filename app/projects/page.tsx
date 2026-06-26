import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Selected projects from AM Digital Solutions."
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow"><span /> Projects</p>
        <h1>Selected work will live here when the real projects are ready.</h1>
        <p>
          This page is intentionally clean for now. Once the approved projects are available, each case study can show the goal,
          the build, and the final result without using placeholder work.
        </p>
        <Link className="button button-primary" href="/contact">
          Discuss a project <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
