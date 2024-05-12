import React from "react";
import { FArticles } from '../../features/FArticles';
import { FTopStories } from "../../features/FTopStories";

export const Football: React.FC = () => {
    return (
        <div>
            <div>
                <h1>Football</h1>
                <FArticles type="football" limit={3} />
            </div>
            <div>
                <h1>Top Stories</h1>
                <FTopStories type="football" />
            </div>
        </div>
    )
}