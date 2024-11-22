import React from 'react';
import { CardsProps } from '../../components/web/cards/Cards';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UICardsProps = SectionProps & HeadingProps & StackProps & CardsProps;
declare const UICards: React.FC<UICardsProps>;
export default UICards;
