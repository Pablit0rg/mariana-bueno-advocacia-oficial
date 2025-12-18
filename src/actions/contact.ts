"use server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    token: formData.get("token") as string,
  };

  if (!rawData.name || !rawData.email || !rawData.message) {
    return { success: false, message: "Por favor, preencha os campos obrigatórios." };
  }

  if (!rawData.email.includes("@")) {
    return { success: false, message: "E-mail inválido." };
  }

  try {
    // Simula envio
    await delay(2000);
    console.log("📨 E-mail Recebido no Servidor:", rawData);
    return { success: true, message: "Solicitação enviada com sucesso! Em breve entraremos em contato." };

  } catch (error) {
    console.error("Erro ao enviar:", error);
    return { success: false, message: "Erro ao enviar. Tente novamente mais tarde." };
  }
}
