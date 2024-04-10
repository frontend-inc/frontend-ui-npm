import React from 'react';
import { CardsProps } from '../../components/web/cards/Cards';
import { SectionProps, HeadingProps } from '../../types';
type WebCardsProps = SectionProps & HeadingProps & CardsProps;
declare const WebCards: React.FC<WebCardsProps>;
export default WebCards;
