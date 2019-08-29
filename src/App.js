import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components' 
import "./App.css";

function App() {

  const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;

    `;
  const LogoDiv = styled.div`
    > img {
      width: 10rem;
    }
  `;

  const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  const PicDiv = styled.div`
    margin-left: 2rem;
    > img{
      width: 100%;
    }  

    > p {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const AboutDiv = styled.div`
    margin-right: 2rem;
    margin-left: 2rem;
  `; 

  const [nasaPic, setNasaPic] = useState(""); 
  const [date, setDate] = useState("");
  const [explain, setExplain] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=ZyvT3UKrzUTVWizhQ9VK6CJjdG2gaGT9bTWExerM")
      .then((response) => {
        console.log(response);
        setNasaPic(response.data.hdurl);
        setDate(response.data.date);
        setExplain(response.data.explanation);
      })

      .catch(err => console.log(err));
  }, [setNasaPic, nasaPic, setDate, date, setExplain, explain]);

  return (
    <div>
      <HeaderDiv>
        <LogoDiv>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' alt='nasa logo'></img>
        </LogoDiv>
        <div>
          <h1>PHOTO OF THE DAY</h1>
        </div>
      </HeaderDiv>
      <ContentDiv>
        <PicDiv>
          <img src={nasaPic} alt="pic of the day"></img>
          <p>{date}</p>
        </PicDiv>
        <AboutDiv>
          <p>{explain}</p>
        </AboutDiv>
      </ContentDiv>
    </div>
  );
}

export default App;
