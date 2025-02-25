import Item from "../items";
import './styles.scss';
import { getPosts } from "../../api/api";
import { useEffect,useState } from "react";

const MainBody = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
                console.log(posts)
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, []);
    
    return (
        <div className="main-body">
            {posts.length > 0 ? (
                posts.map(post => (
                    <Item title={post.title} content={post.content} upvotes={post.upvotes} downvotes={post.downvotes}
                        community={post.community.name} author={post.author.username}
                    />
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    )
}

export default MainBody;