import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style/App.css";
import HomePage from "./pages/HomePage";
import Quizziz from "./pages/Quizziz";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainPage Main={Quizziz} />} />
        <Route path="/" element={<MainPage Main={HomePage} />} />
        <Route path="/quizziz" element={<MainPage Main={Quizziz} />} />
      </Routes>
    </Router>
  );
};

export default App;
