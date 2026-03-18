import { useEffect, useRef, useState } from "react";
import { Input } from "./Input";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    return posts;
};

export const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await fetchPosts();

            setPosts(posts);
        };

        fetchData();
    }, []);

    return (
        <div id="div">
            <div>
                <Input ref={inputRef} />
            </div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
            {posts.map((post) => (
                <p key={post.title}>{post.title}</p>
            ))}
        </div>
    );
};
