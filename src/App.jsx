import './assets/style/App.css';
import HomePage from './pages/HomePage';
import MapsC from './container/Map/MapsContainer';
import MapsM from './container/MapMenu/MapsMenu';
import Province from './pages/Maps/ProvincesPage';
import RegionE from './pages/Maps/RegionsEstePage';
import RegionN from './pages/Maps/RegionsNortePage';
import RegionS from './pages/Maps/RegionSurPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Games from './container/Games/Games';


function App() {

  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/games' element={<Games />}></Route>
        <Route path='/mapmenu' element={<MapsM/>}></Route>
        <Route path='/maps' element={<MapsC/>}/>
        <Route path='/provinces' element={<Province />} />
        <Route path='/regionescibao' element={<RegionN />} />
        <Route path='/regionessur' element={<RegionS />}/>
        <Route path='/regioneseste' element={<RegionE />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
