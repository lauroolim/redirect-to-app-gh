"use client";

import { useEffect, useState } from 'react';
import { CheckCircle, Smartphone } from 'lucide-react';

export default function PaymentSuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'gamehub://';
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReturnToApp = () => {
    window.location.href = 'gamehub://';
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-8 text-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <CheckCircle className="w-16 h-16 text-green-500/30 mx-auto" />
          </div>
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto relative" />
        </div>

        <h1 className="text-3xl font-bold text-white">
          Pagamento Confirmado!
        </h1>

        <p className="text-lg text-gray-300">
          Seu pagamento foi processado com sucesso.
        </p>

        <div className="text-sm text-gray-400">
          Redirecionando para o app em {countdown} segundos...
        </div>

        <button
          onClick={handleReturnToApp}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
        >
          <Smartphone className="w-5 h-5" />
          Voltar para o App
        </button>

        <p className="text-sm text-gray-400">
          Se o app não abrir automaticamente, clique no botão acima
        </p>
      </div>
    </div>
  );
}
