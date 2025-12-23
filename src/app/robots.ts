import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mariana-bueno-advocacia-oficial.vercel.app";

  return {
    rules: {
      userAgent: "*", // Todos os robôs (Google, Bing, etc.)
      allow: "/",     // Podem acessar tudo
      disallow: "/private/", // (Exemplo) Não acessar pasta privada
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Onde está o mapa
  };
}
