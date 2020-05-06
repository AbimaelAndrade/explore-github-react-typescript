import React from 'react';

import * as S from './styled';

import RepositoryItem from '../RepositoryItem';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Props {
  repositories: Repository[];
}

const Repositories: React.FC<Props> = ({ repositories }) => (
  <S.Repositories>
    {repositories.map((repository, index) => (
      <RepositoryItem key={`repository-${index}`} repository={repository} />
    ))}
  </S.Repositories>
);

export default Repositories;
