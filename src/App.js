import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Views from './views/Views'
import Popup from './components/Popup/Popup';

function App() {
  
const [timedPopup, setTimedPopup] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setTimedPopup(true)
  }, 3000)
}, [])

  return (
    <div className="App">
      <div>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup>
      </div>
      <Navbar />
      <Views />
    </div>
  );
}

export default App;