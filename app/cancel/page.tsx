"use client";

import { useEffect } from 'react';
import { Smartphone } from 'lucide-react';

export default function RedirectToApp() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.href = 'gamehub://';
        }
    }, []);

    const handleReturnToApp = () => {
        if (typeof window !== 'undefined') {
            window.location.href = 'gamehub://';
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-8 text-center space-y-6">
                <h1 className="text-white text-2xl">Redirecionando...</h1>
                <div className="flex justify-center">
                    <button
                        onClick={handleReturnToApp}
                        className="w-auto flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                        <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                        Voltar para o App
                    </button>
                </div>
            </div>
        </div>
    );
}