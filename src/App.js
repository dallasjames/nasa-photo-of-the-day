import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [nasaPic, setNasaPic] = useState(""); 
  const [date, setDate] = useState("");
  const [explain, setExplain] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        console.log(response);
        setNasaPic(response.data.hdurl);
        setDate(response.data.date);
        setExplain(response.data.explanation);
      })

      .catch(err => console.log(err));
  }, [setNasaPic, nasaPic, setDate, date, setExplain, explain]);

  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' alt='nasa logo'></img>
        </div>
        <div className="headText">
          <h1>PHOTO OF THE DAY</h1>
        </div>
      </div>
      <div className="content">
        <div className="pic">
          <img src={nasaPic} alt="pic of the day"></img>
          <p>{date}</p>
        </div>
        <div className="about">
          <p>{explain}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
