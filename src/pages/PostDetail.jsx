import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((post) => setPost(post));
    }, []);

    if (!post) return;

    return (
        <div>
            <p className="text-2xl font-bold">{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;
