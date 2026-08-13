export default function LocalBusinessSchema({
  name,
  url,
  telephone,
  email,
  city,
  region,
  country = "US",
  serviceAreas = [],
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: region,
      addressCountry: country,
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
