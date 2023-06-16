import { useState } from 'react'
import PageDashBoard from './components/PageDashboard'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <PageDashBoard></PageDashBoard>
    </>
  )
}

export default App
