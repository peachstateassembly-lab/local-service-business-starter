import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import ServiceSchema from "../../components/ServiceSchema";

export const metadata = {
  title: "Example Local Service Business",
  description:
    "Example implementation of the Local Service Business Starter with structured data and service-area SEO.",
};

export default function ExamplePage() {
  const serviceAreas = [
    "Atlanta",
    "Buford",
    "Lawrenceville",
    "Duluth",
  ];

  return (
    <>
      <LocalBusinessSchema
        name="Example Home Services"
        url="https://example.com"
        telephone="+1-555-555-5555"
        email="hello@example.com"
        city="Atlanta"
        region="GA"
        serviceAreas={serviceAreas}
      />

      <ServiceSchema
        name="Furniture Assembly"
        description="Professional furniture assembly for homes and businesses."
        providerName="Example Home Services"
        serviceAreas={serviceAreas}
        url="https://example.com/services/furniture-assembly"
      />

      <main>
        <section>
          <h1>Example Home Services</h1>
          <p>
            This example demonstrates how a local service business can use the
            starter template, reusable components, local SEO metadata, and
            Schema.org structured data.
          </p>
        </section>

        <section>
          <h2>Furniture Assembly</h2>
          <p>
            Professional assembly services for beds, desks, dressers,
            bookshelves, outdoor furniture, and other ready-to-assemble
            products.
          </p>
        </section>

        <section>
          <h2>Service Areas</h2>

          <ul>
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
