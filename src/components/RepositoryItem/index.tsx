import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FiChevronRight } from 'react-icons/fi';

import { handleRemoveRepository } from '../../store/actions';

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
  removeRepository: (full_name: string) => void;
}

const RepositoryItem: React.FC<Props> = ({ repository, removeRepository }) => (
  <S.BoxRepository>
    <S.RemoveRepository onClick={() => removeRepository(repository?.full_name)}>
      Remover
    </S.RemoveRepository>
    <S.Repository to={`/repositories/${repository?.full_name}`}>
      <img src={repository?.owner?.avatar_url} alt={repository?.owner.login} />
      <div>
        <strong>{repository?.full_name}</strong>
        <p>{repository?.description}</p>
      </div>
      <FiChevronRight size={20} />
    </S.Repository>
  </S.BoxRepository>
);

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  removeRepository: (full_name: string) =>
    dispatch(handleRemoveRepository(full_name)),
});

export default connect(null, mapDispatchToProps)(RepositoryItem);
