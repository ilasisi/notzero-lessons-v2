export default function Button({ text, style = { backgroundColor: "red" } }) {
    return <button style={style}>{text}</button>;
}
