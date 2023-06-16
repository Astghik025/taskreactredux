import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./slices/employees/employeesSlice";
import { ignoreEmptyEmployee } from "./middlewares/employees";
import { tasksReducer } from "./slices/tasks/tasksSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const rootReducer = combineReducers({
    employees: employeesReducer,
    tasks: tasksReducer
})

const persistConfig = {
    key: 'testtask',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewares) =>{
        return [...getDefaultMiddlewares({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }), ignoreEmptyEmployee]
    }
})

export const persistor = persistStore(store)

export default store