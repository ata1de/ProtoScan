import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App.tsx';
import { Sidebar } from './components/sidebar/index.tsx';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx';
import './index.css';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SidebarProvider>
          <Sidebar />
          <main className='flex flex-col w-full h-screen'>
            <ToastContainer />
            <SidebarTrigger />
            <App />
          </main>
        </SidebarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,

);