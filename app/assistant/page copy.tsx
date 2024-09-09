'use client';

import { Message, useAssistant as useAssistant, } from 'ai/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const roleToColorMap: Record<Message['role'], string> = {
  system: 'red',
  user: 'gray',
  function: 'blue',
  tool: 'purple',
  assistant: 'green',
  data: 'orange',
};

export default function Chat() {
  const {
    status,
    messages,
    input,
    setInput,
    submitMessage,
    handleInputChange,
    error,
    stop,
  } = useAssistant({ api: '/api/assistant' });

  const [viewBtns, setviewBtns] = useState(true)

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   setInput('Hola quiero Informacion Sobre el programa de familias unidas');
  //   // await 1 second before sending the message
  //   submitMessage()

  // }, []);

  useEffect(() => {
    messages.length ? setviewBtns(false) : setviewBtns(true)

  }, [messages]);



  useEffect(() => {
    if (status === 'awaiting_message') {
      inputRef.current?.focus();
    }

  }, [status]);


  const askQuestion = (txt: string) => {
    setInput(txt),
      submitMessage()
    // setviewBtns(false)
  }



  return (
    <div className="flex flex-col justify-around w-full max-w-md  mx-auto h-[80vh] min-h-[80vh] bg-primary/10 p-4  ">



      <div className='flex  flex-col  justify-end  overflow-hidden   p-2  m-4'>
        {error != null && (
          <div className="relative px-6 py-4 text-white bg-red-500 rounded-md">
            <span className="block sm:inline">
              Error: {(error).toString()}
            </span>
          </div>
        )}

        <div className=''>
          {messages.map((m: Message) => (



            <div

              key={m.id}
              className="whitespace-pre-wrap text-sm  "
              style={{ color: roleToColorMap[m.role] }}
            >

              {m.role === 'assistant' ? <div className='flex gap-2 items-center  '>
                <Image src={'/images/carmen.jpg'} alt="avatar" width={50} height={50} className='rounded-full object-cover h-10 w-10' />
                <strong className='capitalize'>{`${m.role}: `}</strong>

              </div>
                : <div className='flex gap-2 items-center  '>
                  <Image src={'/images/maria.jpg'} alt="avatar" width={50} height={50} className='rounded-full object-cover h-10 w-10' />
                  <strong className='capitalize'>Tu</strong>

                </div>
              }

              {m.role !== 'data' && m.content}
              {/* {m.role === 'data' && (
                  <>
                    {(m.data as any).description}
                    <br />
                    <pre className={'bg-gray-200'}>
                      {JSON.stringify(m.data, null, 2)}
                    </pre>
                  </>
                )} */}
              <br />
              <br />
            </div>
          ))}
        </div>

        {status === 'in_progress' && (
          // <div className="w-full h-8 max-w-md p-2 mb-8 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse" />
          <div className='animate-pulse  bg-primary text-primary-foreground text-center capitalize'>
            agente  escribiendo...
          </div>
        )}
      </div>


      <form onSubmit={submitMessage} className='flex flex-col gap-4  mt-20 p-4'>
        <input
          ref={inputRef}
          disabled={status !== 'awaiting_message'}
          className=" w-full max-w-md p-2  border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Enviar ?"
          onChange={handleInputChange}
        />


        {
          viewBtns && <div className="grid grid-cols-2 gap-4 ">

            <button
              onClick={() => askQuestion('Quiero informacion sobre el programa de familias unidas, soy casado con un ciudadano')}
              type='submit'
              className='border bg-muted p-3'> Quiero informacion soy   <span className='font-semibold text-primary '>Casado </span> de un ciudadano
            </button>

            <button
              onClick={() => askQuestion('Quiero informacion sobre el programa de familias unidas, soy hijastro de  un ciudadano americano')}
              type='submit'
              className='border bg-muted p-3'> Quiero informacion soy   <span className='font-semibold text-primary '>Hijastro </span> de un ciudadano
            </button>





            <button
              onClick={() => askQuestion('Que es el programa ( Mantener a las Familias Juntas )')}
              type='submit'
              className='border bg-muted p-3'> Que es el programa   <span className='font-semibold text-primary '> Mantener a las Familias Juntas </span>
            </button>

            <button
              onClick={() => askQuestion('Quiero informacion sobre el programa de familias unidas, si mi cónyuge ha fallecido, sigo siendo elegible')}
              type='submit'
              className='border bg-muted p-3'> Si mi cónyuge ha fallecido.  <span className='font-semibold text-primary '>¿sigo siendo elegible  </span>
            </button>


          </div>
        }



        <button
          className=" w-full max-w-md p-2    text-white bg-primary text-primary-foreground rounded-lg"
          onClick={stop}
        >
          Enviar
        </button>
      </form>



    </div>
  );
}
