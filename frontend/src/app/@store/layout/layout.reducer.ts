import * as fromActions from './layout.action';

export class LayoutState {
  theme: string;
}

const initialState: LayoutState = {
  theme: 'light',
};

export function layoutReducer(
  state: LayoutState = initialState,
  action: fromActions.LayoutActions
): LayoutState {
  switch (action.type) {
    case fromActions.CHANGE_THEME: {
      return {
        ...state,
        theme: action['payload']
      };
    }

    default:
      return state;
  }
}

export const getTheme: any = (state: LayoutState): string => state.theme;
