import * as fromUsersActions from './users.action';
import { UserModel } from 'src/app/users/models';

export class UsersState {
  users: UserModel[];
  selectedUser: UserModel;
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: UsersState = {
  users: null,
  selectedUser: null,
  loading: false,
  loaded: true,
  error: '',
};

export function usersReducer(
  state: UsersState = initialState,
  action: fromUsersActions.UsersActions
): UsersState {
  switch (action.type) {
    case fromUsersActions.LOAD_USERS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromUsersActions.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action['payload'],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromUsersActions.LOAD_USERS_FAIL: {
      return {
        ...state,
        users: [],
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromUsersActions.LOAD_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromUsersActions.LOAD_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action['payload'],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromUsersActions.LOAD_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromUsersActions.UPDATE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromUsersActions.UPDATE_USER_SUCCESS: {
      const updatedUser = action['payload'];
      const users = [...state.users].map(user => user.id === updatedUser.id ? updatedUser : user);

      return {
        ...state,
        users,
        selectedUser: updatedUser,
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromUsersActions.UPDATE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromUsersActions.CREATE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromUsersActions.CREATE_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users, action['payload']],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromUsersActions.CREATE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromUsersActions.DELETE_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromUsersActions.DELETE_USER_SUCCESS: {
      const deletedId = action['payload'];
      const users = [...state.users].filter(user => user.id !== deletedId);

      return {
        ...state,
        users,
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromUsersActions.DELETE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading: any = (state: UsersState): boolean => state.loading;

export const getUsers: any = (state: UsersState): UserModel[] => state.users;
export const getSelectedUser: any = (state: UsersState): UserModel => state.selectedUser;
