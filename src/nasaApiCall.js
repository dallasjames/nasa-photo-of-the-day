import axios from "axios";

export function getNasaImg() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(console.log('good'))
        .catch(console.log('not good'))
}