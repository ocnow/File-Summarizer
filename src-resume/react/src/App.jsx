import { useState } from 'react'
import './App.css'
import ResumeUploadComp from './components/ResumeUpload'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginComp from './components/Login'
import EntryComp from './components/EntryComp'
import SideApp from './Sidebar/Dashboard/page'
import UploadPage from './Sidebar/Upload/UploadPage'
import UploadIndex from './Sidebar/Upload/UploadIndex'
import SearchIndex from './Sidebar/Search/SearchIndex'
import SettingIndex from './Sidebar/Setting/SettingIndex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="appdiv" className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
            {/* <Route path='/uploadResume' element={<ResumeUploadComp />} />
            <Route path='/login'  element={<LoginComp />}/>
            <Route path='/selectAction'  element={<EntryComp />}/> */}
            <Route path='/dashboard'  element={<SideApp />}/>
            <Route path='/upload'  element={<UploadIndex />}/>
            <Route path='/search'  element={<SearchIndex />}/>
            <Route path='/settings'  element={<SettingIndex />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
