import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import toastReducer from "./toastSlices";

export const store = configureStore({
    reducer: {
        toasts: toastReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<any, any, AnyAction>;