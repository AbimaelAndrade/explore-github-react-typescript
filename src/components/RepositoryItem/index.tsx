import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as S from './styled';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Props {
  repository: Repository;
}

const RepositoryItem: React.FC<Props> = ({ repository }) => (
  <S.Repository to={`/repositories/${repository.full_name}`}>
    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
    <div>
      <strong>{repository.full_name}</strong>
      <p>{repository.description}</p>
    </div>
    <FiChevronRight size={20} />
  </S.Repository>
);

export default RepositoryItem;
