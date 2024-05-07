import React from "react";
import { FArticles } from '../../features/FArticles';
import { FTopStories } from "features/FTopStories";

export const Basketball: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Basketball</h1>
                <FArticles type="basketball" limit={3} />
            </div>
            <div>
                <h1>Top Stories</h1>
                <FTopStories type="basketball" />
            </div>
        </div>
    )
}