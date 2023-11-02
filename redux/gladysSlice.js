import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: [],
  userInfo: null,
  orderData: []
}

export const gladysSlice = createSlice({
  name: 'gladys',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Ensure that productData is always an array
      if (!Array.isArray(state.productData)) {
        state.productData = [];
      }
      const item = state.productData.find((item) => item._id === action.payload._id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQty: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id);
      if(item) {
        item.quantity ++;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id);
      if(item.quantity === 1){
          item.quantity === 1
      } else {
        item.quantity --;
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload);
       
    },
    resetCart: (state) => {
      state.productData = []
     },
     addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const { addToCart,
              increaseQty,
              decreaseQty,
              resetCart,
              deleteItem, 
              addUser,
              deleteUser,
              saveOrder,
              resetOrder } = gladysSlice.actions;

export default gladysSlice.reducer;
