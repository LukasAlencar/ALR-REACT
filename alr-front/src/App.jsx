import { useState } from 'react'
import Navbar from './components/Navbar'
import PageHome from './components/PageHome'
import PageCalc from './components/PageCalc'
import PageDashboard from './components/PageDashboard'
import ReportPage from './components/ReportPage'
import MyProfilePage from './components/MyProfilePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PageRegister from './components/PageRegister'
import { AnimatePresence } from 'framer-motion'
import PageLogin from './components/PageLogin'
function App() {
  return (
    <>
      <AnimatePresence mode='wait'>
          <Router>
            <Routes>
                <Route path="/" element={<PageLogin/>}/>
                <Route path="/register" element={<PageRegister/>}/>
                <Route path="/home" element={<PageHome/>}/>
                <Route path="/calculadora" element={<PageCalc />}/>
                <Route path="/dashboards" element={<PageDashboard />}/>
                <Route path="/my-profile" element={<MyProfilePage />}/>
                <Route path="/reports" element={<ReportPage />}></Route>
                <Route path="/create-contract" element={<ReportPage />}></Route>
                <Route path="/edit-contract" element={<ReportPage />}></Route>
                <Route path="/view-enterprise" element={<ReportPage />}></Route>
                <Route path="/invite-users" element={<ReportPage />}></Route>
                <Route path="/users-list" element={<ReportPage />}></Route>
                <Route path="/create-cost-center" element={<ReportPage />}></Route>
                <Route path="/edit-cost-center" element={<ReportPage />}></Route>
                <Route path="/view-owners" element={<ReportPage />}></Route>
                <Route path="/view-licensing-rule" element={<ReportPage />}></Route>
                
            </Routes>
          </Router>
      </AnimatePresence>
    </>
  )
}

export default App
