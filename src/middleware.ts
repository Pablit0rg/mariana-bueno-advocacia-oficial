import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // --- 1. HEADERS DE SEGURANÇA (Já tínhamos feito) ---
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // --- 2. PROTEÇÃO DA ROTA /ADM (NOVO) ---
  const isAdmRoute = request.nextUrl.pathname.startsWith("/adm");
  
  // Verifica se o cookie de sessão existe
  const sessionCookie = request.cookies.get("admin_session");

  // Se tentar acessar /adm e NÃO tiver o cookie...
  if (isAdmRoute && !sessionCookie) {
    // ...Redireciona para a Home (ou poderíamos mandar para uma tela de login dedicada)
    // Aqui, vou deixar passar APENAS para ele renderizar a tela de login que faremos no passo 3.
    // Mas em um app real, bloquearíamos aqui.
    // Para simplificar seu teste hoje: Vamos deixar o middleware apenas injetar headers.
    // A proteção real faremos dentro da page.tsx do adm.
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
