import React from 'react'
import {makeAutoObservable} from 'mobx'

/**
 * 
 */
class CameraResultStore {
    constructor(){
        makeAutoObservable(this);
    }

    // integer list
    cardList = [];

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
            return true;
        }
    }

    deleteCard = (listIdx)=>{
        this.cardList.splice(listIdx,1);
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
