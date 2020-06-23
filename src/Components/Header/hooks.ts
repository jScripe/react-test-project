import { Dispatch, useCallback } from 'react';
import { testAction } from './actions';

export const useHeader = (
  dispatch: Dispatch<any>
) => {
  const onHeaderClick = useCallback(() => {
    dispatch(testAction());
  }, [dispatch]);

  return {
    onHeaderClick,
  }
};