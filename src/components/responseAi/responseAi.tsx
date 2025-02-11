'use client'


export function ResponseAi({ message, response }: { message: string, response: string }) {
  return (
    <>
        <div className="w-full max-w-2xl mt-8 rounded-lg shadow-lg p-8 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-blue-500">Chat de análise de protocolo</h1>
        </div>

        <div className="flex w-full justify-between gap-4">
            <p className="text-gray-800 text-sm mt-8 ml-5">Pergunta: {message}</p>
            {response ? (
                <p className="text-gray-800 text-sm mt-16 mr-5">{response} :Resposta</p>
            ) : (
                <p className="text-gray-800 text-sm mt-16 mr-5">Aguardando resposta...</p>
            )}
        </div>
    </>
  );
}