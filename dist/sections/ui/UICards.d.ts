import React from 'react';
import { CardsProps } from '../../components/web/cards/Cards';
import { SectionProps, HeadingProps } from '../../types';
type UICardsProps = SectionProps & HeadingProps & CardsProps;
declare const UICards: React.FC<UICardsProps>;
export default UICards;
