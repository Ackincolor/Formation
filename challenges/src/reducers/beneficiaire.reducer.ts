import { AnyAction } from "@reduxjs/toolkit";

const initialState = { list: [{iban:"FR7611111111111"}]};

export default function beneficiaireReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        default:
            return state;
    }
}