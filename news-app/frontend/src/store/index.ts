import { EnhancedStore, configureStore} from '@reduxjs/toolkit';

export const store: EnhancedStore = configureStore({
    reducer: {

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;