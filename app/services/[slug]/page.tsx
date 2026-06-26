import { notFound } from "next/navigation";
import { ServiceInquiry } from "@/components/ServiceInquiry";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="service-hero">
        <p className="eyebrow"><span /> {service.eyebrow}</p>
        <h1>{service.headline}</h1>
        <p>{service.intro}</p>
      </section>

      <section className="service-detail-grid">
        <div className="detail-block">
          <p className="section-kicker">What You Get</p>
          <h2>A finished product with a clear job.</h2>
          <ul>
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block muted-block">
          <p className="section-kicker">Build Process</p>
          <h2>Simple, focused, and easy to follow.</h2>
          <ol>
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceInquiry serviceName={service.title} prompt={service.formPrompt} />
    </main>
  );
}
