import React from 'react';
type ArticleProps = {
    resource: {
        title: string;
        image: {
            url: string;
        };
        description: string;
    };
};
declare const Article: React.FC<ArticleProps>;
export default Article;
