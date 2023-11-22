import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    restaurantItems: ReservationItem[]
}
const initialState:CartState = {restaurantItems: []}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            // ตรวจสอบว่ามีข้อมูลการจองอยู่แล้วหรือไม่
            const existingReservation = state.restaurantItems.find(
                (item) =>
                    item.location === action.payload.location 
            );
            // หากไม่มีข้อมูลการจองอยู่แล้วให้เพิ่มข้อมูล
            if (!existingReservation) {
                state.restaurantItems.push(action.payload);
            } else {
                // หากมีข้อมูลการจองอยู่แล้วให้ทำการแทนที่
                state.restaurantItems = [
                    ...state.restaurantItems.filter(
                        (item) =>
                            item.location !== action.payload.location 
                    ),
                    action.payload,
                ];
            }
        },
        removeReservation: (state, action: PayloadAction<ReservationItem>) => {
            // ให้ทำการลบข้อมูลการจองตาม location และ reserveDate ที่ระบุ
            state.restaurantItems = state.restaurantItems.filter(
                (item) =>
                    item.location !== action.payload.location ||
                    item.reserveDate !== action.payload.reserveDate
            );
        },
    },
})
export const {addReservation,removeReservation} = cartSlice.actions
export default cartSlice.reducer