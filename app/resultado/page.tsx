'use client'

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaSpinner,
  FaCheckCircle,
  FaHourglassHalf,
  FaEnvelopeOpenText,
  FaSmile
} from "react-icons/fa";

const StatusPage = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const statusMessages = [
    { message: "Enviando aplicación", icon: <FaSpinner className="animate-spin w-16 h-16" /> },
    { message: "Analizando", icon: <FaHourglassHalf className="animate-pulse w-16 h-16" /> },
    { message: "Aplicación analizada", icon: <FaEnvelopeOpenText className="w-16 h-16" /> },
    { message: "Recibiendo respuesta", icon: <FaSmile className="w-16 h-16" /> },
    { message: "¡Completado!", icon: <FaCheckCircle className="text-green-500 w-16 h-16" /> },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="shadow-2xl border rounded-3xl max-w-md w-full bg-white">
        <CardHeader className="border-b flex flex-col items-center justify-center p-6">
          <CardTitle className="text-center text-xl text-gray-800 animate-pulse capitalize">
            {currentStatus.message}
          </CardTitle>

          <div className="flex items-center justify-center h-28 mt-4">
            {isComplete ? (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white text-lg py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <Link href="/resultado/ver">Ver resultado</Link>
              </Button>
            ) : (
              currentStatus.icon
            )}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default StatusPage;