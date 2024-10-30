import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Postss = () => {

const posts = useLoaderData();
const navigage = useNavigate()
const {postId} = useParams();

console.log(postId)

const goBackHandle = ()=>{

    navigage(-1)

}

    return (
        <div>

            <h2>post id: {posts.id}</h2>
            <p>Title: {posts.title}</p>
            <p>Details: {posts.body}</p>

            <button onClick={goBackHandle}>go Back</button>

            
        </div>
    );
};

export default Postss;