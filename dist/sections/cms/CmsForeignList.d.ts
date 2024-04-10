import React from 'react';
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignCollectionProps = SectionProps & HeadingProps & ForeignCollectionProps;
declare const CmsForeignCollection: React.FC<CmsForeignCollectionProps>;
export default CmsForeignCollection;
