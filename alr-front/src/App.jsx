import { useState } from 'react'
import PageHome from './components/PageHome'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <PageHome></PageHome>
    </>
  )
}

export default App
