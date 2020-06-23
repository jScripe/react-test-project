import { IHeaderAction, TEST_ACTION } from './actions';

export interface IHeaderState {
  message: string;
}

export const initialState: IHeaderState = {
  message: '',
}

export const header = (state = initialState, action: IHeaderAction) => {
  switch(action.type) {
    case TEST_ACTION: {
      const { payload: { testValue } } = action;

      return {
        ...state,
        message: testValue,
      }
    }

    default:
      return state;
  }
};