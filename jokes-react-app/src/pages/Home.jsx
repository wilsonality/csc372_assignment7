import '../styling/Home.css'
import Button from '../components/Button';
import Random from './Random.jsx';
import Categories from '../components/Categories.jsx';

export default function Home(){
    return(
        <div>
            <h1>Wilson's Jokes</h1>
            <div>
                <p>
                    Welcome to the home page.
                </p>
            </div>
            <Random/>
            <Categories/>
        </div>

    );
}
