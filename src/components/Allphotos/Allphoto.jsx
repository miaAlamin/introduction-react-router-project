import { useLoaderData } from "react-router-dom";
import PhotoDetails from "../PhotoDetails/PhotoDetails";



const Allphoto = () => {

    const photos = useLoaderData();

    return (
        <div>

            <h4>photos</h4>

            <div className="gridlayout">
            
            {
                photos.map(photos => <PhotoDetails key={photos.id} photos={photos}></PhotoDetails>)
            }
            </div>
        </div>
    );
};

export default Allphoto;