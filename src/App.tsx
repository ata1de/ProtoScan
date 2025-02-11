import { UploadArea } from './components/uploadArea/UploadArea'

function App() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <UploadArea />
        </div>
      </div>
    </div>
  )
}

export default App
