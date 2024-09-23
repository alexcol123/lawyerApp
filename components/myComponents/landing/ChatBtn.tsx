// import Image from "next/image";
// import Link from "next/link";
// import { FaComments } from "react-icons/fa";

// const ChatBtn = () => {
//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <Link href="/assistant">
//         <div className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
//           {/* Icono de chat */}
//           <FaComments className="w-6 h-6 mr-3" />

//           {/* Texto del botón */}
//           <div className="flex flex-col text-left">
//             <span className="font-semibold text-sm">¿ Preguntas?</span>
//             <span className="font-semibold text-sm">¿Sobre Familias Unidas?</span>
//             <span className="text-xs">Habla con María (AI)</span>
//           </div>

//           {/* Imagen de María */}
//           <Image
//             src="/images/carmen.jpg"
//             width={40}
//             height={40}
//             alt="María, tu asistente virtual"
//             className="rounded-full ml-3 object-cover"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ChatBtn;

import Image from "next/image";
import Link from "next/link";
import { FaComments } from "react-icons/fa";

const ChatBtn = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="/assistant">
        <div className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-3 py-2 rounded-full shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          {/* Icono de chat */}
          <FaComments className="w-5 h-5 mr-2" />

          {/* Texto del botón */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-xs">¿Preguntas?</span>
            <span className="text-xs">Habla con María</span>
          </div>

          {/* Imagen de María */}
          <Image
            src="/images/carmen.jpg"
            width={30}
            height={30}
            alt="María, tu asistente virtual"
            className="rounded-full ml-2 object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default ChatBtn;