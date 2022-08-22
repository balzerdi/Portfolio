import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { AppDispatch, store } from "./store";

export interface IToast {
    list: {
        label: string
        id: string
    }[]
}

export const toastSlice = createSlice({
    name: 'toasts',
    initialState: {
        list: []
    } as IToast,
    reducers: {
        add: (state, action) => {
            const id = v4()
            const item = { label: action.payload, id: id }
            state.list.push(item)
        },
        remove: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload)

            if (index >= 0) {
                state.list.splice(index, 1)
            }
        }
    }
})

export const { add, remove } = toastSlice.actions

export default toastSlice.reducer

export const addToast = (label: string) => {
    return async (dispatch: AppDispatch) => {
        if (store.getState().toasts.list.length <= 6) {
            dispatch(add(label+" Nr: "+store.getState().toasts.list.length))
        }
    }
}