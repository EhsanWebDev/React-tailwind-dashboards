import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Boldo from './Dashboards/Boldo/Boldo';
import DigitalAgency from './Dashboards/DigitalAgency/DigitalAgency';
import GamesMode from './Dashboards/GamesMode/GamesMode';
import Home from './Homepage/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamesMode" element={<GamesMode />} />
          <Route path="/boldo" element={<Boldo />} />
          <Route path="/agency" element={<DigitalAgency />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
