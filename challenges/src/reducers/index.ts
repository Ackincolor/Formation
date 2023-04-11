import { combineReducers } from "@reduxjs/toolkit";
import beneficiaireReducer from "./beneficiaire.reducer";
import AlerteReducer from "./alerte.reducer";

const reducers = combineReducers({
    AlerteReducer,
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;