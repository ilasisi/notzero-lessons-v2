import { useEffect, useState } from "react";

export const Counter = () => {
    // const [count, setCount] = useState(100);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [data, setData] = useState({ count: 100, name: "James" });
    const [posts, setPosts] = useState(["Post 1", "Post 2"]);
    const [post, setPost] = useState();
    const [user, setUser] = useState({ name: "", email: "" });

    const increase = () => {
        setData((prev) => ({ ...prev, count: prev.count + 1 }));
    };

    const changeName = () => {
        setData((prev) => ({ ...prev, name: "Doe" }));
    };

    const addPost = () => {
        setPosts((posts) => [...posts, post]);
    };

    function handleClick() {
        setName("Robin");
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <pre>{JSON.stringify(user)}</pre>
            <input
                className="border"
                type="email"
                placeholder="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                className="border"
                type="text"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                name="email"
                className="border"
                type="email"
                placeholder="email"
                onChange={handleChange}
            />
            <input
                name="name"
                className="border"
                type="text"
                placeholder="name"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Click</button>
            {posts.map((post, index) => (
                <p key={index}>{post}</p>
            ))}
            <input
                className="border"
                type="text"
                placeholder="Enter post"
                onChange={(event) => setPost(event.target.value)}
            />
            <button onClick={addPost}>Add Post</button>
            <p>{data.name}</p>
            <button onClick={changeName}>Change name</button>
            <p className="font-bold text-3xl">{data.count}</p>
            <button onClick={increase}>Increase</button>
        </div>
    );
};
