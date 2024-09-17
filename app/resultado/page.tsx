

'use client'

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegAddressCard } from "react-icons/fa";


const StatusPage = () => {
  const [status, setStatus] = useState("Submitiendo aplicación");
  const [isComplete, setIsComplete] = useState(false);

  const statusMessages = [
    "Submitiendo aplicación",
    "Analizando",
    "Aplicación analizada",
    'Reciviendo respuesta',
    "Completado"
  ];

  useEffect(() => {
    if (isComplete) return; // Skip the interval if process is complete

    const interval = setInterval(() => {
      setStatus((prevStatus) => {
        const currentIndex = statusMessages.indexOf(prevStatus);
        const nextIndex = (currentIndex + 1) % statusMessages.length;

        console.log('nextIndex', nextIndex)
        console.log("statusMessages lenght", statusMessages.length)

        if (nextIndex === (statusMessages.length - 1)) {

          setIsComplete(true); // Mark as complete when all messages have been shown
          clearInterval(interval); // Clear interval
          return 'Ver resultado'; // Show final message
        }

        return statusMessages[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isComplete]);

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-background dark:to-muted flex items-center justify-center p-6">
      <Card className="shadow-2xl border border-border rounded-xl max-w-xl w-full bg-card dark:bg-card">
        <CardHeader className="border-b border-border flex flex-col items-center justify-center">
          <CardTitle className="text-center text-2xl text-primary animate-pulse capitalize ">
            {status}
          </CardTitle>

          <div className=" flex items-center juctify-center  h-28">
            {isComplete ?
              <Button variant={'default'} asChild >
                <Link href="/resultado/ver">Ver resultado</Link>
              </Button>
              : <FaRegAddressCard className="w-20 h-20 animate-pulse" />
            }
          </div>

        </CardHeader>

      </Card>
    </div>
  );
};

export default StatusPage;