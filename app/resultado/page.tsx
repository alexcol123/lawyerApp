

'use client';

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaSpinner,
  FaCheckCircle,
  FaHourglassHalf,
  FaEnvelopeOpenText,
  FaRocket,
  FaBell,
} from "react-icons/fa";

const StatusPage = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const statusMessages = [
    { 
      message: "Enviando tu aplicación...", 
      icon: <FaRocket className="animate-bounce text-blue-500 w-16 h-16" /> 
    },
    { 
      message: "Procesando tu solicitud...", 
      icon: <FaSpinner className="animate-spin text-blue-600 w-16 h-16" /> 
    },
    { 
      message: "Analizando tu información...", 
      icon: <FaHourglassHalf className="animate-pulse text-yellow-600 w-16 h-16" /> 
    },
    { 
      message: "Verificando detalles finales...", 
      icon: <FaEnvelopeOpenText className="text-gray-500 w-16 h-16" /> 
    },
    { 
      message: "Recibiendo resultados...", 
      icon: <FaBell className="animate-ping text-red-500 w-16 h-16" /> 
    },
    { 
      message: "¡Tus resultados están listos!", 
      icon: <FaCheckCircle className="text-green-600 w-16 h-16" /> 
    },
  ];

  useEffect(() => {
    if (isComplete) return;

    const interval = setInterval(() => {
      setStatusIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= statusMessages.length) {
          setIsComplete(true);
          clearInterval(interval);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  const currentStatus = statusMessages[statusIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <Card className="shadow-xl border border-gray-300 rounded-2xl max-w-lg w-full bg-white">
        <CardHeader className="border-b p-6 bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center rounded-t-2xl">
          <CardTitle className="text-center text-xl font-bold text-blue-700 animate-pulse">
            {currentStatus.message}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="flex items-center justify-center h-28 mt-4">
            {isComplete ? (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <Link href="/resultado/ver">Ver resultado</Link>
              </Button>
            ) : (
              currentStatus.icon
            )}
          </div>
          {!isComplete && (
            <p className="text-center text-lg mt-4 text-gray-700">
              Verificando si cumples con los requisitos…
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusPage;