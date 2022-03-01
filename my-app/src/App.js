import "./App.css";


import { Chart } from "./Chart";
import { Main } from "./Main";
import { Details } from "./Details";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  
  return (
    <>
      <div className="App">
       
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:articleId" element={<Details />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
