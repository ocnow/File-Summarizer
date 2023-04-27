import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Application from './components/Application'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/app' element={<Application client={queryClient}/>}/>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
  )
}

export default App
