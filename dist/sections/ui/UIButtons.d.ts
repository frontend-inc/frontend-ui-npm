import React from 'react';
import { ButtonActionsProps } from '../../components/ui/buttons/ButtonActions';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIButtonsProps = SectionProps & HeadingProps & StackProps & ButtonActionsProps;
declare const UIButtons: React.FC<UIButtonsProps>;
export default UIButtons;
