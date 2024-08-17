import React from 'react';
import { SimpleCardsProps } from '../../components/web/cards/SimpleCards';
import { SectionProps, HeadingProps } from '../../types';
type UICardsProps = SectionProps & HeadingProps & SimpleCardsProps;
declare const UICards: React.FC<UICardsProps>;
export default UICards;
