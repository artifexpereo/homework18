import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  const [time, setTime] = useState('')
  return (
    <Timer time={time} autostart={false} setTime={setTime}/>
  )
    
}

export default App;
