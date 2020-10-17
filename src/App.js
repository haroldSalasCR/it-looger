import React, {useEffect, Fragment} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';

import AddBtn  from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

function App() {
  useEffect(()=>{
    // Inicialization of Materialize
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>      
  );
}

export default App;