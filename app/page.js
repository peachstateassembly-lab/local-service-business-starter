export default function Home() {
  const services = [
    "Furniture Assembly",
    "TV Mounting",
    "Fitness Equipment Assembly",
    "Home Installation",
  ];

  return (
    <main>
      <section>
        <h1>Local Service Business Starter</h1>
        <p>
          A reusable open-source starter for local service businesses that need
          a fast, SEO-friendly, mobile-first website.
        </p>
      </section>

      <section>
        <h2>Example Services</h2>

        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Built for Local Businesses</h2>
        <p>
          Customize the services, business information, locations, calls to
          action, and structured data for your own company.
        </p>
      </section>
    </main>
  );
}
