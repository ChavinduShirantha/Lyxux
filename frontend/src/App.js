import logo from './logo.svg';
import './App.css';
import DefaultLayout from "./view/common/DefaultLayout/DefaultLayout";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={DefaultLayout}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
