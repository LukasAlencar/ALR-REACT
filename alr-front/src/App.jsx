import { useState } from 'react'
import Navbar from './components/Navbar'
import PageHome from './components/PageHome'
import PageCalc from './components/PageCalc'
import PageDashboard from './components/PageDashboard'
import ReportPage from './components/ReportPage'
import MyProfilePage from './components/MyProfilePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PageRegister from './components/PageRegister'
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<PageRegister/>}/>
            <Route path="/calculadora" element={<PageCalc />}/>
            <Route path="/dashboards" element={<PageDashboard />}/>
            <Route path="/my-profile" element={<MyProfilePage />}/>
            <Route path="/reports" element={<ReportPage />}>
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
