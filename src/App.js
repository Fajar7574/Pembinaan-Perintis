import React from 'react';
//import styles from './table.css';
import Home from './component/Home.jsx';
import L2018 from './component/L2018.jsx';
import L2019 from './component/L2019.jsx';
import L2020 from './component/L2020.jsx';
import L2021 from './component/L2021.jsx';
import P2018 from './component/P2018.jsx';
import P2019 from './component/P2019.jsx';
import P2020 from './component/P2020.jsx';
import P2021 from './component/P2021.jsx';
import C2018 from './component/C2018.jsx';
import C2019 from './component/C2019.jsx';
import C2020 from './component/C2020.jsx';
import C2021 from './component/C2021.jsx';
import S2018 from './component/S2018.jsx';
import S2019 from './component/S2019.jsx';
import S2020 from './component/S2020.jsx';
import S2021 from './component/S2021.jsx';
import M2018 from './component/M2018.jsx';
import M2019 from './component/M2019.jsx';
import M2020 from './component/M2020.jsx';
import M2021 from './component/M2021.jsx';

import NotFound from './component/NotFound.jsx';
import NavBar from './component/NavBar.jsx';
import {RemoveScroll} from 'react-remove-scroll';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div style={{width:"100%",height: "100vh",overflow:'hidden'}}>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/laporan-2018" element={<L2018/>} />
        <Route exact path="/laporan-2019" element={<L2019/>} />
        <Route exact path="/laporan-2020" element={<L2020/>} />
        <Route exact path="/laporan-2021" element={<L2021/>} />
        <Route exact path="/pembinaan-2018" element={<P2018/>} />
        <Route exact path="/pembinaan-2019" element={<P2019/>} />
        <Route exact path="/pembinaan-2020" element={<P2020/>} />
        <Route exact path="/pembinaan-2021" element={<P2021/>} />
        <Route exact path="/capaian-2018" element={<C2018/>} />
        <Route exact path="/capaian-2019" element={<C2019/>} />
        <Route exact path="/capaian-2020" element={<C2020/>} />
        <Route exact path="/capaian-2021" element={<C2021/>} />
        <Route exact path="/status-dan-beasiswa-2018" element={<S2018/>} />
        <Route exact path="/status-dan-beasiswa-2019" element={<S2019/>} />
        <Route exact path="/status-dan-beasiswa-2020" element={<S2020/>} />
        <Route exact path="/status-dan-beasiswa-2021" element={<S2021/>} />
        <Route exact path="/mentoring-2018" element={<M2018/>} />
        <Route exact path="/mentoring-2019" element={<M2019/>} />
        <Route exact path="/mentoring-2020" element={<M2020/>} />
        <Route exact path="/mentoring-2021" element={<M2021/>} />
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
