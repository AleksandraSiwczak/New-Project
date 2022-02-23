import "./App.css";

import { Chart } from "./Chart";
import { Main } from "./Main";
import { Details } from "./Details";

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
   <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/details" element={<Details />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    
    </BrowserRouter>
  </>
  );
}

export default App;
