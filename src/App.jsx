import './assets/style/App.css';
import Nav from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/AboutUs/Aboutus';
import Map from './pages/MapPage';

function App() {

  return (
    <div className="app">
      <Nav/>
      <Header/>
      <About />
      <Map />
    </div>
  )
}

export default App
