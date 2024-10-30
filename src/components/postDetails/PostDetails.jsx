import { Link, useNavigate } from "react-router-dom";


const PostDetails = ({post}) => {

    const navigate = useNavigate()

    const style = {
        border: '1px solid gold',
        padding: '10px',
       borderRadius: '15px'
        
    }

    const DetailsHandle =  () => {
        navigate(`/post/${post.id}`)
        
    }

    return (

        
        <div style={style}>

            <h3>UserId:{post.userId}</h3>
            <p>Title: {post.title}</p>

            <Link to={`/post/${post.id}`}>show more</Link>
            <button onClick={DetailsHandle}>Details</button>
            


            
        </div>
    );
};

export default PostDetails;