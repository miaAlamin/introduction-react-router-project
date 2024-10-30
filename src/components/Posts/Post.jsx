import { useLoaderData } from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";


const Post = () => {

    const post = useLoaderData();


    console.log(post)


    return (
        <div>
            <h3>post:{post.length}</h3>

            <div className="gridlayout">
                {
                    post.map(post=> <PostDetails key={post.id} post={post}></PostDetails>)
                }
            </div>
            
        </div>
    );
};

export default Post;