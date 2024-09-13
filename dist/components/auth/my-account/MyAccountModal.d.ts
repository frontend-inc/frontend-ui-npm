import React from 'react';
import { MetafieldType } from '../../../types';
type MyAccountModalProps = {
    enableTeams?: boolean;
    enableStripe?: boolean;
    metafields?: MetafieldType[];
};
declare const MyAccountModal: React.FC<MyAccountModalProps>;
export default MyAccountModal;
