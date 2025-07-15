import { useState } from 'react'
import { useAtom } from 'jotai'
import { countAtom } from './atoms/counter'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <div className='text-3xl font-bold text-blue-500'>
        {count}
      </div>
      <button onClick={() => {setCount(count+1)}}>+1</button>
    </>
  )
}

export default App
