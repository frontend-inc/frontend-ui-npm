import React from 'react';
import { ActionType, DocumentType } from '../../../types';
type ArticleProps = {
    actions?: ActionType[];
    resource: DocumentType;
};
declare const Article: React.FC<ArticleProps>;
export default Article;
