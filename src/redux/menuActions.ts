import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuItem {
    name: string;
    items: Array<any>;
}

interface MenuState {
    menu: MenuItem[];
}

const initialState: MenuState = {
    menu: [],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<MenuItem[]>) => {
            state.menu = action.payload;
        }

    },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;