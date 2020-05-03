import React from 'react';

import * as S from './styled';

import RepositoryItem from '../RepositoryItem';

const Repositories: React.FC = () => (
  <S.Repositories>
    <RepositoryItem />
    <RepositoryItem />
    <RepositoryItem />
    <RepositoryItem />
  </S.Repositories>
);

export default Repositories;
