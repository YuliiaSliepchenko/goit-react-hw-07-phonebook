import { fetchContacts, contactAdd, deleteContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

// import { FirstState } from './const';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
};
// const initialValue = { contacts: FirstState };
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [contactAdd.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [contactAdd.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [contactAdd.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;

//     contactAdd: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.contacts.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.contacts.splice(index, 1);
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const { contactAdd, deleteContact } = contactsSlice.actions;
// export const contactsReduser = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
