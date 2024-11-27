/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer } from "react"
import storeContext from "./storeContext"
import storeReducer from "./storeReducer"



const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, {
        userInfo: "",
        token: ""
    })
    return (
        <storeContext.Provider value={{store,dispatch}}>
            {
                children
            }

        </storeContext.Provider>
    )
}

export default StoreProvider