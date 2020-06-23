export const TEST_ACTION = 'TEST_ACTION';

export interface ITestAction {
  type: typeof TEST_ACTION;
  payload: {
    testValue: string;
  }
}

export function testAction(): ITestAction {
  return {
    type: TEST_ACTION,
    payload: {
      testValue: 'test-value'
    },
  };
}

export type IHeaderAction = 
  | ITestAction
;