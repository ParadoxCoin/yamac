type JsonLdProps = {
  type: 'LocalBusiness' | 'Organization' | 'WebSite' | 'Service';
  data: Record<string, any>;
};

export default function JsonLd({ type, data }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
