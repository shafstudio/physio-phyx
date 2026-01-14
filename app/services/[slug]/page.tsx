import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceContent from "@/components/services/ServiceContent";
import Footer from "@/components/Footer";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - PhysioLife",
    };
  }

  return {
    title: `${service.subtitle} - PhysioLife`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar variant="solid" />
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        heroImage={service.heroImage}
        duration={service.duration}
        insurance={service.insurance}
        category={service.category}
      />
      <ServiceContent service={service} />
      <Footer />
    </>
  );
}
