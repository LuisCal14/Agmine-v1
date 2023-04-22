import './assets/style/App.css';
import Nav from './components/Nav';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <div className="app">
      <Nav/>
      <AboutUs/>
    </div>
  )
}

export default App
