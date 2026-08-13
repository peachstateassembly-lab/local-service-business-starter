export default function ServiceSchema({
  name,
  description,
  providerName,
  serviceAreas = [],
  url,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
