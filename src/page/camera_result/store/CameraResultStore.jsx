import React from 'react'
import {makeAutoObservable} from 'mobx'
import ResultS from 'service/result'

/**
 * 
 */
class CameraResultStore {
    constructor(){
        makeAutoObservable(this);
    }

    // integer list
    cardList = [];
    lastCardIdx = -1;

    pushCard = (cardIdx)=>{
        let check = 0;

        for(let i in this.cardList)
        {
            if(this.cardList[i] === cardIdx)
                check++;
        }

        if(check > 3 || this.cardList.length > 13)
            return false;
        else
        {
            this.cardList.push(cardIdx);
            this.cardList.sort((a,b)=>a-b); // 오름차순 Sort

            if(this.cardList.length === 14)
                this.lastCardIdx = cardIdx;


            return true;
        }
    }

    deleteCard = (listIdx)=>{
        this.cardList.splice(listIdx,1);
        this.lastCardIdx = -1;
    }

    onClickSendBtn = ()=>{
        let service = ResultS.getInstance();
        
        let mahjongJson = {
            man:"",
            pin:"",
            sou:"",
            honors:"",
            winTile:{
                type:"",
                value:""
            }
        }

        if(this.lastCardIdx === -1)
        {
            console.log("In OnClickSendBtn - Last Card Error!");
        }
        else
        {
            for(let i in this.cardList)
            {
                let nowCardIdx = this.cardList[i] % 9 + 1;
                let typeIdx = this.cardList[i]/9;
                console.log(typeIdx);
                switch(Math.floor(typeIdx))
                {
                case 0: // 0~8 man
                    mahjongJson.man += String(nowCardIdx);
                    break;
                case 1: // 9~17 pin
                    mahjongJson.pin += String(nowCardIdx);
                    break;
                case 2: // 18~26 sou
                    mahjongJson.sou += String(nowCardIdx);
                    break;
                case 3: // 26~ honors
                    mahjongJson.honors += String(nowCardIdx);
                    break;
                default:
                    console.log("In OnclickSendBtn - CardList Error")
                    break;
                }
            }

            let lastCardValue = this.lastCardIdx % 9 + 1;
            let typeIdx = this.lastCardIdx/9;
            mahjongJson.winTile.value = String(lastCardValue);
            switch(Math.floor(typeIdx))
            {
            case 0: // 0~8 man
                mahjongJson.winTile.type = "man";
                break;
            case 1: // 9~17 pin
                mahjongJson.winTile.type = "pin";
                break;
            case 2: // 18~26 sou
                mahjongJson.winTile.type = "sou";
                break;
            case 3: // 26~ honors
                mahjongJson.winTile.type = "honors";
                break;
            default:
                console.log("In OnclickSendBtn - Last Card Idx Error")
                break;
            }
        }

        console.log(mahjongJson)

        service.sendForAnalysisCard(mahjongJson);
    }

}
export default CameraResultStore;

const CameraResultStoreContext = React.createContext(null);
let storeInstance = new CameraResultStore();


// Context provider for TestPStore
export function CameraResultStoreProvider({children}) {
    return (
        <CameraResultStoreContext.Provider value={storeInstance}>
            {children}
        </CameraResultStoreContext.Provider>
    )
}

// custom hooks for store use
export const useCameraResultStore = () => React.useContext(CameraResultStoreContext)
