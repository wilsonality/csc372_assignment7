import '../styling/Random.css'
import JokeCard from '../components/JokeCard';
import { useState, useEffect } from 'react';


export default function Random(){
    const [randomJoke, setRandomJoke] = useState();

    async function loadRandomJoke() {
            const url = "http://localhost:3000/jokebook/jokes/";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
    
                const jokes = await response.json();
                console.log(jokes);

                // select a random int from zero to jokes.length
                let min = 0;
                let max = jokes.length - 1;
                let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
                
                // result is an array of jokes in json
                const cards = jokes.map((joke, index) => 
                    <JokeCard setup={joke.setup} delivery={joke.delivery} category={joke.category} key={index} />
                );
                setRandomJoke(cards[randomInt]);
    
                // hide the button
                document.getElementById("show-jokes-button").style.display = "none";
            } catch (error) {
                console.error("error");
                console.log(error.message);
            }
        }

    useEffect(() => {
        loadRandomJoke();
    }, []);

    return(
        <div>
            <div className='random-joke-box'>
                {randomJoke}
            </div>
        </div>
    );
}
