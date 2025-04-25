import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient();

createRoot(document.getElementById('root')).render(
  /*<AuthContextProvider>
    <App/>
  </AuthContextProvider> */

  
<QueryClientProvider client={client}><App/></QueryClientProvider>
 
    ,
)
