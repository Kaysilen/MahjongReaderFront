import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import CardList from './CardList';
import clsx from 'clsx';
import {useCameraResultStore, CameraResultStoreProvider} from './store'

const useStyles = makeStyles({
    cardButton:{
        width : '60px',
        height : '100px'
    }
});


const ManualSelectArea = (props) =>{

    const store = useCameraResultStore();
    const style = useStyles();

    const onBtnClicked = (idx)=>{store.pushCard(idx);}

    return (
        <div>
            {CardList.map((image, idx)=> {
                return (
                    <img className={clsx(style.cardButton)} 
                    src={image} 
                    alt="" 
                    onClick={()=>onBtnClicked(idx)}/>
                );
            })}
        </div>
    );
}

const PrintResultArea = observer((props)=>{
    const store = useCameraResultStore();
    const style = useStyles();

    const onBtnClicked = (idx)=>{store.deleteCard(idx)}

    return(
        <div>
            {store.cardList.map((cardIdx, orderIdx)=>{
                return (
                    <img className={clsx(style.cardButton)}
                    src={CardList[cardIdx]}
                    alt=""
                    onClick={()=>onBtnClicked(orderIdx)}/>
                );
            })}
        </div>
    )
});

const CameraResultPage = (props) => {

    return (
        <CameraResultStoreProvider>
            <ManualSelectArea/>
            <PrintResultArea/>
        </CameraResultStoreProvider>
    );
}


export default CameraResultPage;
