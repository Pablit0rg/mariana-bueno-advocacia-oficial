// src/app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-5 text-center">
      <h1 className="text-5xl font-bold text-yellow-600 mb-4">
        VITÓRIA! 🚀
      </h1>
      <p className="text-xl text-gray-300">
        Pablo, o sistema foi restaurado com sucesso.
      </p>
      <div className="mt-8 p-4 border border-gray-700 rounded bg-gray-900">
        <p className="text-sm text-gray-400">Status do Projeto:</p>
        <p className="text-green-400 font-mono">ONLINE e SEGURO</p>
      </div>
    </div>
  );
}
