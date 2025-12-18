"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Senha Mestra (Em produção, isso viria de uma variável de ambiente)
// Por enquanto, definimos uma fixa para o senhor testar.
const MASTER_TOKEN = "MARIANA-GOLD-2025"; 

export async function loginAction(formData: FormData) {
  const token = formData.get("token") as string;

  // 1. Verifica se o token está correto
  if (token !== MASTER_TOKEN) {
    return { success: false, message: "Token de acesso inválido." };
  }

  // 2. Cria o Cookie de Sessão (O "Crachá" de acesso)
  // HttpOnly: O JS do navegador não consegue ler (protege contra roubo)
  // Secure: Só trafega em HTTPS
  (await cookies()).set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 24 horas de validade
    path: "/",
  });

  // 3. Redireciona para o painel (ou recarrega a página)
  // Como já estamos no /adm, vamos apenas retornar sucesso para a UI atualizar
  return { success: true };
}

export async function logoutAction() {
  (await cookies()).delete("admin_session");
  redirect("/");
}
