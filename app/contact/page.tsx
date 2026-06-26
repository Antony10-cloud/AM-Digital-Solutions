import { ServiceInquiry } from "@/components/ServiceInquiry";

export const metadata = {
  title: "Contact",
  description: "Contact AM Digital Solutions to request a website, mobile app, or digital system."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow"><span /> Contact</p>
        <h1>Tell me what you want to build.</h1>
        <p>
          Send the basics: what the business does, what you need built, and how people should contact or work with you online.
        </p>
      </section>
      <ServiceInquiry />
    </main>
  );
}
