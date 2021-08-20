import { createSlice } from '@reduxjs/toolkit';

const photo = createSlice({
    name: 'photos',  // domain name of action type
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            return state.filter(image => image.title !== action.payload.title);
        },
        editPhoto: (state, action) => {
            const indexPhoto = state.findIndex(image => image.title === action.payload.title);
            if (indexPhoto >= 0) {
                state[indexPhoto] = action.payload;
            }
        }
    }
});

const { reducer, actions } = photo;

export const photoSelector = state => state.photos;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
