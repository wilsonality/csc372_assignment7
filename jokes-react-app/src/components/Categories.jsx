import { useEffect, useState } from "react";
import JokeCard from "./JokeCard";
import '../styling/Browse.css'
import Button from "./Button";

export default function Categories(){
    // page to view all jokes
    let [jokesByCat, setJokesByCat] = useState([]);
    let [categories, setCategories] = useState([]);

    async function searchJokeByCat(){
            const term = document.querySelector(".selected").textContent;
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

    async function getCategories(){
        const url = "http://localhost:3000/jokebook/jokes/category";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const cats = await response.json();
            console.log(cats);

            const options = cats.map((item, index) => 
                <Button name={item.category} action={searchJokeByCat} onClick={toggleSelect}/>
            );
            setCategories(options);
        } catch (error) {
            console.error("error");
            console.log(error.message);
        }
    }

    function toggleSelect(event){
        // clear previous selections
        if (document.querySelector(".selected")){
            document.querySelector(".selected").classList.remove("selected");
        }
        const clicked = event.target;
        clicked.classList.add("selected");
        console.log(clicked.textContent);

    }

    useEffect(() => {
        getCategories();
    }, []);

    return(
        <>
            <h1>Look at all these jokes!</h1>
            <br></br>
            <h2>Pick a Category</h2>
            {categories}
            <ul className="joke-card-box">
                {jokesByCat}
            </ul>
        </>
    )
}