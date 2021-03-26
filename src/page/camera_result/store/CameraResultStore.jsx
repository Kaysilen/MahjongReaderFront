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

    }

    deleteCard = (listIdx)=>{

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
