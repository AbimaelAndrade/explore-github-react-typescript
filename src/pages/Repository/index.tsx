import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { GoRepoForked, GoIssueOpened, GoStar } from 'react-icons/go';

import CloneRepository from '../../components/CloneRepository';

import * as S from './styled';

import Logo from '../../assets/logo.svg';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  clone_url: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

interface Issues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    };

    loadData();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <Link to="/">
          <img src={Logo} alt="Github Explore" />
        </Link>

        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <S.RepositoryInfo>
          <header>
            <a href={repository?.owner.html_url} target="__black">
              <img
                src={repository?.owner.avatar_url}
                alt={repository?.full_name}
              />
            </a>

            <div>
              <a href={repository?.html_url} target="__black">
                <strong>{repository?.full_name}</strong>
              </a>
              <p>{repository?.description}</p>
              <CloneRepository repository={repository} />
            </div>
          </header>
          <ul>
            <li>
              <GoStar size={38} />
              <strong>{repository?.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <GoRepoForked size={38} />
              <strong>{repository?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <GoIssueOpened size={38} />
              <strong>{repository?.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
