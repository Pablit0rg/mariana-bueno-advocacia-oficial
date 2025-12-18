"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MASTER_TOKEN = "MARIANA-GOLD-2025"; 

export async function loginAction(formData: FormData) {
  const token = formData.get("token") as string;

  if (token !== MASTER_TOKEN) {
    return { success: false, message: "Token de acesso inválido." };
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 24 horas
    path: "/",
  });

  return { success: true };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/");
}
