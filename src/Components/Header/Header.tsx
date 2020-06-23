import React, { FunctionComponent } from 'react';

import { useDispatch } from 'react-redux';

import { HeaderView } from './HeaderView';
import { useHeader } from './hooks';

export const Header: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const headerProps = useHeader(dispatch);

  return <HeaderView  {...headerProps} />;
}