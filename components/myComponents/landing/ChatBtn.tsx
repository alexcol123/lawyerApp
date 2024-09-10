
import Image from "next/image";
import Link from "next/link";

const ChatBtn = () => {
  return (

    <div className="fixed bottom-4 right-3 z-50 border border-primary-foreground rounded-full">


      <Link href="/assistant">
        <div className="flex items-center justify-center  bg-primary/90 w-fit  rounded-full text-primary-foreground gap-x-6 pl-4   ">

          <div className="flex flex-col p-1 font-semibold text-sm">
            <div className="text-white">
              Preguntas ?
            </div>
            <div className="text-white">
              <p>Habla con Maria</p>
            </div>

          </div>


          <div>
            <div className="text-white">
              <Image src="/images/carmen.jpg" width={50} height={50} alt="Picture of the author" className="rounded-full object-cover" />
            </  div>
          </div>
        </div>
      </Link>
    </div>


  )
}
export default ChatBtn