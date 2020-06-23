import React, { FunctionComponent } from 'react';

import styles from './HeaderView.module.scss';

interface IHeaderViewProps {
  onHeaderClick: () => void;
}

export const HeaderView: FunctionComponent<IHeaderViewProps> = ({
  onHeaderClick,
}) => {
  return (
    <div className={styles.header} onClick={onHeaderClick}></div>
  )
}