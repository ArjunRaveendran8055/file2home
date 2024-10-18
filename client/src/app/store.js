import {configureStore} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistStore,persistReducer} from "redux-persist"
import userReducer from "../components/features/users/userSlice"


const persistConfig={
    key:'taskRoot',
    storage,
}


const persistedUser=persistReducer(persistConfig,userReducer)
const store=configureStore({
    reducer:{
        user:persistedUser,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false},),
})
const persistor=persistStore(store)
export {store,persistor}