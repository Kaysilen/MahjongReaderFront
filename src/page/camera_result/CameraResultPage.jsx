import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import { observer } from 'mobx-react';
import CardList from './CardList';
import clsx from 'clsx';
import {useCameraResultStore, CameraResultStoreProvider} from './store'

const useStyles = makeStyles({
    cardButton:{
        width : '2rem',
        height : '3.5rem',
        margin : '0.5vw'
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
                    key={"selectCardList"+idx}
                    src={image} 
                    alt="" 
                    onClick={()=>onBtnClicked(idx)}
                    />
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
                    key={"resultCardList"+orderIdx}
                    src={CardList[cardIdx]}
                    alt=""
                    onClick={()=>onBtnClicked(orderIdx)}/>
                );
            })}
        </div>
    )
});

const PrintLastCardArea = observer((props)=>{
    const store = useCameraResultStore();
    const style = useStyles();

    return (
        <div>
            {(store.lastCardIdx === -1)
            ? <div className={clsx(style.cardButton)}></div>
            :  <img className={clsx(style.cardButton)}
            src={CardList[store.lastCardIdx]}
            alt=""/> }
        </div>
    );
});

const ButtonArea = (props)=>{
    const store = useCameraResultStore();

    const onClickSendBtn = ()=>{store.onClickSendBtn();}

    return (
        <div>
            <Button
                varient="contained"
                color="primary"
                onClick={onClickSendBtn}>
                전송
            </Button>
            <Button
                varient="contained"
                color="primary"
                onClick={onClickSendBtn}>
                취소
            </Button>
        </div>
    );
}

const CameraResultPage = (props) => {
    return (
        <div className={props.className}>
            <CameraResultStoreProvider>
                <ManualSelectArea/>
                <PrintResultArea/>
                <PrintLastCardArea/>
                <ButtonArea/>
            </CameraResultStoreProvider>
        </div>
    );
}


export default CameraResultPage;
