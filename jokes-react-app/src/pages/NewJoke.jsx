import '../styling/NewJoke.css'

export default function NewJokeForm(){
    return(
        <div className='page-box'>
            <h1>Add a new Joke!</h1>
            <p>
                Make sure to make it extra funny.
            </p>
            <div className="form-box">
                <form action="http://localhost:3000/jokes/" method="post">
                <p>Setup
                    </p><input type="text" name="setup" required/>
                <p>Delivery</p><input type="text" name="delivery"required/>
                <p>Category</p><input type="text" name="category" required/>
                <br />
                <button type="submit">Add Joke</button>
                </form>
            </div>
        </div>
    );
}
