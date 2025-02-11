import { Send } from 'lucide-react';
import { useState } from 'react';
import { TextArea } from './components/textArea/index';
import { UploadArea } from './components/uploadArea/UploadArea';

function App() {
  const [isAllowedToSend, setIsAllowedToSend] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-lg shadow-lg p-8">
          <UploadArea setIsAllowedToSend={setIsAllowedToSend}/>
        </div>
      </div>

      <footer className="my-4 w-[40%] mt-auto">
				<TextArea
					placeholder="Escreva sua mensagem sobre o protocolo..."
					iconRight={<Send size={20} color="blue" />}
          iconDisabled={!isAllowedToSend}
				/>
			</footer>
    </div>
  )
}

export default App
