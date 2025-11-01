import { useState } from 'react'
import Button from '../components/Button'
import JokeCard from '../components/JokeCard';
import '../styling/Search.css'

export default function searchJokes(){
    // page to search a joke
    const [searchTerm, setSearchTerm] = useState();
    let [jokeFound, setJokeFound] = useState();
    let [jokesByCat, setJokesByCat] = useState([]);

    async function searchJokeById(){
        const term = document.querySelector("input").value;
        if (!term){return;}
        const url = "http://localhost:3000/jokebook/jokes/id/" + term;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Response status: ${response.status}");
                    }
        
                    const joke = await response.json();
                    console.log(joke);
                    
                    // result is a single matching joke
                    setJokeFound(<JokeCard setup={joke.setup} delivery={joke.delivery} category={joke.category} />);
        
                    // hide the button
                } catch (error) {
                    console.error("error");
                    console.log(error.message);
                }
    }

    async function searchJokeByCat(){
        const term = document.querySelector("input").value;
        if (!term){return;}
        const url = "http://localhost:3000/jokebook/jokes/category/" + term;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Response status: ${response.status}");
                    }
        
                    const jokes = await response.json();

                    // result is an array of jokes in json
                    const cards = jokes.map((joke, index) => 
                        <JokeCard setup={joke.setup} delivery={joke.delivery} category={joke.category} key={index} />
                    );
                    setJokesByCat(cards);
        
                    // hide the button
                } catch (error) {
                    console.error("error");
                    console.log(error.message);
                }
    }

    return(
        <>
            <h1>Want a joke in particular?</h1>
            <input type="text" placeholder="Search for a joke" autoFocus/>
            <br />
            <Button action={searchJokeById} name="Search By ID" />
            <Button action={searchJokeByCat} name="Search By Category" />
            <br/>
            <ul className='joke-card-box'>
                {jokeFound}
                {jokesByCat}
            </ul>
        </>
    );
}