import { Link, useLoaderData, useNavigate } from "react-router-dom";


const DetaisPhoto = () => {


    const photo = useLoaderData();
    const Navigate = useNavigate();

    const {id, title, albumId} = photo;

    const  photoBackHandle = ()=>{

        Navigate(-1)

    }

    return (
        <div>
            <h2>Id:{id}</h2>
            <h2>title:{title}</h2>

           <button onClick={photoBackHandle}> Back</button>
            
        </div>
    );
};

export default DetaisPhoto;