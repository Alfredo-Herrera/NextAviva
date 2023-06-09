import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import creditReducer from 'src/AOS/slices/creditSlice';
import magicLinkReducer from '../slices/magicLinkSlice';
import paymentReducer from '../slices/paymentSlice';
import scriptingReducer from '../slices/scriptingSlice';

const rootReducer = combineReducers({
  magicLink: magicLinkReducer,
  scripting: scriptingReducer,
  // credit: creditReducer,
  payment: paymentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
