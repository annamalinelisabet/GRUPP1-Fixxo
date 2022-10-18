import './App.css';
import Navbar from './components/Navbar/Navbar'
import Views from './views/Views'
import News from './components/News/News';
import Inspiration from './components/Inspiration/Inspiration';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Views />
      <News />
      <Inspiration />
    </div>
  );
}

export default App;
