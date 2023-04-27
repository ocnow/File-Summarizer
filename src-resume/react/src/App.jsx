import { useState } from 'react'
import './App.css'
import ResumeUploadComp from './components/ResumeUpload'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginComp from './components/Login'
import EntryComp from './components/EntryComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="appdiv" className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
            <Route path='/uploadResume' element={<ResumeUploadComp />} />
            <Route path='/login'  element={<LoginComp />}/>
            <Route path='/selectAction'  element={<EntryComp />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
