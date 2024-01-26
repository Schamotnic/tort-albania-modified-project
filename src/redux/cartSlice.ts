import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// разработчик!  у данного приложения отсутсвует полноценный бекенд, по этому в стейте 
// хранятся не ссылки на товары а данные о них - по сути копии без фото и описания.

interface CartItem {
    id: string;
    name: string;
    portionSize: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialCartState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const newItem: CartItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }

            localStorage.setItem('cartState', JSON.stringify(state));
        },
        // deleteDish:(state,action: PayloadAction<{ id: string }>) => {
        //     console.log(state.items)
        //     state.items = state.items.filter(item => item.id !== action.payload.id)
        // },
            removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                state.items.splice(index, 1);
            }

            localStorage.setItem('cartState', JSON.stringify(state));
        },
        decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find(item => item.id === action.payload.id);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem('cartState', JSON.stringify(state));
        },
        incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find(item => item.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem('cartState', JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart, decrementQuantity, incrementQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
