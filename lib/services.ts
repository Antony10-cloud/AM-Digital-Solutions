export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  headline: string;
  summary: string;
  intro: string;
  outcomes: string[];
  process: string[];
  formPrompt: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    eyebrow: "Website Development",
    headline: "A website that explains your business clearly and makes the next step obvious.",
    summary:
      "For businesses that need a professional online home, stronger trust, and a better way to turn visitors into enquiries.",
    intro:
      "AM Digital Studio builds websites that feel clean, credible, and easy to use. The goal is not just to put pages online. The goal is to help someone understand what you do, believe you can help, and contact you without confusion.",
    outcomes: [
      "A responsive website structured around your services and customer questions.",
      "Clear content flow for home, services, projects, and contact pages.",
      "Fast loading pages with polished visuals and strong mobile presentation.",
      "Direct enquiry paths through WhatsApp, email, or a simple contact form."
    ],
    process: [
      "Clarify the offer, audience, and pages needed.",
      "Design the layout and writing direction before development.",
      "Build, test, refine, and prepare the site for launch."
    ],
    formPrompt: "Tell me what the website should help your business achieve."
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    eyebrow: "Mobile App Development",
    headline: "Mobile apps designed around real users, clear screens, and useful workflows.",
    summary:
      "For ideas that need to move beyond a website into a focused app experience people can use repeatedly.",
    intro:
      "A good app should make something easier: booking, ordering, learning, reporting, managing, or communicating. AM Digital Studio helps shape the idea into a practical product, then builds the screens and flows around the people who will use it.",
    outcomes: [
      "User flows that make the app simple to understand.",
      "Clean interface design for the key screens and actions.",
      "Mobile-first development for Android-ready experiences.",
      "Launch support and improvements after the first version."
    ],
    process: [
      "Map the app idea, users, and must-have features.",
      "Design the main screens and confirm the user journey.",
      "Develop the app, test core flows, and prepare for release."
    ],
    formPrompt: "Share the app idea, the users, and the main actions it should support."
  },
  {
    slug: "digital-systems",
    title: "Digital Systems",
    shortTitle: "Digital Systems",
    eyebrow: "Digital Systems",
    headline: "Simple digital systems for teams that need less manual work and more control.",
    summary:
      "For businesses that need forms, dashboards, internal tools, booking flows, or request systems that fit the way they work.",
    intro:
      "Not every business problem needs a huge platform. Sometimes you need a focused system that collects the right information, keeps work organized, and helps your team respond faster. AM Digital Studio builds practical systems around the workflow first.",
    outcomes: [
      "Custom request forms, dashboards, or admin workflows.",
      "Better organization for enquiries, files, records, or client requests.",
      "Clear handoff between customer action and business response.",
      "A system that can grow as the process becomes clearer."
    ],
    process: [
      "Understand the current workflow and where time is being lost.",
      "Design the simplest version that solves the actual problem.",
      "Build, test with real use cases, and refine the flow."
    ],
    formPrompt: "Describe the workflow you want to simplify or automate."
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
