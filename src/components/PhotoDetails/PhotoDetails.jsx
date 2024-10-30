import { Link } from "react-router-dom";


const PhotoDetails = ({photos}) => {

    // eslint-disable-next-line react/prop-types
    const {albumId, id, title, url, thumbnailUrl} = photos;

    const style = {
        border: '1px solid gold',
        padding: '10px',
       borderRadius: '15px'
       
        
    }
    return (
        <div style={style}>

            <h3>{title}</h3>
           
            <img  width='300px' src={url} alt="img"/>
            <Link to={`/photo/${id}`}>Details</Link>
            
        </div>
    );
};

export default PhotoDetails;