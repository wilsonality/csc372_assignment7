import '../styling/NewJoke.css'

export default function NewJokeForm(){

    async function handleSubmit(userIn){
        userIn.preventDefault();
        const url = "http://localhost:3000/jokebook/jokes/";
        
        // get values from the form that user sent in
        const newJoke = {
            setup: userIn.target.setup.value,
            delivery: userIn.target.delivery.value,
            category: userIn.target.category.value
        };
        console.log(newJoke);
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newJoke)
            });

            if (response.ok){
                alert("Joke added!");
                userIn.target.reset; // to clear the form
            }

        } catch(error){
            console.error('Error!!:', error)
        }
   
    }

    return(
        <div className='page-box'>
            <h1>Add a new joke!</h1>
            <p>
                Make sure to make it extra funny.
            </p>
            <div className="form-box">
                <form onSubmit={handleSubmit} method="post">
                    <p>Setup</p><input type="text" name="setup" required/>
                    <p>Delivery</p><input type="text" name="delivery"required/>
                    <p>Category</p><input type="text" name="category" required/>
                    <br />
                    <button type="submit">Add Joke</button>
                </form>
            </div>
        </div>
    );
}
