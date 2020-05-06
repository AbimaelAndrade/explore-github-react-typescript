import React, { useState, useEffect } from 'react';
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

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@githubExplore:repositories',
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubExplore:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleRepositories(repository: string): Promise<void> {
    if (!repository) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${repository}`);

      const repo = response.data;

      setRepositories([...repositories, repo]);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório.');
    }
  }

  return (
    <>
      <img src={Logo} alt="Logo Rockseat" />
      <H1>Explore repositóris no Github</H1>
      <FormSearch onSubmit={handleRepositories} hasError={!!inputError} />

      {inputError && <Error>{inputError}</Error>}

      <Repositories repositories={repositories} />
    </>
  );
};

export default Dashboard;
