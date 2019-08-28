import React from "react";
import { getNasaImg } from './nasaApiCall';

import "./App.css";

function App() {
  React.useEffect(() => {
    getNasaImg()
  }, []); 
  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' alt='nasa logo'></img>
        </div>
        <h1>PHOTO OF THE DAY</h1>
      </div>
    </div>
  );
}

export default App;
