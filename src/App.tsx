import React from 'react';

import styles from './App.module.scss';

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
