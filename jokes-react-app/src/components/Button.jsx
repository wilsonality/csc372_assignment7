import "../styling/Button.css"

export default function Button({ action, name, onClick }) {
    return (
            <button onClick={(e) => { onClick?.(e); action();}}>{name}</button>
    )
}