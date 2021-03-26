import { makeStyles } from '@material-ui/core/styles';
import CardList from './CardList';
import clsx from 'clsx';

const useStyles = makeStyles({
    cardButton:{
        width : '60px',
        height : '100px'
    }
});


const CameraResultPage = (props) => {

    const style = useStyles();

    return (

        <div>
            {CardList.map((image, idx)=> {
                return (
                    <img className={clsx(style.cardButton)} src={image} alt="" />
                );
            })}
        </div>
    );
}


export default CameraResultPage;
