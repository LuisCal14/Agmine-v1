import './assets/style/App.css';
import HomePage from './pages/HomePage';
import Province from './pages/Maps/ProvincesPage';
import RegionE from './pages/Maps/RegionsEstePage';
import RegionN from './pages/Maps/RegionsNortePage';
import RegionS from './pages/Maps/RegionSurPage';
import { BrowserRouter as Router } from 'react-router-dom'
import Games from './container/Games/Games';


function App() {

  return (
    <Router>
    <div className="app">
      <HomePage/>
      <Province/>
      <RegionE />
      <RegionN />
      <RegionS />
      <Games />
    </div>
    </Router>
  )
}

export default App
