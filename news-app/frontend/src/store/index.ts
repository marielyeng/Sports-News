import { EnhancedStore, configureStore} from '@reduxjs/toolkit';
import { articleSlice } from "./ArticleSlice";

export const store: EnhancedStore = configureStore({
    reducer: {
        article: articleSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;