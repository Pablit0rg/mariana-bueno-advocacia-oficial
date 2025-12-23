// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">
        O Site Está Vivo! 🚀
      </h1>
      <p className="text-gray-400 max-w-md">
        Se você está vendo isso, a configuração da Vercel está perfeita.
        Agora podemos trazer os componentes de volta.
      </p>
    </div>
  );
}