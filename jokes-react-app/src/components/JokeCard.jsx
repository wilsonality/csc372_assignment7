import '../styling/JokeCard.css'
export default function JokeCard({ setup, delivery, category }){
    return (
        <li className="joke">
            <p>
                <strong>Setup:</strong> {setup}
            </p>
            <p>
                <strong>Delivery:</strong>{delivery}
            </p>
            <p>
                <strong>Category:</strong>{category}
            </p>
        </li>
    );
}