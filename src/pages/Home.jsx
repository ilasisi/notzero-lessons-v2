import { act, createContext, useReducer, useState } from "react";
import { GithubProfileSearch } from "../components/GithubProfileSearch";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { useBear } from "../store/useBear";

export const UserContext = createContext("John");

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return 0;
    }

    // if (action.type === "increment") {
    //     return state + 1;
    // } else if (action.type === "decrement") {
    //     return state - 1;
    // } else {
    //     return 0;
    // }
};

const Home = () => {
    const [name, setName] = useState("Doe");
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);

    const inc = () => {
        // setCount(count + 1);
        dispatch({ type: "increment", iteration: 10 });
    };

    const dec = () => {
        // setCount(count - 1);
        dispatch({ type: "decrement" });
    };

    const reset = () => {
        // setCount(0);
        dispatch({ type: "reset" });
    };

    // return (
    //     <div className="flex flex-col justify-center text-center gap-4">
    //         <p className="text-4xl">{count}</p>
    //         <div className="flex gap-3">
    //             <Button onClick={inc}>+</Button>
    //             <Button onClick={reset}>Reset</Button>
    //             <Button onClick={dec}>-</Button>
    //         </div>
    //     </div>
    // );

    // return (
    //     <UserContext.Provider value={name}>
    //         <Layout />
    //         <button onClick={() => setName("John")}>Set Name</button>
    //     </UserContext.Provider>
    // );

    return (
        <div>
            <BearCounter />
            <Controls />
        </div>
    );
    // return <GithubProfileSearch />;
};

function BearCounter() {
    const bears = useBear((state) => state.bears);
    return <h1>{bears} bears around here...</h1>;
}

function Controls() {
    const { increasePopulation, removeAllBears, updateBears } = useBear();
    return (
        <div>
            <button onClick={increasePopulation}>one up</button>
            <button onClick={removeAllBears}>remove all</button>
            <button onClick={() => updateBears(100)}>update bears</button>
        </div>
    );
}

export default Home;
