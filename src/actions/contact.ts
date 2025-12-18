"use server";

// Simula um atraso de rede (para ver o loading)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendContactEmail(formData: FormData) {
  // 1. Extrair dados do formulário com segurança
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    token: formData.get("token") as string, // Para honeypot (antispam)
  };

  // 2. Validação Básica (Server Side)
  if (!rawData.name || !rawData.email || !rawData.message) {
    return { success: false, message: "Por favor, preencha os campos obrigatórios." };
  }

  if (!rawData.email.includes("@")) {
    return { success: false, message: "E-mail inválido." };
  }

  // 3. Simulação de Envio (Aqui entraria o Nodemailer/Resend)
  try {
    // Simula espera de 2 segundos (processamento)
    await delay(2000);

    console.log("📨 E-mail Recebido no Servidor:", rawData);

    // SUCESSO
    return { 
      success: true, 
      message: "Solicitação enviada com sucesso! Em breve entraremos em contato." 
    };

  } catch (error) {
    console.error("Erro ao enviar:", error);
    return { 
      success: false, 
      message: "Erro ao enviar. Tente novamente mais tarde." 
    };
  }
}
