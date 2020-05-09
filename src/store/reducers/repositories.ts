import {
  ALL_REPOSITORIES,
  ADD_REPOSITORY,
  REMOVE_REPOSITORY,
} from '../../constants/ActionTypes';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const initialState: Repository[] = [];

export default function repositories(state = initialState, action: any) {
  switch (action.type) {
    case ALL_REPOSITORIES:
      return [...action.payload];
    case ADD_REPOSITORY:
      return [action.payload, ...state];
    case REMOVE_REPOSITORY:
      return state.filter(
        (repository) => repository.full_name !== action.payload,
      );
    default:
      return state;
  }
}
