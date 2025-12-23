export function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService", // Define que é um serviço jurídico
    "name": "Mariana Bueno Advocacia",
    "image": "https://advmarianabueno.com.br/logo-header.png-removebg-preview.png", // URL da logo (ajustaremos no deploy final)
    "description": "Advocacia de Alta Complexidade especializada em Direito de Família e Sucessões. Atendimento humanizado e estratégico.",
    "url": "https://advmarianabueno.com.br",
    "telephone": "+5541999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Endereço Comercial", // Pode ser genérico se for sigiloso
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284, // Coordenadas de Curitiba (Centro)
      "longitude": -49.2733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$", // Indica serviço premium/alto padrão
    "sameAs": [
      "https://www.instagram.com/adv.marianabueno/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
