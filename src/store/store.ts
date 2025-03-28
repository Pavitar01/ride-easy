import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@/modules/auth/store/authSlice'

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'attendanceListReducer',
    'modalReducer',
    'attendanceListPaginationReducer',
  ],
}
const rootReducer = combineReducers({
  auth: authReducer,
})
const persistedReducer: any = persistReducer(persistConfig, rootReducer)

export const store = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
