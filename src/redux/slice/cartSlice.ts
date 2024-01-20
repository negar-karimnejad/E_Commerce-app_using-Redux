import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductProps } from "../../types"


const initialState : ProductProps[] = []

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<ProductProps>)=>{
            if(state.findIndex(product=>product.id===action.payload.id)===-1){
                state.push(action.payload)
            }else{
              return state.map(item=>{
                return item.id === action.payload.id ? {...item , quantity : item.quantity + 1} : item
               })
            }
        },
        deleteFromCart:(state,action:PayloadAction<number>)=>{
            return state.filter(product=>product.id !== action.payload)
        }
    }
})

export const {addToCart,deleteFromCart} = cartSlice.actions
export default cartSlice.reducer