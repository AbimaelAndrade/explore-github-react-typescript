import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { fetchRepositories, handleAddRepository } from '../../store/actions';

import api from '../../services/api';

import H1 from '../../components/H1';
import FormSearch from '../../components/FormSearch';
import Repositories from '../../components/Repositories';
import Error from '../../components/Error';

import Logo from '../../assets/logo.svg';

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
  getRepositories: () => void;
  addRepository: (repository: Repository) => void;
}

interface State {
  repositories: Repository[];
}

const Dashboard: React.FC<Props> = ({
  repositories,
  getRepositories,
  addRepository,
}) => {
  const [inputError, setInputError] = useState('');

  function handleRemoveError() {
    setTimeout(() => setInputError(''), 3000);
  }

  useEffect(() => {
    getRepositories();
  }, []);

  async function handleRepositories(repository: string): Promise<void> {
    if (!repository) {
      setInputError('Digite o autor/nome do repositório.');
      handleRemoveError();
      return;
    }
    try {
      const existRepository = repositories.find(
        (repo) => repo.full_name === repository,
      );

      if (existRepository) {
        setInputError('O repositório já foi cadastrado.');
        handleRemoveError();
        return;
      }

      const response = await api.get<Repository>(`repos/${repository}`);

      const repo = response.data;

      addRepository(repo);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório.');
      handleRemoveError();
    }
  }

  return (
    <>
      <img src={Logo} alt="Logo Rockseat" />
      <H1>Explore repositórios no Github</H1>
      <FormSearch onSubmit={handleRepositories} hasError={!!inputError} />

      {inputError && <Error>{inputError}</Error>}

      <Repositories repositories={repositories} />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getRepositories: () => dispatch(fetchRepositories()),
  addRepository: (repository: Repository) =>
    dispatch(handleAddRepository(repository)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
