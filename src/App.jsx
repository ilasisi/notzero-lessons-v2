import { useState } from "react";
import Button from "./components/Botton";

function App() {
    const [count, setCount] = useState(100);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <p className="text-2xl font-bold text-red-600">Hello Tailwind</p>
            <div style={{ display: "flex" }}>
                <Button text="Login" />
                <Button text="Register" style={{ backgroundColor: "yellow" }} />
                <Button text="Forgot Password" />
                <Button text="Login" />
                <button onClick={increment}>Increase</button>
                <p>{count}</p>
                <button onClick={decrement}>Decrease</button>
            </div>
        </div>
    );
}

export default App;
