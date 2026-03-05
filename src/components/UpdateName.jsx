import { useState } from "react";

export const UpdateName = () => {
    const [data, setData] = useState({
        name: "James",
        email: "email@email.com",
    });
    // const [name, setName] = useState("James");
    // const [email, setEmail] = useState("email@email.com");
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData({ ...data, [name]: value });
    };

    return (
        <div>
            {show && <p>Show</p>}
            {show ? <p>Show</p> : <p>Not Show</p>}
            <button onClick={() => setShow(!show)}>Toggle</button>
            <br />
            <p>Name: {data.name}</p>
            <p>Email:{data.email}</p>
            <input
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
            />
            <input
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
            />
        </div>
    );
};
