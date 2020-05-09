import * as types from '../../constants/ActionTypes';
import { Dispatch } from 'redux';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface State {
  repositories: Repository[];
}

export const completeRepositories = (repositories: Repository[]) => ({
  type: types.ALL_REPOSITORIES,
  payload: repositories,
});

export const addRepository = (repository: Repository) => ({
  type: types.ADD_REPOSITORY,
  payload: repository,
});

export const removeRepository = (full_name: string) => ({
  type: types.REMOVE_REPOSITORY,
  payload: full_name,
});

export const fetchRepositories = () => {
  return (dispatch: Dispatch) => {
    const repositories = localStorage.getItem('@githubExplore:repositories');

    if (repositories) {
      const repos = JSON.parse(repositories);
      dispatch(completeRepositories(repos));
    }
  };
};

export const handleAddRepository = (repository: Repository) => {
  return (dispatch: Dispatch, getState: () => State) => {
    const state = getState();

    const newState = [repository, ...state.repositories];
    localStorage.setItem(
      '@githubExplore:repositories',
      JSON.stringify(newState),
    );

    dispatch(addRepository(repository));
  };
};

export const handleRemoveRepository = (full_name: string) => {
  return (dispatch: Dispatch, getState: () => State) => {
    const state = getState();

    const newState = state.repositories.filter(
      (repo: Repository) => repo.full_name !== full_name,
    );

    localStorage.setItem(
      '@githubExplore:repositories',
      JSON.stringify(newState),
    );

    dispatch(removeRepository(full_name));
  };
};
