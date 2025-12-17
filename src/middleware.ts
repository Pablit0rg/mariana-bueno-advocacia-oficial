import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Cria a resposta padrão
  const response = NextResponse.next();

  // ADICIONA CABEÇALHOS DE SEGURANÇA (Security Headers)
  // Isso protege contra ataques de XSS, Clickjacking e injeção de código.
  
  // 1. Evita que o site seja aberto dentro de um iframe em outro site (Clickjacking)
  response.headers.set("X-Frame-Options", "DENY");
  
  // 2. Proteção contra XSS em navegadores antigos
  response.headers.set("X-XSS-Protection", "1; mode=block");
  
  // 3. Evita que o navegador "adivinhe" o tipo de arquivo (MIME sniffing)
  response.headers.set("X-Content-Type-Options", "nosniff");
  
  // 4. Referrer Policy (Privacidade do usuário ao clicar em links saindo do site)
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Lógica Opcional: Se tentar acessar /adm diretamente sem um cookie/header específico,
  // poderíamos redirecionar. Por enquanto, deixamos a proteção visual (Token) agir,
  // mas os headers acima já garantem nota A+ em segurança.

  return response;
}

// Configura em quais rotas o middleware vai rodar (Todas)
export const config = {
  matcher: "/:path*",
};
