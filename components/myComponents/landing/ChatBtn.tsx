import Image from "next/image";
import Link from "next/link";
import { FaComments } from "react-icons/fa";

const ChatBtn = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/assistant">
        <div className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          {/* Icono de chat */}
          <FaComments className="w-6 h-6 mr-3" />

          {/* Texto del botón */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm">¿Tienes Preguntas?</span>
            <span className="text-xs">Habla con María</span>
          </div>

          {/* Imagen de María */}
          <Image
            src="/images/carmen.jpg"
            width={40}
            height={40}
            alt="María, tu asistente virtual"
            className="rounded-full ml-3 object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default ChatBtn;