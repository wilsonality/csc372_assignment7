import { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";
import '../styling/Browse.css'

export default function Browse(){
    // page to view all jokes
    const [jokeCards, setJokeCards] = useState([]);

    // method to fetch the jokes
    async function getData() {
        const url = "http://localhost:3000/jokebook/jokes/";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const jokes = await response.json();
            console.log(jokes);
            
            // result is an array of jokes in json
            const cards = jokes.map((joke, index) => 
                <JokeCard setup={joke.setup} delivery={joke.delivery} category={joke.category} key={index} />
            );
            setJokeCards(cards);

            // hide the button
            document.getElementById("show-jokes-button").style.display = "none";
        } catch (error) {
            console.error("error");
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <h1>Look at all these jokes!</h1>
            <br></br>
            <h2>All Jokes</h2>
            <ul className="joke-card-box">
                {jokeCards}
            </ul>
        </>
    )
}