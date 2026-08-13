export const metadata = {
  title: {
    default: "Local Service Business Starter",
    template: "%s | Local Service Business Starter",
  },
  description:
    "Open-source Next.js starter for local service businesses with local SEO, structured data, service pages, and reusable components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
