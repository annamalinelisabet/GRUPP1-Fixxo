import './App.css';
import Navbar from './components/Navbar/Navbar'
import SupportInfo from './components/Support&Info/SupportInfo'
import Views from './views/Views'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Views />
      <SupportInfo />
    </div>
  );
}

export default App;
