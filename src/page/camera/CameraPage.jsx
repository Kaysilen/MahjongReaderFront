import { makeStyles } from '@material-ui/core/styles';
import Camera from 'react-html5-camera-photo';

const useStyles = makeStyles({

});


const CameraPage = (props) => {

    const onHandleTakePhoto = (dataUri) =>{
        console.log(dataUri);
    }


    return (
        <div>
            Camera Page!
            <Camera onTakePhoto = {onHandleTakePhoto}/>
        </div>
    );
}


export default CameraPage;
