import './App.css';
import Navbar from './components/Navbar/Navbar'
import Views from './views/Views'
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Views />
      <News />
    </div>
  );
}

export default App;
