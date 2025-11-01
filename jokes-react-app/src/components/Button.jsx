import "../styling/Button.css"

export default function Button({ action, name }) {
    return (
            <button onClick={action}>{name}</button>
    )
}