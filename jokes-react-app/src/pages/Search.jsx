import { useState } from 'react'
import Button from '../components/Button'

export default function browseJokes(){
    // const [searchTerm, setSearchTerm] = useState();
    const baseURL = `http://localhost:3000/jokes/`;

    function searchJoke(term){
        // Add your search logic here
        console.log('Searching for:', term);
    }

    return(
        // <Button action={searchJoke} name="search!"/>
        <>
            <h1>Look at all these jokes!</h1>
        </>
    );
}