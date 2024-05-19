import React from 'react';
import ContentLoader from 'react-content-loader';

const CardPlaceholder = () => (
  <ContentLoader
    speed={4}
    width={600}
    height={160}
    viewBox="0 0 600 160"
    backgroundColor="#dedede"
    foregroundColor="#ededed"
  >
    <rect x="0" y="0" rx="15" ry="15" width="600" height="150" />
  </ContentLoader>
);

export default CardPlaceholder;
